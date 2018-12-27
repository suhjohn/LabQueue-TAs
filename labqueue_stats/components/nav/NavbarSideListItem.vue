<template>
  <nuxt-link id="demo-navbar-side-list-item" :to="navitemURL">
    <i class="fas text-small u-margin-small" :class="'fa-' + navitemIcon"></i>
    <p class="text-small">{{ text }}</p>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    icon: {
      type: String
    },
    text: {
      type: String
    },
    relativeURL: {
      type: String
    }
  },
  computed: {
    navitemURL() {
      return this.relativeURL;
    },
    navitemIcon() {
      return this.icon;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
$padding-size: 2rem;

#demo-navbar-side-list-item {
  @include backgroundColor-light;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: $hover-marker-size;

  &:hover {
    padding-top: 0;
    border-top: $hover-marker-size solid $color-crimson-main-light;
  }

  @include respond(laptop) {
    padding-top: 0;
    padding-left: $padding-size;
    height: 4rem;
    justify-content: unset;
    &:hover {
      padding-left: $padding-size - $hover-marker-size;
      border-top: none;
      border-left: $hover-marker-size solid $color-crimson-main-light;
    }
  }
}

.nuxt-link-exact-active {
  @include textColor-highlight;
  padding-top: 0 !important;
  border-top: $hover-marker-size solid $color-crimson-main !important;

  @include respond(laptop) {
    @include backgroundColor-selected;
    padding-left: $padding-size - $hover-marker-size !important;
    border-left: $hover-marker-size solid $color-crimson-main !important;
    border-top: none !important;
  }
}
</style>


