<template>
  <div id="container">
    <barGraph class="graph" v-if="showLine" :data="barData" :options="options" />
    <div class="graph-options">
      <DropDownButton :defaultSelectedIndex="dropdownDefaultIndex" :options="Object.keys(dropdownOptions)" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
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
      barData: undefined,
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
    ...mapGetters([
      "getNRecentShiftsRequests",
      "getMostRecentShiftNumber",
      "getTotalRequestsOfNRecentShifts"
    ])
  },
  mounted() {
    this.showLine = true;

    const labels = [];
    const data = [];
    const barData = {
      labels: labels,
      datasets: [
        {
          backgroundColor: styles.colorCrimsonMainDark,
          borderColor: styles.colorCrimsonMainDark,
          label: "# of requests handled per minute segments",
          data: data
        }
      ]
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true // my new default options
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
    this.barData = barData;
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


