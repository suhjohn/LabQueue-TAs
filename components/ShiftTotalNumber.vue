<template>
  <div id="container">
    <lineGraph class="graph" v-if="showLine" :data="lineData" :options="options"/>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import styles from "~/assets/scss/variables.scss";

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
    const labels = [];
    const data = [];

    const lineData = {
      labels: labels,
      datasets: [
        {
          label: "# of Requests",
          fill: false,
          backgroundColor: styles.colorCrimsonMainDark,
          borderColor: styles.colorCrimsonMainDark,
          pointBackgroundColor: "white",
          borderWidth: 1,
          data: data,
          lineTension: 0
        }
      ]
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      bezierCurve: false,
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      }
    };
    this.lineData = lineData;
    this.options = options;
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
$header-height: 5rem;
$graph-container-width: 60rem;
$container-height: 40rem;
$container-padding: 2rem;
$graph-options-height: 4rem;

#container {
  padding-top: $container-padding;
  border-radius: 5px;
  border: 1px solid $color-grey-light;
  background-color: $color-white;
  box-shadow: $contained-box-m-shadow;
}

.graph {
  width: 100%;
  margin: auto;
}
.graph-options {
  border-top: 0.5px solid $color-grey;
  box-sizing: content-box;
  height: $graph-options-height;
}
@media only screen and (min-width: 930px) {
  #container {
    width: $graph-container-width;
  }

  .graph {
    width: $graph-container-width - (2 * $container-padding);
    height: $container-height - (2 * $container-padding);
  }
}
</style>


