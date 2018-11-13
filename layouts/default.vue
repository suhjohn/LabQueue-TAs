<template>
  <div>
    <Navbar id="navbar-main" />
    <div id="main">
      <SideNavbar id="main-navbar-side" />
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import SideNavbar from "~/components/SideNavbar.vue";
export default {
  components: {
    Navbar,
    SideNavbar
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

#main {
  display: flex;
  background-color: $color-grey-lightest;
}

#main-navbar-side {
  flex: 0 0 25rem;
}
#__nuxt {
}
</style>

