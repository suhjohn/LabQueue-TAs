<template>
  <div id="container">
    <lineGraph class="graph" v-if="showLine" :data="lineData" :options="options"/>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showLine: false,
      lineData: undefined,
      options: undefined
    };
  },
  computed: {
    ...mapGetters(["getNRecentShiftsRequests", "getMostRecentShiftNumber"])
  },
  mounted() {
    this.showLine = true;
    const defaultCount = 5;
    const mostRecentShift = this.getMostRecentShiftNumber;
    const shifts = this.getNRecentShiftsRequests(defaultCount);
    // Generate array of [
    //  mostRecentShift - defaultCount,...,mostRecentShift
    // ]
    const labels = [...Array(defaultCount).keys()].map(
      x => "Shift " + (x + mostRecentShift - defaultCount + 1)
    );
    const shiftsCount = shifts.map(x => x.length);

    const lineData = {
      labels: labels,
      datasets: [
        {
          label: "Requests",
          fill: false,
          backgroundColor: "#b13938",
          borderColor: "#b13938",
          pointBackgroundColor: "white",
          borderWidth: 1,
          data: shiftsCount,
          lineTension: 0
        }
      ]
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      bezierCurve: false
    };
    this.lineData = lineData;
    this.options = options;
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
$header-height: 5rem;
$container-width: 60rem;
$container-height: 40rem;
$container-padding: 2rem;

#container {
  width: $container-width;
  height: $container-height;
  border-radius: 5px;
  border: 1px solid $color-grey-light;
  padding: $container-padding;
  background-color: $color-white;
  box-shadow: 0 3px 6px $color-grey, 0 3px 6px $color-grey;
}
.header {
  &-text {
    font-weight: 200;
    font-size: 1.6rem;
  }
}
.graph {
  height: $container-height - (2 * $container-padding);
}
</style>


