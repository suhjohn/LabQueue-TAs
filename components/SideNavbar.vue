<template>
    <nav>
        <ul>
            <nuxt-link tag="li" class="sidenav-link" to="/"><i class="fas fa-home"></i>Home</nuxt-link>
            <hr>
            <nuxt-link tag="li" class="sidenav-link" :to="{name: 'shift'}"><i class="fas fa-business-time"></i>Shift</nuxt-link>
            <nuxt-link tag="li" class="sidenav-link" :to="{name: 'requests'}"><i class="fas fa-clipboard-list"></i>Requests</nuxt-link>
            <nuxt-link tag="li" class="sidenav-link" :to="{name: 'students'}"><i class="fas fa-user-graduate"></i>Students</nuxt-link>
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
  width: 25rem;
  height: calc(100vh - #{$navbar-height});
  margin-top: 2rem;
}

ul {
}

hr {
  background-color: $color-grey-light;
  color: $color-grey-light;
  border-color: $color-grey-light;
  height: 1px;
  border: 0;
  margin: 2rem 0;
}

li {
  color: $color-grey-dark;
  display: block;
  padding-left: 3rem;
  margin-right: 2rem;
  font-size: 1.4rem;
  height: 6rem;
  line-height: 6rem;
  transition: all 0.15s ease-in;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;

  &:hover {
    cursor: pointer;
    color: $color-grey-dark;
    background-color: $color-grey-light;
  }
  &.nuxt-link-exact-active {
    font-weight: 700;
    font-size: 1.6rem;
    color: $color-crimson-main;
    background-color: $color-crimson-main-light;
  }
}
.fas {
  padding-right: 1rem;
}
</style>

