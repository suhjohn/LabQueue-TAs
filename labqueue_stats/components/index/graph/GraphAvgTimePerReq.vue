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
    ...mapGetters([
      "getShiftRequestsObj",
      "getShiftRequestsArr",
      "getSelf",
      "getSelfShifts"
    ]),
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
                labelString: "min / Req",
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
    barDataSet() {
      const reqByShift = this.$store.getters.getShiftRequestsObj("shift");
      const shifts = this.$store.getters.getSelfShifts;
      const selfNetid = this.$store.getters.getSelf.netid;
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
        let shiftReqCount = reqs.length;
        data.push((shiftTotalDuration / shiftReqCount).toFixed(2));
      });
      const formattedData = {
        label: selfNetid,
        data: data
      };
      return [formattedData];
    },
    barLabels() {
      const shifts = this.$store.getters.getSelfShifts;
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
