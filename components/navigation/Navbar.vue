<template>
  <nav>
    <ul>
      <nuxt-link  tag="li" id="logo" to="/">
        <img class="logo-img" src="~/assets/static/Logo.svg">
      </nuxt-link>
      <li class="nav-item nav-item-divider">
        <a href="https://www.labqueue.io/queue/">Back to Queue</a>
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

.nav-item {
  font-size: 1.6rem;
  color: $color-grey;
}
.nav-item-divider {
  margin-left: auto;
}
</style>

