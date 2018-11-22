<template>
    <div id="container">
        <barGraph class="graph" v-if="showLine" :data="barData" :options="options"/>
    </div>    
</template>
<script>
import styles from "~/assets/scss/variables.scss";
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  data() {
    return {
      showLine: false,
      barData: undefined,
      options: undefined
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
        xAxes: [
          {
            barThickness: 100
          }
        ]
      }
    };
    this.barData = barData;
    this.options = options;
  },
  methods: {
    /* Given the list of requests, return the count 
       of requests that have been accepted and closed in minMin~maxMin. */
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
.graph {
  width: $container-width - (2 * $container-padding);
  height: $container-height - (2 * $container-padding);
}
</style>


