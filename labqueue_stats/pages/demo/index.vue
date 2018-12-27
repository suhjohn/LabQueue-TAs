<template>
  <div id="page-demo">
    <!-- <PageHeader>
      <template slot="header">Daily Review</template>
    </PageHeader>
    <div class="row">
      <CardItemMain width="small" height="small"></CardItemMain>
      <CardItemMain width="small" height="small"></CardItemMain>
      <CardItemMain width="small" height="small"></CardItemMain>
    </div>-->
    <PageHeader>
      <template slot="header">Dashboard</template>
    </PageHeader>
    <div class="row">
      <CardItemMain width="medium" height="medium">
        <GraphLine></GraphLine>
      </CardItemMain>
      <CardItemMain width="small" height="medium"></CardItemMain>
    </div>
  </div>
</template>
<script>
import PageHeader from "@/components/pages/PageHeader.vue";
import CardItemMain from "@/components/UI_v2/CardItemMain.vue";
import GraphLine from "@/components/UI_v2/graph/GraphLine.vue";
export default {
  components: { GraphLine, CardItemMain, PageHeader },
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

