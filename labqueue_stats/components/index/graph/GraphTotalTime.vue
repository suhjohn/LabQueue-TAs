<template>
  <div class="container">
    <!-- <barGraph class="graph" :data="barData" :options="options" /> -->
    <lineGraph class="graph" :data="barData" :options="options" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { calculateYMax } from "~/mixins/calculateYMax";
import moment from "moment";

export default {
  mixins: [calculateYMax],
  computed: {
    /**
     * Vuex
     */
    ...mapGetters({
      getShiftRequestsObj: "getShiftRequestsObj",
      getShiftRequestsArr: "getShiftRequestsArr",
      getSelf: "getSelf",
      getSelfShifts: "getSelfShifts"
    }),
    /**
     * Main Computed
     */
    barData() {
      return {
        labels: this.barLabels,
        datasets: this.barDataSet
      };
    },
    options() {
      return {
        scales: {
          yAxes: [
            {
              position: "right",
              scaleLabel: {
                labelString: "Hours",
                display: true
              },
              ticks: {
                beginAtZero: true,
                suggestedMax: this.calculateYMax(this.barDataSet)
              },
              gridLines: {
                display: false
              }
            }
          ],
          xAxes: [{}]
        }
      };
    },
    /**
     * Implementation
     */
    barDataSet() {
      const reqByShift = this.getShiftRequestsObj("shift");
      const shifts = this.getSelfShifts;
      const selfNetid = this.getSelf.netid;
      shifts.sort((a, b) => {
        return b - a;
      });
      /**
       * [{label: "netid", data: []}]
       */
      const data = [];
      shifts.forEach(shift => {
        let reqs = reqByShift[shift][selfNetid] || [];
        let shiftTotalDuration = 0;
        reqs.forEach(req => {
          let from = moment(req.time_accepted);
          let to = moment(req.time_closed);
          let duration = moment.duration(to.diff(from)).asMinutes();
          shiftTotalDuration += duration;
        });
        data.push((shiftTotalDuration / 60).toFixed(2));
      });
      const formattedData = {
        label: selfNetid,
        data: data
      };
      return [formattedData];
    },
    barLabels() {
      const shifts = this.getSelfShifts;
      shifts.sort((a, b) => {
        return b - a;
      });
      return shifts;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.container {
  position: relative;
  width: 100%;
  height: $graph-height;
}

.graph {
  width: auto;
  height: $graph-height;
}

@media only screen and (min-width: 930px) {
}
</style>
