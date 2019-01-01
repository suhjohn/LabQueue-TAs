<template>
  <nuxt-link id="demo-navbar-side-list-item" :to="navitemURL">
    <i class="fas text-small" :class="'fa-' + navitemIcon"></i>
    <p id="demo-navbar-side-list-item-text">{{ text }}</p>
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
      type: Object
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

#demo-navbar-side-list-item {
  @include backgroundColor-light;
  box-sizing: content-box;
  display: flex;
  border-top: $hover-marker-size solid transparent;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 100%;

  & :not(:first-child) {
    margin-top: $margin-x-small;
    margin-left: 0;
  }
  &:hover {
    padding-top: 0;
    border-top: $hover-marker-size solid $color-crimson-main-light;
  }

  @include respond(laptop) {
    flex-direction: row;
    padding-top: 0;
    border-top: 0;
    padding-left: $margin-base;
    height: 4rem;
    justify-content: unset;
    & :not(:first-child) {
      margin-top: 0;
      margin-left: $margin-x-small;
    }
    &:hover {
      padding-left: $margin-base - $hover-marker-size;
      border-left: $hover-marker-size solid $color-crimson-main-light;
      border-top: none;
    }
  }
}

.nuxt-link-exact-active {
  @include textColor-highlight;
  padding-top: 0 !important;
  border-top: $hover-marker-size solid $color-crimson-main !important;

  @include respond(laptop) {
    @include backgroundColor-selected;
    padding-left: $margin-base - $hover-marker-size !important;
    border-left: $hover-marker-size solid $color-crimson-main !important;
    border-top: none !important;
  }
}
#demo-navbar-side-list-item-text {
  @include text-x-small;
}
</style>


