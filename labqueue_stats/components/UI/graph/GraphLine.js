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
      const baseColor = styles.colorCrimsonMain;
      const baseColorDark = styles.colorCrimsonMainDark;
      const baseColorLight = styles.colorCrimsonMainLight;

      const defaultGradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 500);
      defaultGradient.addColorStop(0, baseColor + "A0");
      defaultGradient.addColorStop(0.5, baseColor + "40");
      defaultGradient.addColorStop(1, baseColor + "10");
      return {
        pointRadius: 0,
        borderWidth: 1,
        backgroundColor: defaultGradient,
        borderColor: baseColor + "CC",
        hoverBorderWidth: 1,
        hoverBackgroundColor: defaultGradient,
        hoverBorderColor: baseColor + "CC",
        pointHoverBackgroundColor: baseColorLight,
        pointHoverBorderColor: baseColorDark
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
            label: function (tooltipItem, data) {
              const yAxisString = this._chart.options.scales.yAxes[0].scaleLabel.labelString
              let yAxisUnit = this._chart.options.scales.yAxes[0].scaleLabel.units
              if (!yAxisUnit) yAxisUnit = ""
              const yValue = tooltipItem.yLabel
              const labelString = `${yAxisString} : ${yValue} ${yAxisUnit}`;

              // Return Label String
              return labelString
            },
          }
        },
        scales: {
          yAxes: [{
            position: "right",
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 7,
              fontColor: styles.colorGrey,
            },
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              display: true,
              zeroLineColor: styles.colorGreyLight,
              zeroLineWidth: 1,
              color: styles.colorGreyLight,
            },
            scaleLabel: {
              ...this.options.yAxes.scaleLabel,
              display: false,
              fontColor: styles.colorGrey
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: styles.colorGrey,
            },
            gridLines: {
              drawBorder: false,
              display: false,
              color: styles.colorGreyLight,
            }
          }]
        },
      }
      // Calculate YMax
      const OFFSET = 0.25;
      let minVal = 0;
      let maxVal = 0;
      this.data.datasets.forEach(dataset => {
        maxVal = Math.max(maxVal, Math.max(...dataset.data));
        minVal = 0;
      });
      const suggestedYMax = (maxVal - minVal) * OFFSET + maxVal;
      _options.scales.yAxes[0].ticks["suggestedMax"] = suggestedYMax;
      return _options
    },
  }
}
