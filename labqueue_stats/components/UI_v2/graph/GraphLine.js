import {
  Line
} from 'vue-chartjs'
import styles from "~/assets/scss_v2/abstracts/_variables.scss";

export default {
  extends: Line,
  props: {
    data: {
      type: Object,
      default: {}
    },
    options: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      baseOptions: {
        responsive: true,
        maintainAspectRatio: false,
        hover: {
          mode: "label"
        },
        scales: {
          yAxes: [{
            position: "right",
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 7,
              fontColor: styles.colorGreyLighter,
            },
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              display: true,
              zeroLineColor: styles.colorGreyLighter,
              zeroLineWidth: 1,
              color: styles.colorGreyLighter,
            },
          }],
          xAxes: [{
            ticks: {
              fontColor: styles.colorGreyLighter,
            },
            gridLines: {
              drawBorder: false,
              display: true,
            }
          }]
        }
      }
    }
  },
  watch: {
    data: function (newData, oldData) {
      this.$data._chart.destroy();
      this.renderChart(this.chartData, this.chartOptions);
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions)
  },
  computed: {
    chartData() {
      return {
        ...this.data
      }
    },
    chartOptions() {
      return {
        ...this.baseOptions,
        ...this.options
      }
    },
  }
}
