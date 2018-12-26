<template>
  <div>
    <NavbarTop class="layout-navbar-top"/>
    <NavbarSide class="layout-navbar-side"/>
    <nuxt/>
  </div>
</template>

<script>
import NavbarSide from "@/components/nav/NavbarSide";
import NavbarTop from "@/components/nav/NavbarTop";

export default {
  components: {
    NavbarSide,
    NavbarTop
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
</style>

