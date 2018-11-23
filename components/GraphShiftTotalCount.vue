<template>
  <div id="container">
    <lineGraph class="graph" v-if="showLine" :data="lineData" :options="options" />
    <div class="graph-options">
      <DropDownButton :defaultSelectedIndex="dropdownDefaultIndex" :options="Object.keys(dropdownOptions)" />
    </div>
  
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import styles from "~/assets/scss/variables.scss";
import DropDownButton from "~/components/UI/DropDownButton";

export default {
  components: {
    DropDownButton
  },

  data() {
    return {
      showLine: false,
      lineData: undefined,
      options: undefined,
      dropdownOptions: {
        "Last 1 week": 7,
        "Last 2 weeks": 14,
        "Last 1 month": 30,
        "Last 2 months": 60,
        "Last 3 months": 90
      },
      dropdownDefaultIndex: 2
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
$container-width: 60rem;
$container-width-mobile: 100%;
$container-height: 45rem;
$container-padding: 2rem;
$graph-options-height: 4rem;

#container {
  width: $container-width-mobile;
  height: $container-height;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid $color-grey-light;
  background-color: $color-white;
  box-shadow: $contained-box-m-shadow;
  box-sizing: content-box;
}

.graph {
  margin: auto;
  width: $container-width-mobile;
}

.graph-options {
  border-top: 1px solid $color-grey;
  box-sizing: content-box;
  height: $graph-options-height;
}

@media only screen and (min-width: 1270px) {
  #container {
    width: $container-width;
  }
  .graph {
    width: $container-width - (2 * $container-padding);
    height: $container-height - $container-padding - $graph-options-height;
  }
}
</style>


