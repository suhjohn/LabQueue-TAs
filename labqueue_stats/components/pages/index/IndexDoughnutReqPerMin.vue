<template>
  <div id="index-doughnut-graph">
    <!-- Header -->
    <div id="index-doughnut-graph-header-container">
      <p class="text-small">Requests Per Minute Segments</p>
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
  API_TIME_FORMAT,
  INITIAL_DATE_FROM,
  INITIAL_DATE_TO
} from "@/constants.js";
import { demo } from "@/mixins/demo.js";
import GraphDoughnut from "@/components/UI/graph/GraphDoughnut.vue";
import GraphSelectDatePicker from "@/components/UI/graph/GraphSelectDatePicker.vue";
import { dateToString, getShiftRequests, filter_shifts } from "@/utils.js";

const minSegments = [15, 30, 45, 60, Infinity];
const minSegmentsLiteral = [
  "0~15 min",
  "15~30 min",
  "30~45min",
  "45~60 min",
  "60+ min"
];

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
      const reqPerMinSegmentCounts = [];
      const reqPerMinSegmentPercent = [];
      const shiftRequests = getShiftRequests(this.requests);
      const reqCount = Object.keys(this.requests).length;

      minSegments.forEach((minSegment, index) => {
        reqPerMinSegmentCounts.push(0);
        reqPerMinSegmentPercent.push(null);
      });
      Object.values(shiftRequests).forEach(requests => {
        requests.forEach(request => {
          let time_accepted = moment(request.time_accepted, API_TIME_FORMAT);
          let time_closed = moment(request.time_closed, API_TIME_FORMAT);
          let diff = time_closed.subtract(time_accepted).minutes();
          let index;
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
          reqPerMinSegmentCounts[index]++;
        });
      });
      reqPerMinSegmentCounts.forEach((count, index) => {
        reqPerMinSegmentPercent[index] = ((count * 100) / reqCount).toFixed(2);
      });
      return {
        datasets: [
          {
            data: reqPerMinSegmentPercent
          }
        ],
        labels: minSegmentsLiteral
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


