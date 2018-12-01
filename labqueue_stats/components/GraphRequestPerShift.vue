<template>
    <div>
        <barGraph class="graph" v-if="showLine" :data="barData" :options="options" />
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
  mounted() {
    const labels = [];
    const data = [];
    const barData = {
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
  },
  computed: {
    graphStyleClass() {
      return {};
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
