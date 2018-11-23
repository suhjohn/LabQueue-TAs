<template>
  <nav>
    <ul>
      <nuxt-link  tag="li" id="logo" to="/">
        <img class="logo-img" src="~/assets/static/Logo.svg">
      </nuxt-link>

        <li class="navbar-options-sub-option">
          <a class="navbar-options-sub-option-text" href="https://www.labqueue.io/queue/">Back to Queue</a>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.logo-img {
  height: $navbar-height - 3rem;
  vertical-align: middle;
}

nav {
  top: 0;
  position: sticky;
  height: $navbar-height;
  line-height: $navbar-height;
  border-bottom: 1px solid $color-grey-light;
  background-color: $color-white;
}

ul {
  display: flex;
}

li {
  padding: 0 2rem;
  font-size: 1.8rem;
  cursor: pointer;
}

.navbar-options-sub {
  &-option {
    margin-left: auto;
    &-text {
      font-size: 1.4rem;
      color: $color-grey;
      transition: all 0.15s;
      &:hover {
        color: $color-grey-dark;
      }
    }
  }
}
</style>

