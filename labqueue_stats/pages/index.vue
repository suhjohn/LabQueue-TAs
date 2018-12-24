<template>
  <section class="login-page">
    <div class="link-container">
      <a class="link-button" :href="login_url">
        Login
      </a>
      <nuxt-link tag="button" @click.native="onClick" class="link-button" :to="{name:'dashboard'}">
        Demo
      </nuxt-link>
    </div>
  </section>
</template>
<script>
import { LOGIN_URL } from "@/constants.js";
import { mapMutations, mapActions } from "vuex";
export default {
  layout: "login",
  computed: {
    login_url() {
      return LOGIN_URL;
    }
  },
  async mounted() {
    console.log("in index mounted");
    try {
      await this.retrieveSelf();
    } catch (error) {
      console.log("error in index mounted");
      console.log(error);
    }
  },
  methods: {
    ...mapMutations({ setIsDemo: "setIsDemo" }),
    ...mapActions({ retrieveSelf: "retrieveSelf" }),
    onClick() {
      this.setIsDemo(true);
    }
  }
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
    display: block;
    text-align: center;
    line-height: 5rem;
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


