<script>
import { Doughnut } from "vue-chartjs";
export default {
  extends: Doughnut,
  props: ["chartdata", "options"],
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
  watch: {
    chartdata: function(newData, oldData) {
      this.$data._chart.destroy();
      this.renderChart(this.chartdata, this.options);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
