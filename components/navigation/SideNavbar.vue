<template>
  <nav>
    <nuxt-link tag="li" id="logo" to="/">
      <img class="logo-img" src="~/assets/static/Logo.svg">
    </nuxt-link>
    <div class="navbar-options">
      <ul class="navbar-options-main">
        <nuxt-link tag="li" class="navbar-options-main-option" to="/"><i class="fas fa-chart-line"></i>Dashboard</nuxt-link>
        <nuxt-link tag="li" class="navbar-options-main-option" :to="{name: 'requests'}"><i class="fas fa-clipboard-list"></i>Requests</nuxt-link>
      </ul>
      <ul class="navbar-options-sub">
        <li class="navbar-options-sub-option">
          <a class="navbar-options-sub-option-text" href="https://www.labqueue.io/queue/">Back to Queue</a>
        </li>
      </ul>
    </div>
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
$logo-height: 15rem;

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

.navbar-options-main {
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  & .navbar-options-main-option {
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
      width: 3rem;
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
    color: $color-crimson-main;
    border-bottom: 0.5rem solid $color-crimson-main;
    & .fas {
      color: $color-crimson-main;
    }
    &:hover {
      color: $color-crimson-main;
      border-bottom: 0.5rem solid $color-crimson-main;
      & .fas {
        color: $color-crimson-main;
      }
    }
  }
}

.navbar-options-sub {
  display: none;
}

@media only screen and (min-width: 930px) {
  #logo {
    display: block;
    text-align: center;
    height: $logo-height;
    line-height: $logo-height;
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
  .navbar-options {
    display: flex;
    flex-direction: column;
    height: calc(100% - #{$logo-height});
    padding-bottom: 10rem;
  }
  .navbar-options-main {
    padding: 0;
    display: flex;
    flex-direction: column;
    & .navbar-options-main-option {
      height: $li-height;
      width: 100%;
      line-height: $li-height;
      display: block;
      padding: 0;
      padding-left: 4rem;
      font-size: 1.4rem;
      transition: all 0.15s ease-in;
      border-bottom: none;
      border-left: 0.5rem solid $color-white;
      & .fas {
        width: 3rem;
        color: $color-grey;
        padding-right: 1rem;
        display: inline-block;
      }
      &:hover {
        border-bottom: none;
        font-weight: 700;
        border-left: 0.5rem solid $color-grey-dark;
      }
    }
    & .nuxt-link-exact-active {
      font-weight: 700;
      border-bottom: none;
      border-left: 0.5rem solid $color-crimson-main;
      &:hover {
        border-bottom: none;
        border-left: 0.5rem solid $color-crimson-main;
      }
      & .fas {
        color: $color-crimson-main;
      }
    }
  }
  .navbar-options-sub {
    display: flex;
    margin-top: auto;
    &-option {
      margin: 0 auto;
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
}
</style>

