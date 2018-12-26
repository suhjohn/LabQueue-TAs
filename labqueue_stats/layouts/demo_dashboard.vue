<template>
  <div id="__layout">
    <DemoNavbarTop/>
    <DemoNavbarSide/>
    <DemoNavbarBottom/>
    <nuxt id="__page"/>
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
}
#__page {
  width: 100%;
  margin-top: $navbar-top_height;
  @include respond(laptop) {
    margin-top: 0;
  }
}
</style>

