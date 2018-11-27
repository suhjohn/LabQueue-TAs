<template>
  <section>
    <div class="datepicker-list-wrapper">
      <ul class="datepicker-list" v-on-clickaway="away" @click="onClickDatepicker">
        <datepicker @input="fetchData" :typeable="true" @opened="calendarHandler(dateToState, true)" @closed="calendarHandler(dateToState, false)" class="datepicker" calendar-class="datepicker-calendar" input-class="datepicker-input" :class="{'datepicker-opened': dateToState.calendarIsOpen, 'datepicker-closed': !dateToState.calendarIsOpen}" v-model="dateFrom"></datepicker>

        <datepicker @input="fetchData" :typeable="true" @opened="calendarHandler(dateFromState, true)" @closed="calendarHandler(dateFromState, false)" class="datepicker" calendar-class="datepicker-calendar" input-class="datepicker-input" :class="{'datepicker-opened': dateFromState.calendarIsOpen, 'datepicker-closed': !dateFromState.calendarIsOpen}" v-model="dateTo"></datepicker>
      </ul>
    </div>
    <ul class="row">
      <GraphSelectionCard v-for="(grahpData, index) in graphDatas" :key="index" :title="grahpData.cardData.title" :value="grahpData.cardData.value" @click="onClickHandle(index)" :selected="index===selectedGraphIndex" />
    </ul>
    <div id="graph">
      <component v-bind:is="selectedGraphData.componentName"></component>
    </div>
  </section>
</template>

<script>
/** Import */
import moment from "moment";
import Datepicker from "vuejs-datepicker";
import { mixin as clickaway } from "vue-clickaway";
import { mapGetters, mapActions, mapMutations } from "vuex";
import GraphSelectionCard from "~/components/index/graph/GraphSelectionCard";
import GraphTotalRequest from "~/components/index/graph/GraphTotalRequest";
import GraphTotalTime from "~/components/index/graph/GraphTotalTime";
import GraphAvgTimePerReq from "~/components/index/graph/GraphAvgTimePerReq";
import GraphMinSegmentRatio from "~/components/index/graph/GraphMinSegmentRatio";
import GraphCourseRatio from "~/components/index/graph/GraphCourseRatio";

