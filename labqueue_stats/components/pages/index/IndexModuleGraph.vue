<template>
  <div>
    <!-- Tabs -->
    <GraphSelectTab
      v-for="(tab, index) in tabs"
      :key="index"
      :index="index"
      :selected="isSelectedTab(index)"
      @select="onSelect"
    ></GraphSelectTab>
    <!-- Graph -->
    <GraphLine></GraphLine>
    <!-- Date -->
  </div>
</template>
<script>
import GraphSelectTab from "@/components/UI_v2/graph/GraphSelectTab.vue";
import GraphLine from "@/components/UI_v2/graph/GraphLine.vue";

const tabs = [
  {
    name: "Requests"
  },
  {
    name: "Handle Time"
  }
];

export default {
  components: { GraphLine, GraphSelectTab },
  data() {
    return {
      selectedTabIndex: 0,
      tabs: tabs
    };
  },
  methods: {
    isSelectedTab(index) {
      return index == this.selectedTabIndex;
    },
    onSelect(index) {
      this.selectedTabIndex = index;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
