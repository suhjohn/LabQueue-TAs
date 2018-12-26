<template>
  <div>
    <DemoNavbarTop class="layout-navbar-top"/>
    <DemoNavbarSide class="layout-navbar-side"/>
    <DemoNavbarBottom class="layout-navbar-bottom"/>
    <nuxt/>
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
.layout-navbar-top {
  display: block;
  @include respond(laptop) {
    display: none;
  }
}
.layout-navbar-side {
  display: none;
  @include respond(laptop) {
    display: block;
  }
}
.layout-navbar-bottom {
  display: block;
  @include respond(laptop) {
    display: none;
  }
}
</style>

