<template>
  <div>
    <DemoNavbarTop class="demo-layout-navbar-top"/>
    <DemoNavbarSide class="demo-layout-navbar-side"/>
    <DemoNavbarBottom class="demo-layout-navbar-bottom"/>
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
.demo-layout-navbar-top {
  display: block;
  @include respond(laptop) {
    display: none;
  }
}
.demo-layout-navbar-side {
}
.demo-layout-navbar-bottom {
}
</style>

