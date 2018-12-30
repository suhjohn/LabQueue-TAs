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
    <div id="index-card-row">
      <CardItemMain height="medium">
        <IndexModuleLineGraph :isDemo="true"></IndexModuleLineGraph>
      </CardItemMain>
    </div>
    <div id="index-card-row">
      <CardItemMain width="small" height="medium">
        <IndexDoughnutReqPerMin :isDemo="true"></IndexDoughnutReqPerMin>
      </CardItemMain>
      <CardItemMain width="small" height="medium">
        <IndexDoughnutCourse :isDemo="true"></IndexDoughnutCourse>
      </CardItemMain>
    </div>
  </div>
</template>
<script>
import PageHeader from "@/components/pages/PageHeader.vue";
import CardItemMain from "@/components/UI_v2/CardItemMain.vue";
import IndexModuleLineGraph from "@/components/pages/index/IndexModuleLineGraph.vue";
import IndexDoughnutReqPerMin from "@/components/pages/index/IndexDoughnutReqPerMin.vue";
import IndexDoughnutCourse from "@/components/pages/index/IndexDoughnutCourse.vue";
export default {
  components: {
    IndexModuleLineGraph,
    IndexDoughnutCourse,
    IndexDoughnutReqPerMin,
    CardItemMain,
    PageHeader
  },
  layout: "demo_dashboard"
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
$mobile-padding: $margin-small;
$laptop-padding: $margin-large;

#page-demo {
  padding: $mobile-padding;

  @include respond(laptop) {
    padding: $laptop-padding;
  }
}
#index-card-row {
  @include row;
}
</style>

