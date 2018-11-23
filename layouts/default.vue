<template>
  <div class="main">
    <SideNavbar />
    <div class="main-body">
      <Navbar />
      <nuxt id="page" />
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/navigation/Navbar.vue";
import SideNavbar from "~/components/navigation/SideNavbar.vue";
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
$page-padding-top: 3rem;
$page-padding-side: 3rem;
$page-padding-bottom: 8rem;
.main {
  display: flex;
  background-color: $color-grey-lightest;
}

.main-body {
  width: 100%;
}
#page {
  padding: $page-padding-top $page-padding-side $page-padding-bottom
    $page-padding-side;
}
</style>

