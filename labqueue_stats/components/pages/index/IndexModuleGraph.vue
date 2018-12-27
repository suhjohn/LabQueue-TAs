<template>
  <div>
    <!-- Tabs -->
    <div id="index-module-graph-tabs">
      <GraphSelectTab
        v-for="(tab, index) in tabs"
        :key="index"
        :index="index"
        :selected="isSelectedTab(index)"
        :name="tab.name"
        @select="onSelect"
      ></GraphSelectTab>
    </div>
    <!-- Graph -->
    <div id="index-module-graph">
      <GraphLine></GraphLine>
    </div>
    <!-- Date -->
    <div id="index-module-graph-date">
      <GraphSelectDate/>
    </div>
  </div>
</template>
<script>
import GraphSelectTab from "@/components/UI_v2/graph/GraphSelectTab.vue";
import GraphLine from "@/components/UI_v2/graph/GraphLine.vue";
import GraphSelectDate from "@/components/UI_v2/graph/GraphSelectDate.vue";
export default {
  components: { GraphLine, GraphSelectTab, GraphSelectDate },
  data() {
    return {
      selectedTabIndex: 0,
      tabs: [
        {
          name: "Requests",
          value: undefined
        },
        {
          name: "Handle Time",
          value: undefined
        }
      ]
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
@import "@/assets/scss_v2/main.scss";
#index-module-graph-tabs {
  height: 12rem;
}
#index-module-graph {
  height: 28rem;
}
#index-module-graph-date {
  height: calc(5rem - 5px);
  padding-left: $margin-x-small;
}
</style>
