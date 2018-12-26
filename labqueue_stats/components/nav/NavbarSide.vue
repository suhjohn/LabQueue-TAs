<template>
  <nav>
    <!-- Logo -->
    <!-- Profile -->
    <NavbarSideProfile/>
    <!-- List -->
    <NavbarSideList/>
  </nav>
</template>
<script>
import NavbarSideList from "@/components/nav/NavbarSideList.vue";
import NavbarSideProfile from "@/components/nav/NavbarSideProfile.vue";

export default {
  components: {
    NavbarSideList
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
nav {
  height: navbar-side_height;
  width: 30rem;
}
</style>


