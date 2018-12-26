<template>
  <nav id="demo-navbar-top-container">
    <ul id="demo-navbar-top-list">
      <nuxt-link tag="li" id="logo" to="/">
        <img class="logo-img" src="~/assets/static/Logo.svg">
      </nuxt-link>
      <ul id="demo-navbar-top-list-right">
        <a class="demo-navbar-top-list-item" :href="labqueueLoginURL">
          <ButtonGhost text="Log In" fontSize="x-small" :width="8" :height="4"/>
        </a>
        <a class="demo-navbar-top-list-item" :href="labqueueBaseURL">
          <ButtonText
            text="Back to Queue"
            fontSize="x-small"
            :width="-1"
            :height="4"
            fontColor="grey-dark"
          />
        </a>
      </ul>
    </ul>
  </nav>
</template>

<script>
import ButtonGhost from "@/components/UI_v2/ButtonGhost.vue";
import ButtonText from "@/components/UI_v2/ButtonText.vue";
import { envVars } from "@/mixins/envVars.js";
export default {
  components: {
    ButtonGhost,
    ButtonText
  },
  mixins: [envVars],
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";

#demo-navbar-top-container {
  @include backgroundColor-light;
  top: 0;
  width: 100%;
  position: fixed;
  z-index: 1;
  height: $navbar-top_height;
  line-height: $navbar-top_height;
  border-bottom: 1px solid $color-grey-light;
  padding: 0 2rem;
  @include respond(laptop) {
    display: none;
  }
}
.logo-img {
  height: $navbar-top_height - 3rem;
  vertical-align: middle;
}
#demo-navbar-top-list {
  display: flex;
  justify-content: space-between;
}
#demo-navbar-top-list-right {
  display: flex;
  & :not(:last-child) {
    margin-right: 2rem;
  }
}
.demo-navbar-top-list-item {
  height: $navbar-top_height;
  line-height: $navbar-top_height;
}
</style>

