<template>
  <div>
    <NavbarTop class="layout-navbar-top"/>
    <NavbarSide class="layout-navbar-side"/>
    <NavbarBottom class="layout-navbar-bottom"/>
    <nuxt/>
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

