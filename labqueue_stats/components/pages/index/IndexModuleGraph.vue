<template>
  <div>
    <!-- Tabs -->
    <div id="index-module-graph-tabs">
      <GraphSelectTab
        v-for="(tab, index) in tabs"
        :key="index"
        :index="index"
        :selected="isSelectedTab(index)"
        :name="tab.name"
        @select="onSelect"
      ></GraphSelectTab>
    </div>

    <!-- Graph -->
    <div id="index-module-graph">
      <GraphLine :data="graphData"></GraphLine>
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
import moment from "moment";
// Vue
import { mapGetters, mapActions } from "vuex";
// Project
import { DATE_FORMAT } from "@/constants.js";
import { dateToString, getShiftRequests, filter_shifts } from "@/utils.js";
import GraphSelectTab from "@/components/UI_v2/graph/GraphSelectTab.vue";
import GraphLine from "@/components/UI_v2/graph/GraphLine.vue";
import GraphSelectDatePicker from "@/components/UI_v2/graph/GraphSelectDatePicker.vue";

const defaultDateRange = {
  value: 1,
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
    return {
      selectedTabIndex: 0,
      tabs: [
        {
          name: "Requests",
          generateDatasetFunc: this.generateDataset_requests,
          generateLabelFunc: this.generateLabel_requests
        },
        {
          name: "Handle Time",
          generateDatasetFunc: this.generateDataset_handleTime,
          generateLabelFunc: this.generateLabel_handleTime
        }
      ],
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
    graphData() {
      const _graphData = this.tabs[this.selectedTabIndex].generateDatasetFunc();
      const _graphLabel = this.tabs[this.selectedTabIndex].generateLabelFunc();

      const graphDataset = {
        labels: _graphLabel,
        datasets: _graphData
      };
      console.log(graphDataset);
      return graphDataset;
    }
  },
  methods: {
    // API calls
    ...mapActions({
      getRequests: "querySelfRequests",
      getRequests_demo: "queryRequests_demo"
    }),
    // v-on methods
    isSelectedTab(index) {
      return index == this.selectedTabIndex;
    },
    onSelect(index) {
      this.selectedTabIndex = index;
    },
    async setRequests() {
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
    },
    generateDataset_requests() {
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
    generateDataset_handleTime() {
      return {};
    },
    generateLabel_requests() {
      return filter_shifts(this.requests);
    },
    generateLabel_handleTime() {
      return filter_shifts(this.requests);
    }
  },
  async mounted() {
    await this.setRequests();
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#index-module-graph-tabs {
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
