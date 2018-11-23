<template>
  <nav>
    <nuxt-link tag="li" id="logo" to="/">
      <img class="logo-img" src="~/assets/static/Logo.svg">
    </nuxt-link>
    <ul>
      <nuxt-link tag="li" class="sidenav-link" to="/"><i class="fas fa-home"></i>Home</nuxt-link>
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
$li-height: 5rem;
#logo {
  display: none;
}

nav {
  position: fixed;
  /* Fixed Sidebar (stay in place on scroll) */
  bottom: 0;
  width: 100%;
  background-color: $color-white;
  z-index: 1;
}

ul {
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  & .sidenav-link {
    width: 25%;
    padding: 2rem 0 1.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    color: $color-grey-dark;
    font-size: 1.4rem;
    transition: all 0.15s ease-in;
    border-bottom: 0.5rem solid $color-white;
    & .fas {
      display: block;
    }
    &:hover {
      cursor: pointer;
      border-bottom: 0.5rem solid $color-grey;
      color: $color-grey-darkest;
      & .fas {
        color: $color-grey-dark;
      }
    }
  }

  & .nuxt-link-exact-active {
    font-weight: 700;
    color: $color-crimson-main-dark;
    border-bottom: 0.5rem solid $color-crimson-main;
    & .fas {
      color: $color-crimson-main;
    }
    &:hover {
      color: $color-crimson-main-dark;
      border-bottom: 0.5rem solid $color-crimson-main;
      & .fas {
        color: $color-crimson-main;
      }
    }
  }
}

@media only screen and (min-width: 930px) {
  #logo {
    display: block;
    text-align: center;
    height: 15rem;
    line-height: 15rem;
  }
  .logo-img {
    height: $navbar-height - 2rem;
  }
  nav {
    flex: 0 0 $side-navbar-xl-width;
    position: sticky;
    /* Fixed Sidebar (stay in place on scroll) */
    top: 0;
    left: 0;
    width: $side-navbar-xl-width;
    height: 100vh;
    padding-top: 2rem;
    background-color: $color-white;
    border-right: 1px solid $color-grey-light;
  }
  ul {
    padding: 0;
    display: block;
    justify-content: initial;

    & .sidenav-link {
      height: $li-height;
      width: 100%;
      line-height: $li-height;
      display: block;
      padding: 0;
      padding-left: 1.5rem;
      font-size: 1.4rem;
      transition: all 0.15s ease-in;
      border-bottom: none;
      border-left: 0.5rem solid $color-white;
      & .fas {
        width: 4rem;
        color: $color-grey;
        padding-right: 1rem;
        display: inline;
      }
      &:hover {
        border-bottom: none;
        font-weight: 700;
        border-left: 0.5rem solid $color-grey-dark;
      }
    }

    & .nuxt-link-exact-active {
      font-weight: 700;
      color: $color-crimson-main-dark;
      border-bottom: none;
      border-left: 0.5rem solid $color-crimson-main-dark;
      &:hover {
        color: $color-crimson-main-dark;
        border-bottom: none;
        border-left: 0.5rem solid $color-crimson-main-dark;
      }
      & .fas {
        color: $color-crimson-main;
      }
    }
  }
}
</style>

