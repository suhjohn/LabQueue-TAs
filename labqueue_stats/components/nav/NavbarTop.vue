<template>
  <nav id="demo-navbar-top-container">
    <ul id="demo-navbar-top-list">
      <nuxt-link tag="li" id="logo" to="/">
        <img class="logo-img" src="~/assets/static/Logo.svg">
      </nuxt-link>
      <ul id="demo-navbar-top-list-right">
        <a class="demo-navbar-top-list-item" :href="loginButton.url">
          <ButtonGhost fontSize="x-small" :width="8" :height="4">
            <template slot="text">{{ loginButton.text }}</template>
          </ButtonGhost>
        </a>
        <a class="demo-navbar-top-list-item" :href="labqueueBaseURL">
          <ButtonText fontSize="x-small" :width="-1" :height="4" fontColor="grey-dark">
            <template slot="text">Back to Queue</template>
          </ButtonText>
        </a>
      </ul>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import ButtonGhost from "@/components/UI/ButtonGhost.vue";
import ButtonText from "@/components/UI/ButtonText.vue";
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
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated"
    }),
    loginButton() {
      if (this.isAuthenticated) {
        return {
          url: this.labqueueLogoutURL,
          text: "Logout"
        };
      } else {
        return {
          url: this.labqueueLoginURL,
          text: "Login"
        };
      }
    }
  },
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
  z-index: 100;
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
    margin-right: $margin-small;
  }
}
.demo-navbar-top-list-item {
  height: $navbar-top_height;
  line-height: $navbar-top_height;
}
</style>

