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
  data() {
    return {
      barData: undefined,
      options: undefined
    };
  },
  created() {
    // Shifts
    const _labels = this.barLabels;
    // label: name, data: req in that shift
    const _datasets = this.barDataSet;
    this.barData = {
      labels: _labels,
      datasets: _datasets
    };

    this.options = {
      tooltips: {
        callbacks: {
          title: () => null,
          label: tooltipItem => {
            const hours = tooltipItem.yLabel;
            const minutes = (hours - Math.floor(hours)) * 60;
            return `${Math.floor(hours)} hrs ${Math.floor(minutes)} mins: ${
              tooltipItem.xLabel
            }`;
          }
        }
      },
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
              max: this.calculateYMax(_datasets)
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
  computed: {
    ...mapGetters([
      "getShiftRequestsObj",
      "getShiftRequestsArr",
      "getSelf",
      "getSelfShifts"
    ]),
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
        data.push((shiftTotalDuration / 60).toFixed(2));
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
  height: 50rem;
}

.graph {
  width: auto;
  height: 50rem;
}

@media only screen and (min-width: 930px) {
}
</style>
