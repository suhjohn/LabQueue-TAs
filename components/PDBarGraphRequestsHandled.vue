<template>
    <div id="container">
        <barGraph class="graph" v-if="showLine" :data="barData" :options="options"/>
    </div>    
</template>
<script>
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
    const defaultCount = 5;
    const minSeg = [
      [0, 15],
      [15, 30],
      [30, 45],
      [45, 60],
      [60, Number.MAX_VALUE]
    ];
    const labels = ["0 ~ 15", "15 ~ 30", "30 ~ 45", "45 ~ 60", "60+"];
    const shiftsRequests = this.getNRecentShiftsRequests(defaultCount);
    const requestCount = this.getTotalRequestsOfNRecentShifts(defaultCount);
    const requests = shiftsRequests.flat([1]);

    const reqCountByMinSegment = minSeg.map(seg =>
      this.calcRequestCountPercent(requests, requestCount, seg[0], seg[1])
    );
    const barData = {
      labels: labels,
      datasets: [
        {
          backgroundColor: "#b13938",
          borderColor: "#b13938",
          label: "% of requests handled per minute segments",
          data: reqCountByMinSegment
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
    calcRequestCountPercent(requests, requestCount, minMin, maxMin) {
      var count = 0;
      const secPerMin = 60;
      requests.forEach(request => {
        const timeAccepted = moment(request["time_accepted"]);
        const timeClosed = moment(request["time_closed"]);
        const diff = timeClosed.diff(timeAccepted, "seconds");
        if (minMin * secPerMin < diff && diff < maxMin * secPerMin) count++;
      });
      return Number((count / requestCount).toFixed(3));
    }
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


