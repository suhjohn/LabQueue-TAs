<template>
  <nav id="demo-navbar-top-container">
    <ul id="demo-navbar-top-list">
      <nuxt-link tag="li" id="logo" to="/">
        <img class="logo-img" src="~/assets/static/Logo.svg">
      </nuxt-link>

      <a :href="labqueueBaseURL">
        <ButtonText text="Back to Queue" :minWidth="-1" :minHeight="5" fontColor="grey-dark"/>
      </a>
    </ul>
  </nav>
</template>

<script>
import ButtonText from "@/components/UI_v2/ButtonText.vue";
export default {
  components: {
    ButtonText
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";

.logo-img {
  height: $navbar-top_height - 2rem;
  vertical-align: middle;
}

#demo-navbar-top-container {
  top: 0;
  position: sticky;
  z-index: 1;
  height: $navbar-top_height;
  line-height: $navbar-top_height;
  border-bottom: 1px solid $color-grey-light;
  padding: 0 2rem;

  @include respond(laptop) {
    display: none;
  }
}

#demo-navbar-top-list {
  display: flex;
  justify-content: space-between;
}
</style>

