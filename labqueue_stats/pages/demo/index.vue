<template>
  <div id="page-demo">
    <PageHeader text="Demo Dashboard"></PageHeader>
    <CardItemMain>Main Card</CardItemMain>
    <CardItemSub>Sub Card</CardItemSub>
  </div>
</template>

<script>
import PageHeader from "@/components/pages/PageHeader.vue";
import CardItemMain from "@/components/UI_v2/CardItemMain.vue";
import CardItemSub from "@/components/UI_v2/CardItemSub.vue";
import GraphLine from "@/components/UI_v2/graph/GraphLine.vue";
export default {
  components: { GraphLine, CardItemMain, CardItemSub, PageHeader },
  layout: "demo_dashboard"
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
$mobile-padding: 2rem;
$laptop-padding: 5rem;
#page-demo {
  padding: $mobile-padding;

  @include respond(laptop) {
    padding: $laptop-padding;
  }
}
</style>

