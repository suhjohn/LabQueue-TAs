import Vue from "vue";
import { Line, Bar } from "vue-chartjs";
import styles from "~/assets/scss/variables.scss";
import tinycolor from "tinycolor2";

Vue.component("LineGraph", {
  extends: Line,
  props: {
    data: {
      type: Object
    },
    options: {
      type: Object
    }
  },
  watch: {
    data: function(newData, oldData) {
      this.$data._chart.destroy();
      this.renderChart(this.computedData, this.computedOptions);
    }
  },
  computed: {
    computedOptions() {
      const baseOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false }, // Removes the title in the tooltip
        tooltips: {
          mode: "nearest",
          callbacks: {
            label: tooltipItem =>
              `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,
            title: () => null
          }
        }
      };
      return { ...baseOptions, ...this.options };
    },
    computedData() {
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
      return { ..._data };
    }
  },
  mounted() {
    this.renderChart(this.computedData, this.computedOptions);
  },
  methods: {}
});

/**
 * Receives baseColor in each of the dataset in datasets to determine color
 */
Vue.component("BarGraph", {
  extends: Bar,
  props: ["data", "options"],
  watch: {
    data: function(newData, oldData) {
      this.$data._chart.destroy();
      this.renderChart(this.computedData, this.computedOptions);
    }
  },
  computed: {
    computedOptions() {
      const baseOptions = { responsive: true, maintainAspectRatio: false };
      return { ...baseOptions, ...this.options };
    },
    computedData() {
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
          .createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, baseColor + "A0");
        gradient.addColorStop(0.5, baseColor + "40");
        gradient.addColorStop(
          1,
          tinycolor(baseColor)
            .monochromatic()[5]
            .toHexString() + "10"
        );
        const hoverGradient = this.$refs.canvas
          .getContext("2d")
          .createLinearGradient(0, 0, 0, 500);
        hoverGradient.addColorStop(0, baseColor + "99");
        hoverGradient.addColorStop(0.5, baseColor + "20");
        hoverGradient.addColorStop(
          1,
          tinycolor(baseColor)
            .monochromatic()[5]
            .toHexString() + "00"
        );

        let configuredDataItem = {
          ...dataItem,
          borderWidth: 1,
          backgroundColor: gradient,
          borderColor: baseColor + "CC",
          hoverBorderWidth: 1,
          hoverBackgroundColor: hoverGradient,
          hoverBorderColor: baseColor + "CC"
        };
        _data["datasets"].push(configuredDataItem);
      });
      return { ..._data };
    }
  },
  mounted() {
    this.renderChart(this.computedData, this.computedOptions);
  }
});
