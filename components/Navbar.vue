<template>
  <nav>
      <ul>
        <nuxt-link tag="li" id="logo" to="/">LQ Stats</nuxt-link>
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

nav {
  height: $navbar-height;
  line-height: $navbar-height;
  border-bottom: 1px solid $color-grey-light;
}
ul {
  display: flex;
  padding: 0 3rem;
  justify-content: space-between;
}
li {
  padding: 0 2rem;
  font-size: 1.8rem;
  cursor: pointer;
}

.nav-item {
  font-size: 1.6rem;
}

.nav-item-divider {
  margin-left: auto;
}
</style>

