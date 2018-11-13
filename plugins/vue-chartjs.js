import Vue from "vue";
import { Line, Bar } from "vue-chartjs";

Vue.component("LineGraph", {
  extends: Line,
  props: ["data", "options"],
  mounted() {
    this.renderChart(this.data, this.options);
  },
  methods: {}
});

Vue.component("BarGraph", {
  extends: Bar,
  props: ["data", "options"],
  mounted() {
    this.renderChart(this.data, this.options);
  }
});
