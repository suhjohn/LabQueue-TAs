<template>
  <div id="index-doughnut-graph">
    <!-- Header -->
    <div id="index-doughnut-graph-header-container">
      <p class="text-small">Courses</p>
    </div>
    <!-- Graph -->
    <div id="index-doughnut-graph-container">
      <GraphDoughnut :data="graphData" :options="graphOptions"/>
    </div>

    <!-- Date -->
    <div id="index-module-graph-date">
      <div id="graph-select-date-container">
        <GraphSelectDatePicker
          v-for="(datepicker, index) 
          in Object.values(datepickers)"
          :key="index"
          :label="datepicker.label"
          :initialDate="datepicker.initialDate"
          @selectDate="onSelectDate"
        />
      </div>
    </div>
  </div>
</template>
<script>
// External
import moment, { isMoment } from "moment";
// Vue
import { mapGetters, mapActions } from "vuex";
// Project
import {
  DATE_FORMAT,
  INITIAL_DATE_FROM,
  INITIAL_DATE_TO
} from "@/constants.js";
import GraphDoughnut from "@/components/UI/graph/GraphDoughnut.vue";
import GraphSelectDatePicker from "@/components/UI/graph/GraphSelectDatePicker.vue";
import { demo } from "@/mixins/demo.js";
import { dateToString, getShiftRequests, filter_shifts } from "@/utils.js";

const courses = ["cos126", "cos226", "cos217"];

export default {
  components: {
    GraphDoughnut,
    GraphSelectDatePicker
  },
  mixins: [demo],
  data() {
    return {
      datepickers: {
        "Date From": {
          label: "Date From",
          date: INITIAL_DATE_FROM,
          initialDate: INITIAL_DATE_FROM
        },
        "Date To": {
          label: "Date To",
          date: INITIAL_DATE_TO,
          initialDate: INITIAL_DATE_TO
        }
      },
      requests: []
    };
  },
  computed: {
    graphData() {
      const courseCounts = [];
      const coursePercents = [];
      const shiftRequests = getShiftRequests(this.requests);
      const reqCount = Object.keys(this.requests).length;

      // Count requests of a certain course
      courses.forEach(course => {
        let courseReqCount = this.requests.filter(req => {
          return req.course === course;
        }).length;
        courseCounts.push(courseReqCount);
      });

      courseCounts.forEach((count, index) => {
        coursePercents.push(((count * 100) / reqCount).toFixed(2));
      });
      return {
        datasets: [
          {
            data: coursePercents
          }
        ],
        labels: courses
      };
    },
    graphOptions() {
      return {};
    }
  },
  methods: {
    async setRequests() {
      const query = {
        accepted_before: dateToString(
          this.datepickers["Date To"].date,
          DATE_FORMAT
        ),
        accepted_after: dateToString(
          this.datepickers["Date From"].date,
          DATE_FORMAT
        )
      };
      this.requests = await this.getRequests(query);
    },
    async onSelectDate(label, date) {
      this.datepickers[label].date = date;
      await this.setRequests();
    }
  },
  async created() {
    await this.setRequests();
  }
};
</script>
<style lang="scss" scoped>
#index-doughnut-graph-container {
  height: 28rem;
}
#index-doughnut-graph-header-container {
  height: 5rem;
  line-height: 5rem;
  padding-left: 2rem;
}
#graph-select-date-container {
  height: 100%;
  display: flex;
}
#index-doughnut-graph {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 0.5rem;
}
</style>


