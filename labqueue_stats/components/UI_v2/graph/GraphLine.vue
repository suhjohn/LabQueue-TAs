<template>
  <div class="graph-container">
    <GraphLine class="graph" :data="data" :options="options" :yLabel="options.yAxes.scaleLabel"/>
  </div>
</template>

<script>
import GraphLine from "./GraphLine.js";

export default {
  components: {
    GraphLine
  },
  props: {
    data: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
.graph-container {
  display: flex;
  justify-content: center;
  padding-top: $margin-small;
  height: 100%;
}
.graph {
  width: calc(100% - #{$margin-small});
  height: 100%;
}
</style>

