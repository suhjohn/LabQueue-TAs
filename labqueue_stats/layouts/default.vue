<template>
  <div class="main">
    <loading :active.sync="isInitialFetch" :is-full-page="true"></loading>
    <SideNavbar />
    <div class="main-body">
      <PageTopNavbar id="page-top-navbar" />
      <nuxt id="page" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import PageTopNavbar from "~/components/navigation/PageTopNavbar.vue";
import SideNavbar from "~/components/navigation/SideNavbar.vue";
export default {
  components: {
    PageTopNavbar,
    SideNavbar,
    Loading
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      isInitialFetch: "getIsInitialFetch"
    })
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
$page-padding-top: 5rem;
$page-padding-side: 8rem;
$page-padding-side-mobile: 2rem;
$page-padding-bottom: 8rem;
$page-min-height: 100vh;
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
  position: relative;
  min-height: $page-min-height;
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

