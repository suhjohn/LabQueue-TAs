<template>
    <div class="container">
        <barGraph class="graph" :data="barData" :options="options" />
    </div>
</template>
<script>
import styles from "~/assets/scss/variables.scss";

export default {
  data() {
    return {
      barData: undefined,
      options: undefined
    };
  },
  created() {
    const labels = [];
    const data = [];
    this.barData = {
      labels: labels,
      datasets: [
        {
          backgroundColor: styles.colorCrimsonMainDark,
          borderColor: styles.colorCrimsonMainDark,
          label: "",
          data: data
        }
      ]
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
    graphStyleClass() {
      return {};
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
