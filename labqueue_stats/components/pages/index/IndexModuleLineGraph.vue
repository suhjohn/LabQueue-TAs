<template>
  <div>
    <!-- graphs -->
    <div id="index-module-graph-graphs">
      <GraphSelectTab
        v-for="(tab, index) in Object.values(graphs)"
        :key="index"
        :index="index"
        :value="tab.tabValue"
        :valueUnit="tab.tabUnit"
        :selected="isSelectedTab(tab.name)"
        :name="tab.name"
        @select="onSelect"
      ></GraphSelectTab>
    </div>
    <!-- Graph  -->
    <div id="index-module-graph">
      <GraphLine :data="selectedGraphData" :options="selectedGraphOptions"></GraphLine>
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
import { DATE_FORMAT } from "@/constants.js";
import { dateToString, getShiftRequests, filter_shifts } from "@/utils.js";
import GraphSelectTab from "@/components/UI_v2/graph/GraphSelectTab.vue";
import GraphLine from "@/components/UI_v2/graph/GraphLine.vue";
import GraphSelectDatePicker from "@/components/UI_v2/graph/GraphSelectDatePicker.vue";

const defaultDateRange = {
  value: 2,
  unit: "months"
};

export default {
  components: {
    GraphLine,
    GraphSelectTab,
    GraphSelectDatePicker
  },
  props: {
    isDemo: {
      type: Boolean,
      default: true
    }
  },
  data() {
    const initialDateFrom = moment()
      .subtract(defaultDateRange.value, defaultDateRange.unit)
      .startOf("day")
      .toDate();
    const initialDateTo = moment()
      .startOf("day")
      .toDate();
    const DEFAULT_TAB = "Requests";

    return {
      selectedTab: DEFAULT_TAB,
      graphs: {
        Requests: {
          name: "Requests",
          units: "",
          tabValue: null,
          tabUnit: "requests / shift",
          getDatasetFunc: this.getDataset_requests,
          getLabelFunc: this.getLabel_requests,
          getOptionFunc: this.getOption_requests
        },
        "Handle Time": {
          name: "Handle Time",
          units: "min / request",
          tabValue: null,
          tabUnit: "min / request",
          getDatasetFunc: this.getDataset_handleTime,
          getLabelFunc: this.getLabel_handleTime,
          getOptionFunc: this.getOption_handleTime
        }
      },
      datepickers: {
        "Date From": {
          label: "Date From",
          date: initialDateFrom,
          initialDate: initialDateFrom
        },
        "Date To": {
          label: "Date To",
          date: initialDateTo,
          initialDate: initialDateTo
        }
      },
      requests: []
    };
  },
  computed: {
    ...mapGetters({
      getSelf: "getSelf",
      demo_getSelf: "demo_getSelf"
    }),
    selectedGraphData() {
      const newDatasets = this.graphs[this.selectedTab].getDatasetFunc();
      const newLabels = this.graphs[this.selectedTab].getLabelFunc();
      const newGraphData = {
        datasets: newDatasets,
        labels: newLabels
      };
      return newGraphData;
    },
    selectedGraphOptions() {
      const newOptions = this.graphs[this.selectedTab].getOptionFunc();
      return newOptions;
    }
  },
  methods: {
    // API calls
    ...mapActions({
      getRequests: "querySelfRequests",
      getRequests_demo: "queryRequests_demo"
    }),
    // v-on methods
    isSelectedTab(name) {
      return name === this.selectedTab;
    },
    onSelect(name) {
      if (this.selectedTab !== name) this.selectedTab = name;
    },
    setTabValues() {
      this.setTabValue_requests();
      this.setTabValue_handleTime();
    },
    async setRequests() {
      console.log("setting Requests");
      let requests;
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
      if (this.isDemo) {
        requests = await this.getRequests_demo(query);
      } else {
        requests = await this.getRequests(query);
      }
      this.requests = requests;
    },
    async onSelectDate(label, date) {
      this.datepickers[label].date = date;
      await this.setRequests();
      this.setTabValues();
    },
    // Graph: Requests
    getDataset_requests() {
      const selfNetid = this.isDemo
        ? this.demo_getSelf.netid
        : this.getSelf.netid;
      const shiftRequests = getShiftRequests(this.requests);

      const reqCounts = [];
      Object.values(shiftRequests).forEach(reqsForShift => {
        let reqCount = reqsForShift.length;
        reqCounts.push(reqCount);
      });
      return [
        {
          label: selfNetid,
          data: reqCounts
        }
      ];
    },
    setTabValue_requests() {
      const shiftRequests = getShiftRequests(this.requests);
      const shiftCount = Object.keys(shiftRequests).length;
      const requestsSum = this.requests.length;
      const requestsTabVal = (requestsSum / shiftCount).toFixed(2);
      console.log(shiftCount);
      this.graphs["Requests"].tabValue = requestsTabVal;
    },
    getLabel_requests() {
      return filter_shifts(this.requests);
    },
    getOption_requests() {
      return {
        yAxes: {
          scaleLabel: {
            labelString: this.graphs["Requests"].name,
            display: true,
            units: this.graphs["Requests"].units
          }
        }
      };
    },
    // Graph: Handle Time
    setTabValue_handleTime() {
      const requestsCount = this.requests.length;
      const handletimeSum = this.requests
        .reduce((total, request) => {
          let time_accepted = moment(request.time_accepted);
          let time_closed = moment(request.time_closed);
          let handleTime = time_closed.subtract(time_accepted).minutes();
          let handleTimeMoment = moment.duration(handleTime, "minutes");
          return moment.duration(total, "minutes").add(handleTimeMoment);
        })
        .asMinutes();
      const handleTimeTabVal = (handletimeSum / requestsCount).toFixed(2);
      this.graphs["Handle Time"].tabValue = handleTimeTabVal;
    },
    getDataset_handleTime() {
      const selfNetid = this.isDemo
        ? this.demo_getSelf.netid
        : this.getSelf.netid;
      const shiftRequests = getShiftRequests(this.requests);
      const handleTimes = [];
      Object.values(shiftRequests).forEach(reqsForShift => {
        let shiftReqCount = reqsForShift.length;
        let shiftTotalDur = 0; // in minutes
        reqsForShift.forEach(req => {
          let from = moment(req.time_accepted);
          let to = moment(req.time_closed);
          let duration = moment.duration(to.diff(from));
          shiftTotalDur += duration.asMinutes();
        });
        const handleTime = (shiftTotalDur / shiftReqCount).toFixed(2);
        handleTimes.push(handleTime);
      });
      return [
        {
          label: selfNetid,
          data: handleTimes
        }
      ];
    },
    getLabel_handleTime() {
      return filter_shifts(this.requests);
    },
    getOption_handleTime() {
      return {
        yAxes: {
          scaleLabel: {
            labelString: this.graphs["Handle Time"].name,
            display: true,
            units: this.graphs["Handle Time"].units
          }
        }
      };
    }
  },
  async created() {
    await this.setRequests();
    this.setTabValues();
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#index-module-graph-graphs {
  height: 12rem;
}
#index-module-graph {
  height: 28rem;
}
#index-module-graph-date {
  height: calc(5rem - 5px);
  padding-left: $margin-x-small;
}
#graph-select-date-container {
  height: 100%;
  display: flex;
}
</style>
