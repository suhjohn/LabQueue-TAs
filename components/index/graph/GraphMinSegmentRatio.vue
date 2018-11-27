<template>
    <div class="container">
        <barGraph class="graph" :data="barData" :options="options" />
    <!-- <lineGraph class="graph" :data="barData" :options="options" />  -->
    </div>
</template>
<script>
import styles from "~/assets/scss/variables.scss";
import moment from "moment";
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

    const _datasets = this.barDataSet;
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
              labelString: "% Course Requests",
              display: true
            },
            ticks: {
              beginAtZero: true,
              suggestedMax: this.calculateYMax(_datasets)
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
      "getSelfShifts",
      "getSelfRequestsCount"
    ]),
    barDataSet() {
      const reqByShift = this.$store.getters.getShiftRequestsObj("shift");
      const reqCount = this.$store.getters.getSelfRequestsCount;
      const shifts = this.$store.getters.getSelfShifts;
      const selfNetid = this.$store.getters.getSelf.netid;

      const minSegments = [15, 30, 45, 60, Infinity];
      const minSegmentsLiteral = ["0~15", "15~30", "30~45", "45~60", "60+"];
      const segmentColor = [
        styles.colorMainCompRed,
        styles.colorMainCompMarine,
        styles.colorMainCompGreen,
        styles.colorMainCompBlue,
        styles.colorMainCompViolet
      ];
      shifts.sort((a, b) => {
        return b - a;
      });

      /**
       * [{label: "0-15", data: []}, {label:"15-30", data: []}, {label:"30-45", data: []},...]
       */
      const dataSet = {};
      minSegments.forEach((minSegment, index) => {
        dataSet[minSegment] = [];
      });
      shifts.forEach(shift => {
        let reqByMinSegment = [[], [], [], [], []];
        let shiftReqs = reqByShift[shift][selfNetid];
        let shiftReqsCount = shiftReqs.length;
        shiftReqs.forEach(request => {
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
        minSegments.forEach((minSegment, index) => {
          dataSet[minSegment].push(
            (reqByMinSegment[index].length * 100 / shiftReqsCount).toFixed(2)
          );
        });
      });

      const formattedData = minSegments.map((minSegment, index) => {
        let obj = {
          label: minSegmentsLiteral[index],
          data: dataSet[minSegment],
          baseColor: segmentColor[index]
        };
        return obj;
      });
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
</style>


