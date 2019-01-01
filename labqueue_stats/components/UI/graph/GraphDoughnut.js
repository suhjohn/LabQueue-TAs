import {
  Doughnut
} from 'vue-chartjs'
import {
  COLORS
} from "@/constants";

export default {
  extends: Doughnut,
  props: {
    data: {
      type: Object,
      default: {}
    },
    options: {
      type: Object,
      default: {}
    },
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
    baseDataSet() {
      const colors = COLORS;
      const ctx = this.$refs.canvas.getContext("2d")
      const gradientcolors = colors.map(color => {
        let gradient = ctx.createLinearGradient(0, 0, 300, 300);
        gradient.addColorStop(0, color + "A0");
        gradient.addColorStop(0.5, color + "40");
        gradient.addColorStop(1, color + "10");
        return gradient
      })
      const lightColors = colors.map(color => {
        return color + "AA"
      })
      return {
        borderWidth: 1,
        backgroundColor: gradientcolors,
        borderColor: lightColors,
        hoverBorderWidth: 2,
        hoverBackgroundColor: colors,
        hoverBorderColor: lightColors,
      }
    },
    chartData() {
      const _data = {}
      _data["labels"] = this.data.labels;
      _data["datasets"] = [];
      this.data.datasets.forEach(dataSetItem => {
        const configuredDataSetItem = {
          ...this.baseDataSet,
          ...dataSetItem
        }
        _data["datasets"].push(configuredDataSetItem)
      })
      return _data
    },
    chartOptions() {
      const _options = {
        responsive: true,
        maintainAspectRatio: false,
        hover: {
          mode: 'index',
          intersect: false
        },
        tooltips: {
          mode: "index",
          intersect: false,
          callbacks: {
            label(tooltipItem, data) {
              const datasetIndex = tooltipItem.datasetIndex;
              const index = tooltipItem.index;
              const label = data.labels[index]
              const value = data.datasets[datasetIndex].data[index]
              return `${label} : ${value}%`
            }
          }
        },
        legend: {
          position: "bottom",
          labels: {
            generateLabels(chart) {
              const datasets = chart.data.datasets
              const dataset = datasets[0]
              const data = dataset.data
              const labels = chart.data.labels
              return data.map((dataItem, index) => {
                let label = labels[index]
                let value = dataItem
                return {
                  text: `${label} : ${value}%`,
                  fillStyle: dataset.backgroundColor[index],
                  strokeStyle: dataset.borderColor[index],
                  lineWidth: dataset.borderWidth,
                }
              })
            }
          }
        }
      }
      return _options
    },
  },
}
