import Vue from "vue";
import { Line, Bar } from "vue-chartjs";
import styles from "~/assets/scss/variables.scss";

Vue.component("LineGraph", {
  extends: Line,
  data() {
    return {
      gradient: undefined
    };
  },
  props: {
    data: {
      type: Object
    },
    options: {
      type: Object
    }
  },
  mounted() {
    const baseOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: { display: false },
      // Removes the title in the tooltip
      tooltips: {
        callbacks: {
          label: tooltipItem => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,
          title: () => null
        }
      }
    };

    // Set data with base data and provided data
    const _data = {};
    _data["labels"] = this.data.labels;
    _data["datasets"] = [];
    this.data.datasets.forEach(dataItem => {
      let baseColor = dataItem.baseColor
        ? dataItem.baseColor
        : styles.colorCrimsonMainDark;
      const gradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);
      gradient.addColorStop(0, baseColor + "A0");
      gradient.addColorStop(0.5, baseColor + "60");
      gradient.addColorStop(1, baseColor + "10");
      let configuredDataItem = {
        ...dataItem,
        borderWidth: 1,
        backgroundColor: gradient,
        borderColor: baseColor + "CC"
      };
      _data["datasets"].push(configuredDataItem);
    });

    // Set options with base and provided
    const _options = {
      ...baseOptions,
      ...this.options
    };
    this.renderChart(_data, _options);
  },
  methods: {}
});

/**
 * Receives baseColor in each of the dataset in datasets to determine color
 */
Vue.component("BarGraph", {
  extends: Bar,
  props: ["data", "options"],
  mounted() {
    const baseOptions = { responsive: true, maintainAspectRatio: false };
    // Set Options
    const _options = { ...baseOptions, ...this.options };

    // Set Data
    const _data = {};
    _data["labels"] = this.data.labels;
    _data["datasets"] = [];
    this.data.datasets.forEach(dataItem => {
      let baseColor = dataItem.baseColor
        ? dataItem.baseColor
        : styles.colorCrimsonMainDark;
      const gradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);
      gradient.addColorStop(0, baseColor + "A0");
      gradient.addColorStop(0.5, baseColor + "60");
      gradient.addColorStop(1, baseColor + "30");
      let configuredDataItem = {
        ...dataItem,
        borderWidth: 1,
        backgroundColor: gradient,
        borderColor: baseColor + "CC"
      };
      _data["datasets"].push(configuredDataItem);
    });
    this.renderChart(_data, _options);
  }
});
