<template>
  <div id="__layout">
    <DemoNavbarTop :isDemo="true"/>
    <DemoNavbarSide :isDemo="true"/>
    <DemoNavbarBottom :isDemo="true"/>
    <nuxt class="__layout-page"/>
  </div>
</template>

<script>
import DemoNavbarSide from "@/components/nav/DemoNavbarSide";
import DemoNavbarTop from "@/components/nav/DemoNavbarTop";
import DemoNavbarBottom from "@/components/nav/DemoNavbarBottom";

export default {
  components: {
    DemoNavbarSide,
    DemoNavbarTop,
    DemoNavbarBottom
  }
};
</script>

<style lang="scss">
@import "@/assets/scss_v2/main.scss";
#__layout {
  display: flex;
  width: 100%;
}
.__layout-page {
  width: 100%;
  margin-top: $navbar-top_height !important;
  margin-bottom: $navbar-bottom_height !important;

  @include respond(laptop) {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
}
</style>

