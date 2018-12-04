<template>
  <section>
    <DateOptions/>
    <ul class="tab-container">
      <GraphSelectionTab v-for="(grahpData, index) in graphDatas" :key="index" :title="grahpData.cardData.title" :value="grahpData.cardData.value" @click="onClickHandle(index)" :selected="index===selectedGraphIndex" />
    </ul>
    <div class="graph-container">
      <component v-bind:is="graphDatas[selectedGraphIndex].componentName"></component>
    </div>
  </section>
</template>

<script>
/** Import */
import moment from "moment";
import { mapGetters, mapActions, mapMutations } from "vuex";
import DateOptions from "~/components/index/DateOptions";
import GraphSelectionTab from "~/components/index/graph/GraphSelectionTab";
import GraphTotalRequest from "~/components/index/graph/GraphTotalRequest";
import GraphTotalTime from "~/components/index/graph/GraphTotalTime";
import GraphAvgTimePerReq from "~/components/index/graph/GraphAvgTimePerReq";
import GraphMinSegmentRatio from "~/components/index/graph/GraphMinSegmentRatio";
import GraphCourseRatio from "~/components/index/graph/GraphCourseRatio";

/** Constants */
const minSegments = [15, 30, 45, 60, Infinity];
const courses = ["cos126", "cos226", "cos217"];

/** Export */
export default {
  components: {
    DateOptions,
    GraphSelectionTab,
    GraphTotalRequest,
    GraphTotalTime,
    GraphAvgTimePerReq,
    GraphMinSegmentRatio,
    GraphCourseRatio
  },
  data() {
    return {
      selectedGraphIndex: 0
    };
  },
  computed: {
    /**
     * Vuex
     */
    ...mapGetters({
      getSelfRequestsCount: "getSelfRequestsCount",
      getSelfTotalTime: "getSelfTotalTime",
      getSelfRequests: "getSelfRequests"
    }),
    /**
     * Top Level Data
     */
    /**
     * Graph Tab Data getters
     */
    graphDatas() {
      return [
        { ...this.getTotalRequestsData },
        { ...this.getTotalTimeData },
        { ...this.getAverageTimePerReqData },
        { ...this.getMinSegmentRatioData },
        { ...this.getCourseRatioData }
      ];
    },
    getTotalRequestsData() {
      return {
        componentName: "GraphTotalRequest",
        label: "Total Requests",
        cardData: {
          title: "Total Requests",
          value: this.getSelfRequestsCount
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
        label: "Minutes/Req",
        cardData: {
          title: "Minutes/Req",
          value: (this.getSelfTotalTime / this.getSelfRequestsCount).toFixed(2)
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
        label: "% from 126|226|217",
        cardData: {
          title: "% from 126|226|217",
          value: this.reqByCoursesString
        }
      };
    },
    totalTimeString() {
      const totalMin = this.getSelfTotalTime;
      const totalHrs = Math.floor(totalMin / 60);
      const remainingMins = totalMin - totalHrs * 60;
      return `${totalHrs} hrs ${remainingMins} mins`;
    },
    reqByMinSegment() {
      let reqByMinSegment = [[], [], [], [], []];

      this.getSelfRequests.forEach(request => {
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
      const totalReq = this.getSelfRequestsCount;
      let reqRatio = [];
      reqByMinSeg.forEach(reqArr => {
        reqRatio.push((reqArr.length * 100 / totalReq).toFixed(2) + "%");
      });
      return reqRatio.join("|");
    },
    reqByCourse() {
      let reqByCourses = [[], [], []];
      this.getSelfRequests.forEach(request => {
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
      const totalReq = this.getSelfRequestsCount;
      let reqRatio = [];
      reqByCourse.forEach(reqArr => {
        reqRatio.push((reqArr.length * 100 / totalReq).toFixed(2) + "%");
      });
      return reqRatio.join("|");
    }
  },
  methods: {
    /**
     * Vuex
     * this.$store.dispatch(<name>, args)
     */
    ...mapActions({ setRequests: "setRequests" }),
    /**
     * Event Handlers
     */
    onClickHandle(index) {
      this.selectedGraphData = this.graphDatas[index];
      this.selectedGraphIndex = index;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.tab-container {
  overflow-x: scroll;
  white-space: nowrap;
}
.graph-container {
  margin-top: 4rem;
}
</style>

