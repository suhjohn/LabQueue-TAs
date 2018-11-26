<template>
  <section>
    <div>
      
    </div>
    <div id="graph">
      {{selectedGraphData}}
      <component v-bind:is="selectedGraphData.componentName"></component>
    </div>
    <ul class="row">
      <GraphSelectionCard v-for="(grahpData, index) in graphDatas" :key="index" :title="grahpData.cardData.title" :value="grahpData.cardData.value" @click="onClickHandle(index)" :selected="index===selectedGraphIndex" />
    </ul>
  </section>
</template>

<script>
import GraphSelectionCard from "~/components/UI/GraphSelectionCard";
import GraphTotalRequest from "~/components/GraphTotalRequest";
import GraphTotalTime from "~/components/GraphTotalTime";
import GraphAvgTimePerReq from "~/components/GraphAvgTimePerReq";
import GraphMinSegmentRatio from "~/components/GraphMinSegmentRatio";
import GraphCourseRatio from "~/components/GraphCourseRatio";
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
    GraphCourseRatio,
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
      selectedGraphIndex: 0,
    };
  },
  computed: {
    ...mapGetters([
      "getSelfRequestsCount",
      "getSelfRequestsObjShift",
      "getSelfTotalTime"
    ]),
    totalTimeString() {
      const dur = moment.duration(
        this.$store.getters.getSelfTotalTime,
        "minutes"
      );
      return moment.utc(dur.asMilliseconds()).format("HH:mm");
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
    onClickHandle(index){
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
        label: "% of Req completed in 15|30|45|60|60+ min",
        cardData: {
          title: "% of Req completed in 15|30|45|60|60+ min",
          value: this.reqByMinRatioString
        }
      };
    },
    getCourseRatioData() {
      return {
        componentName: "GraphCourseRatio",
        label: "Req from 126|226|217",
        cardData: {
          title: "Req from 126|226|217",
          value: this.reqByCoursesString
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.row-container {
  & :not(:last-child) {
    margin-bottom: 1.5rem;
  }
}
.row {
  z-index: -1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}

@media only screen and (min-width: 1024px) {
}
</style>

