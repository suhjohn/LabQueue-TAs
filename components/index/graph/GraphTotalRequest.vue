<template>
  <div class="container">
    <barGraph class="graph" :data="barData" :options="options" />
  </div>
</template>

<script>
import styles from "~/assets/scss/variables.scss";
import { mapGetters } from "vuex";
export default {
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
    const dataSet = this.barDataSet;

    const _datasets = [];
    const baseDatasetObj = {
      backgroundColor: styles.colorCrimsonMainDark,
      borderColor: styles.colorCrimsonMainDark
    };
    dataSet.forEach(dataObj => {
      _datasets.push({
        ...baseDatasetObj,
        label: dataObj.label,
        data: dataObj.data
      });
    });

    this.barData = {
      labels: labels,
      datasets: _datasets
    };
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            position: "right",
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: false
            }
          }
        ],
        xAxes: [
          {
            barThickness: 100
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters(["getShiftRequestsObj", "getShiftRequestsArr"]),
    graphStyleClass() {
      return {};
    },
    // [{label: "", data: [<shift1 data>, <shift2 data>,...]}]
    barDataSet() {
      const taRequests = this.$store.getters.getShiftRequestsObj("ta");
      const reqByShift = this.$store.getters.getShiftRequestsObj("shift");
      const shifts = Object.keys(reqByShift);
      const tas = Object.keys(taRequests);
      shifts.sort((a, b) => {
        return b - a;
      });

      // {"ta": [<shift1 data>,<shift2 data>,...]}
      const shiftData = {};
      tas.forEach(ta => {
        shiftData[ta] = [];
      });
      shifts.forEach(shift => {
        tas.forEach(ta => {
          let reqs = reqByShift[shift][ta] || [];
          let reqCount = reqs.length;
          shiftData[ta].push(reqCount);
        });
      });

      // Change the shiftData fit the required Dataset format
      const formattedData = [];
      tas.forEach(ta => {
        let taData = {};
        taData["label"] = ta;
        taData["data"] = shiftData[ta];
        formattedData.push(taData);
      });
      return formattedData;
    },
    barLabels() {
      const reqByShift = this.$store.getters.getShiftRequestsObj("shift");
      const shifts = Object.keys(reqByShift);
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
