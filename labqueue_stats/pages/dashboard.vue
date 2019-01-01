<template>
  <div id="page-container">
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
      <CardItemMain width="large" height="large">
        <IndexModuleLineGraph :isDemo="false"></IndexModuleLineGraph>
      </CardItemMain>
    </div>
    <div id="index-card-row">
      <CardItemMain width="medium" height="large">
        <IndexDoughnutReqPerMin :isDemo="false"></IndexDoughnutReqPerMin>
      </CardItemMain>
      <CardItemMain width="medium" height="large">
        <IndexDoughnutCourse :isDemo="false"></IndexDoughnutCourse>
      </CardItemMain>
    </div>
  </div>
</template>
<script>
import PageHeader from "@/components/pages/PageHeader.vue";
import CardItemMain from "@/components/UI/CardItemMain.vue";
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
  layout: "dashboard",
  middleware: ["check-auth"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
$mobile-padding: $margin-small;
$laptop-padding: $margin-large;

#page-container {
  padding: $mobile-padding;

  @include respond(laptop) {
    padding: $laptop-padding;
  }
}
#index-card-row {
  @include row;
}
</style>

