<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  components: {}
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

