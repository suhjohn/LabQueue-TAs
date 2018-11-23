<template>
  <div class="main">
    <SideNavbar />
    <div class="main-body">
      <PageTopNavbar id="page-top-navbar" />
      <nuxt id="page" />
    </div>
  </div>
</template>

<script>
import PageTopNavbar from "~/components/navigation/PageTopNavbar.vue";
import SideNavbar from "~/components/navigation/SideNavbar.vue";
export default {
  components: {
    PageTopNavbar,
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
$page-padding-top: 5rem;
$page-padding-side: 8rem;
$page-padding-side-mobile: 2rem;
$page-padding-bottom: 8rem;
.main {
  display: flex;
}

.main-body {
  width: 100%;
}

#page {
  width: 100%;
  padding: $page-padding-top $page-padding-side-mobile $page-padding-bottom
    $page-padding-side-mobile;
  background-color: $color-grey-lightest;
}

@media only screen and (min-width: 930px) {
  .main-body {
    width: calc(100vw - #{$side-navbar-xl-width});
  }

  #page-top-navbar {
    display: none;
  }
  #page {
    padding-left: $page-padding-side;
    padding-right: $page-padding-side;
  }
}
</style>

