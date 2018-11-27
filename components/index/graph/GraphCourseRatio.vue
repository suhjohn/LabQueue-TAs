<template>
    <div class="container">
        <barGraph class="graph" :data="barData" :options="options" />
    <!-- <lineGraph class="graph" :data="barData" :options="options" />  -->
    </div>
</template>
<script>
import styles from "~/assets/scss/variables.scss";
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
    console.log(_datasets);
    this.options = {
      scales: {
        yAxes: [
          {
            position: "right",
            scaleLabel: {
              labelString: "Requests",
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
      "getSelfShifts",
      "getSelfRequestsCount"
    ]),
    barDataSet() {
      const reqByShift = this.$store.getters.getShiftRequestsObj("shift");
      const reqCount = this.$store.getters.getSelfRequestsCount;
      const shifts = this.$store.getters.getSelfShifts;
      const selfNetid = this.$store.getters.getSelf.netid;

      const courses = ["cos226", "cos217", "cos126"];
      const courseColor = [
        styles.colorMainCompRed,
        styles.colorMainCompMarine,
        styles.colorMainCompGreen
      ];
      shifts.sort((a, b) => {
        return b - a;
      });

      /**
       * [{label: "cos 226", data: []}, {label:"cos 217", data: []}, {label:"cos 126", data: []}]
       */
      const dataSet = {};
      courses.forEach((course, index) => {
        dataSet[course] = [];
      });
      shifts.forEach(shift => {
        let shiftReqs = reqByShift[shift][selfNetid];
        let shiftReqsCount = shiftReqs.length;
        courses.forEach(course => {
          let courseReqCount = shiftReqs.filter(req => {
            return req.course === course;
          }).length;
          dataSet[course].push((courseReqCount / shiftReqsCount).toFixed(2));
        });
      });

      const formattedData = courses.map((course, index) => {
        let obj = {
          label: course,
          data: dataSet[course],
          baseColor: courseColor[index]
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


