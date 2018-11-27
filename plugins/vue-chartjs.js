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
    },
    enableGradient: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient.addColorStop(0, styles.colorCrimsonMain + "80");
    this.gradient.addColorStop(0.5, styles.colorCrimsonMain + "40");
    this.gradient.addColorStop(1, styles.colorCrimsonMain + "00");

    const baseDataset = {
      backgroundColor: styles.colorCrimsonMainDark,
      pointBackgroundColor: styles.colorCrimsonMainDark,
      borderColor: styles.colorCrimsonMainDark
    };
    if (this.enableGradient) {
      baseDataset["backgroundColor"] = this.gradient;
    }
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
      _data["datasets"].push({ ...baseDataset, ...dataItem });
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

Vue.component("BarGraph", {
  extends: Bar,
  props: ["data", "options"],
  mounted() {
    const baseOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: { display: false }, // Removes the title in the tooltip
      tooltips: {
        callbacks: {
          label: tooltipItem => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,
          title: () => null
        }
      }
    };
    const _options = { ...baseOptions, ...this.options };

    this.renderChart(this.data, _options);
  }
});
