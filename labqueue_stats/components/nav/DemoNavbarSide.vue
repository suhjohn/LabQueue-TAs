<template>
  <nav>
    <DemoNavbarSideLogo/>
    <DemoNavbarSideProfile/>
    <DemoNavbarSideList/>
  </nav>
</template>
<script>
import DemoNavbarSideLogo from "@/components/nav/DemoNavbarSideLogo.vue";
import DemoNavbarSideList from "@/components/nav/DemoNavbarSideList.vue";
import DemoNavbarSideProfile from "@/components/nav/DemoNavbarSideProfile.vue";

export default {
  components: {
    DemoNavbarSideLogo,
    DemoNavbarSideList,
    DemoNavbarSideProfile
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
nav {
  @include backgroundColor-light;
  height: 100vh;
  width: 25rem;
  display: none;

  @include respond(laptop) {
    display: block;
  }
}
</style>


