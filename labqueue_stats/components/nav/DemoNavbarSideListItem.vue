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
$link-marker-size: 0.5rem;

#demo-navbar-side-list-item {
  display: flex;
  align-items: center;
  height: 4rem;
  padding-left: $padding-size;

  &:hover {
    padding-left: $padding-size - $link-marker-size !important;
    border-left: $link-marker-size solid $color-crimson-main-light;
  }
}
.nuxt-link-exact-active {
  @include textColor-highlight;
  @include backgroundColor-selected;
  padding-left: $padding-size - $link-marker-size !important;
  border-left: $link-marker-size solid $color-crimson-main !important;
}
</style>


