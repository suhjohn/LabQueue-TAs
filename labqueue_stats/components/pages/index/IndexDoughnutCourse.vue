<template>
  <div>
    <GraphDoughnut :data="graphData" :options="graphOptions"/>
  </div>
</template>
<script>
import GraphDoughnut from "@/components/UI_v2/graph/GraphDoughnut.vue";
export default {
  components: {
    GraphDoughnut
  },
  props: {
    isDemo: {
      type: Boolean
    }
  },
  data() {
    return {
      graphData: {
        datasets: [
          {
            data: [10, 20, 30]
          }
        ],
        labels: ["Red", "Yellow", "Blue"]
      },
      graphOptions: {}
    };
  }
};
</script>
<style lang="scss" scoped>
</style>


