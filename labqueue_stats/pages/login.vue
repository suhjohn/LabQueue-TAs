<template>
    <section class="login-page">
        <div class="link-container">
            <nuxt-link tag="button" class="link-button" to="/">
                Login
            </nuxt-link>
            <nuxt-link tag="button" class="link-button" to="/">
                Demo
            </nuxt-link>
        </div>
    </section>
</template>
<script>
export default {
  layout: "login"
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.login-page {
  width: 60rem;
  margin: 0 auto;
}
.link {
  &-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 40rem;
  }
  &-button {
    margin: 1rem 0;
    font-size: 1.6rem;
    width: 20rem;
    height: 5rem;
    border: 1px solid $color-crimson-main;
    border-radius: 20px;
    color: $color-crimson-main;
    transition: 0.15s all;

    &:hover {
      background-color: $color-crimson-main;
      color: $color-white;
    }
  }
}
</style>


