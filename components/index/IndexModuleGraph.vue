<template>
    <section>
        <!-- <div class="graph-header">
            <h1 class="graph-header-main">{{ selectedGraphData.cardData.value }}</h1>
            <h4 class="graph-header-sub">{{ selectedGraphData.label }}</h4>
        </div> -->
        <ul class="row">
            <GraphSelectionCard v-for="(grahpData, index) in graphDatas" :key="index" :title="grahpData.cardData.title" :value="grahpData.cardData.value" @click="onClickHandle(index)" :selected="index===selectedGraphIndex" />
        </ul>
        <div id="graph">
            <component v-bind:is="selectedGraphData.componentName"></component>
        </div>
    </section>
</template>

<script>
import GraphSelectionCard from "~/components/index/graph/GraphSelectionCard";
import GraphTotalRequest from "~/components/index/graph/GraphTotalRequest";
import GraphTotalTime from "~/components/index/graph/GraphTotalTime";
import GraphAvgTimePerReq from "~/components/index/graph/GraphAvgTimePerReq";
import GraphMinSegmentRatio from "~/components/index/graph/GraphMinSegmentRatio";
import GraphCourseRatio from "~/components/index/graph/GraphCourseRatio";
import moment from "moment";
import { mapGetters } from "vuex";
const minSegments = [15, 30, 45, 60, Infinity];
const courses = ["cos126", "cos226", "cos217"];
export default {
  components: {
    GraphSelectionCard,
    GraphTotalRequest,
    GraphTotalTime,
    GraphAvgTimePerReq,
    GraphMinSegmentRatio,
    GraphCourseRatio
  },
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
      selectedGraphIndex: 0
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
    onClickHandle(index) {
      this.selectedGraphData = this.graphDatas[index];
      this.selectedGraphIndex = index;
    },
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

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.graph-header-main {
  font-size: 3.6rem;
  font-weight: 400;
  color: $color-grey-darkest;
}

.graph-header-sub {
  font-size: 2rem;
  font-weight: 300;
  color: $color-grey-dark;
}

.row-container {
  & :not(:last-child) {
    margin-bottom: 1.5rem;
  }
}

.row {
  z-index: -1;
  display: flex;
  justify-content: flex-start;
}

@media only screen and (min-width: 1024px) {
}
</style>

