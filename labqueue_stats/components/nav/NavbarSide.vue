<template>
  <nav>
    <NavbarSideLogo/>
    <NavbarSideProfile :isDemo="isDemo"/>
    <NavbarSideList :isDemo="isDemo"/>
  </nav>
</template>
<script>
import NavbarSideLogo from "@/components/nav/NavbarSideLogo.vue";
import NavbarSideList from "@/components/nav/NavbarSideList.vue";
import NavbarSideProfile from "@/components/nav/NavbarSideProfile.vue";

export default {
  props: {
    isDemo: {
      type: Boolean
    }
  },
  components: {
    NavbarSideLogo,
    NavbarSideList,
    NavbarSideProfile
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
nav {
  @include backgroundColor-light;
  height: $navbar-side_height;
  width: $navbar-side_width;
  display: none;
  top: 0;
  position: sticky;
  @include respond(laptop) {
    display: block;
  }
}
</style>