/** Constants */
const minSegments = [15, 30, 45, 60, Infinity];
const courses = ["cos126", "cos226", "cos217"];
const defaultDateRange = {
  value: 1,
  unit: "months"
}; // useful for moment.js
/** Export */
export default {
  components: {
    Datepicker,
    GraphSelectionCard,
    GraphTotalRequest,
    GraphTotalTime,
    GraphAvgTimePerReq,
    GraphMinSegmentRatio,
    GraphCourseRatio
  },
  mixins: [clickaway],
  created() {
    this.graphDatas.push(this.getTotalRequestsData());
    this.graphDatas.push(this.getTotalTimeData());
    this.graphDatas.push(this.getAverageTimePerReqData());
    this.graphDatas.push(this.getMinSegmentRatioData());
    this.graphDatas.push(this.getCourseRatioData());
  },
  data() {
    return {
      graphDatas: [],
      selectedGraphData: this.getTotalRequestsData(),
      selectedGraphIndex: 0,
      dateTo: moment()
        .startOf("day")
        .toDate(),
      dateFrom: moment()
        .subtract(defaultDateRange.value, defaultDateRange.unit)
        .startOf("day")
        .toDate(),
      dateFromState: {
        calendarIsOpen: false
      },
      dateToState: {
        calendarIsOpen: false
      }
    };
  },
  computed: {
    ...mapGetters(["getSelfRequestsCount", "getSelfTotalTime"]),
    totalTimeString() {
      const totalMin = this.$store.getters.getSelfTotalTime;
      const totalHrs = Math.floor(totalMin / 60);
      const remainingMins = totalMin - totalHrs * 60;
      return `${totalHrs} hrs ${remainingMins} mins`;
    },
    reqByMinSegment() {
      let reqByMinSegment = [[], [], [], [], []];

      this.$store.getters.getSelfRequests.forEach(request => {
        let time_accepted = moment(request.time_accepted);
        let time_closed = moment(request.time_closed);
        let diff = time_closed.subtract(time_accepted).minutes();
        let index = 0;
        if (diff < minSegments[0]) {
          index = 0;
        } else if (diff < minSegments[1]) {
          index = 1;
        } else if (diff < minSegments[2]) {
          index = 2;
        } else if (diff < minSegments[3]) {
          index = 3;
        } else {
          index = 4;
        }
        reqByMinSegment[index].push(request);
      });
      return reqByMinSegment;
    },
    reqByMinRatioString() {
      const reqByMinSeg = this.reqByMinSegment;
      const totalReq = this.$store.getters.getSelfRequestsCount;
      let reqRatio = [];
      reqByMinSeg.forEach(reqArr => {
        reqRatio.push((reqArr.length / totalReq).toFixed(2));
      });
      return reqRatio.join("|");
    },
    reqByCourse() {
      let reqByCourses = [[], [], []];
      this.$store.getters.getSelfRequests.forEach(request => {
        let reqCourse = request.course;
        let index = 0;
        switch (reqCourse) {
          case courses[0]:
            index = 0;
            break;
          case courses[1]:
            index = 1;
            break;
          case courses[2]:
            index = 2;
            break;
        }
        reqByCourses[index].push(request);
      });
      return reqByCourses;
    },
    reqByCoursesString() {
      const reqByCourse = this.reqByCourse;
      const totalReq = this.$store.getters.getSelfRequestsCount;
      let reqRatio = [];
      reqByCourse.forEach(reqArr => {
        reqRatio.push((reqArr.length / totalReq).toFixed(2));
      });
      return reqRatio.join("|");
    }
  },
  methods: {
    /**
     * Vuex
     * this.$store.dispatch(<name>, args)
     */
    ...mapActions(["setRequests"]),
    ...mapMutations({ setFetchingState: "setFetchingState" }),
    /**
     * Event Handlers
     */
    away() {
      this.dateFromState.calendarIsOpen = false;
      this.dateToState.calendarIsOpen = false;
    },
    calendarHandler(calendarState, isOpen) {
      calendarState.calendarIsOpen = isOpen;
      if (calendarState == this.dateFromState) {
        this.dateToState.calendarIsOpen = false;
      } else {
        this.dateFromState.calendarIsOpen = false;
      }
    },
    onClickHandle(index) {
      this.selectedGraphData = this.graphDatas[index];
      this.selectedGraphIndex = index;
    },
    async fetchData() {
      var wait = ms => new Promise(r => setTimeout(r, ms));
      // ascertain that the inputted value is relevant value
      const dateFrom = this.dateFrom;
      const dateTo = this.dateTo;
      this.setFetchingState(true);
      await wait(2000);
      if (
        dateFrom.getTime() != this.dateFrom.getTime() ||
        dateTo.getTime() != this.dateTo.getTime()
      ) {
        return;
      }
      const dateFromString = moment(dateFrom).format("YYYY-MM-DD");
      const dateToString = moment(dateTo).format("YYYY-MM-DD");
      await this.$store.dispatch("setRequests", {
        dateFrom: dateFromString,
        dateTo: dateToString
      });
      this.setFetchingState(false);
    },
    /**
     * Hacky fix to maintain state
     */
    onClickDatepicker() {},
    /**
     * Graph Tab Data getters
     */
    getTotalRequestsData() {
      return {
        componentName: "GraphTotalRequest",
        label: "Total Requests",
        cardData: {
          title: "Total Requests",
          value: this.$store.getters.getSelfRequestsCount
        }
      };
    },
    getTotalTimeData() {
      return {
        componentName: "GraphTotalTime",
        label: "Total Time",
        cardData: {
          title: "Total Time",
          value: this.totalTimeString
        }
      };
    },
    getAverageTimePerReqData() {
      return {
        componentName: "GraphAvgTimePerReq",
        label: "Time/Req",
        cardData: {
          title: "Time/Req",
          value: (
            this.$store.getters.getSelfTotalTime /
            this.$store.getters.getSelfRequestsCount
          ).toFixed(2)
        }
      };
    },
    getMinSegmentRatioData() {
      return {
        componentName: "GraphMinSegmentRatio",
        label: "% closed in 15|30|45|60|60+ min",
        cardData: {
          title: "% closed in 15|30|45|60|60+ min",
          value: this.reqByMinRatioString
        }
      };
    },
    getCourseRatioData() {
      return {
        componentName: "GraphCourseRatio",
        label: "% of 126|226|217",
        cardData: {
          title: "% of 126|226|217",
          value: this.reqByCoursesString
        }
      };
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.datepicker {
  &:not(:last-child) {
    margin-right: 2rem;
  }
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 0px 0px 1px $color-grey-light;
  border-radius: 10px;
  &-closed {
    transition: 0.2s box-shadow;
    &:hover {
      box-shadow: 0px 0px 0px 1px $color-grey-dark;
    }
  }
  &-opened {
    box-shadow: 0px 0px 0px 1px $color-crimson-main;
    & div {
      & input {
        & input {
          cursor: text;
        }
      }
    }
  }
  &-input {
    padding-left: 1rem;
    height: 4rem;
    line-height: 4rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:focus {
      cursor: text;
    }
  }
  &-calendar {
    right: 0;
    & div {
      .cell {
        &:hover {
          background-color: $color-grey-light;
          border: none !important;
        }
        &.selected {
          color: $color-white;
          background-color: $color-crimson-main-lighter;
          border: none !important;
          &:hover {
            background-color: $color-crimson-main-lighter;
          }
        }
      }
    }
  }
}
.datepicker-list {
  display: flex;
  flex-wrap: wrap;
  &-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenlygu;
}

@media only screen and (min-width: 1024px) {
}
</style>

