<template>
  <div id="page-demo">
    <CardItemMain/>
    <CardItemSub/>
  </div>
</template>

<script>
import CardItemMain from "@/components/UI_v2/CardItemMain.vue";
import CardItemSub from "@/components/UI_v2/CardItemSub.vue";
import GraphLine from "@/components/UI_v2/graph/GraphLine.vue";
export default {
  components: { GraphLine, CardItemMain, CardItemSub },
  layout: "demo_dashboard"
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
$padding: 5rem;
#page-demo {
  padding: $padding;
}
</style>

