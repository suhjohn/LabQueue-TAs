<template>
  <div class="logo-container">
    <img class="logo-img" src="~/assets/static/Logo.svg">
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
.logo {
  &-container {
    display: flex;
    align-items: flex-end;
    padding-left: 4rem;
    height: $navbar-side-logo_height;
  }
  &-img {
    height: 4rem;
  }
}
</style>

