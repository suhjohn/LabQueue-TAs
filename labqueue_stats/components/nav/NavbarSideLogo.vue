<template>
  <nuxt-link tag="a" id="logo-container" to="/">
    <img id="logo-img" src="~/assets/static/Logo.svg">
  </nuxt-link>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#logo-container {
  display: flex;
  align-items: flex-end;
  padding-left: 4rem;
  height: $navbar-side-logo_height;
}
#logo-img {
  height: 4rem;
}
</style>

