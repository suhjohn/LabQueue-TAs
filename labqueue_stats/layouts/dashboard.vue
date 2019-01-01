<template>
  <div id="__layout">
    <NavbarTop :isDemo="false"/>
    <NavbarSide :isDemo="false"/>
    <NavbarBottom :isDemo="false"/>
    <nuxt class="__layout-page"/>
  </div>
</template>

<script>
import NavbarSide from "@/components/nav/NavbarSide";
import NavbarTop from "@/components/nav/NavbarTop";
import NavbarBottom from "@/components/nav/NavbarBottom";

export default {
  components: {
    NavbarSide,
    NavbarTop,
    NavbarBottom
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

