<template>
  <div class="container">
    <!-- <barGraph class="graph" :data="barData" :options="options" /> -->
    <lineGraph class="graph" :data="barData" :options="options" /> 
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { calculateYMax } from "~/mixins/calculateYMax";

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
    const labels = this.barLabels;
    // label: name, data: req in that shift
    const barDataObj = this.barDataSet;

    let _datasets = [];
    _datasets.push({
      label: barDataObj.label,
      data: barDataObj.data
    });
    this.barData = {
      labels: labels,
      datasets: _datasets
    };

    this.options = {
      scales: {
        yAxes: [
          {
            position: "right",
            scaleLabel: {
              labelString: "# of Requests",
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
    // [{label: "", data: [<shift1 data>, <shift2 data>,...]}]
    fullBarDataSet() {
      const self = this.$store.getters.getSelf;
      const taRequests = this.$store.getters.getShiftRequestsObj("ta");
      const reqByShift = this.$store.getters.getShiftRequestsObj("shift");
      const shifts = Object.keys(reqByShift);
      const tas = Object.keys(taRequests);
      shifts.sort((a, b) => {
        return b - a;
      });

      // {"ta": [<shift1 data>,<shift2 data>,...]}
      const shiftData = {};
      const widthData = {};
      tas.forEach(ta => {
        shiftData[ta] = [];
        widthData[ta] = [];
      });
      shifts.forEach(shift => {
        tas.forEach(ta => {
          let reqs = reqByShift[shift][ta] || [];
          let reqCount = reqs.length;
          let width = reqCount ? 50 : 0;
          widthData[ta].push(width);
          shiftData[ta].push(reqCount);
        });
      });

      // Change the shiftData fit the required Dataset format
      const formattedData = [];
      tas.forEach(ta => {
        const label = ta === self.netid ? self.netid : null;
        let taData = {};
        if (ta) {
          taData["label"] = label;
        }
        taData["data"] = shiftData[ta];
        formattedData.push(taData);
      });
      return formattedData;
    },
    barDataSet() {
      const reqByShift = this.$store.getters.getShiftRequestsObj("shift");
      const shifts = this.$store.getters.getSelfShifts;
      const selfNetid = this.$store.getters.getSelf.netid;
      shifts.sort((a, b) => {
        return b - a;
      });
      /**
       * {label: "netid", data: []}
       */
      const data = [];
      shifts.forEach(shift => {
        let reqs = reqByShift[shift][selfNetid] || [];
        let reqCount = reqs.length;
        data.push(reqCount);
      });
      const formattedData = {
        label: selfNetid,
        data: data
      };
      return formattedData;
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
