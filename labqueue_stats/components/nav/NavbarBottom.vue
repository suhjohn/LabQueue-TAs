<template>
  <ul id="demo-navbar-bottom-container">
    <NavbarSideListItem
      v-for="(navItem, index) in navItems"
      :key="index"
      :relativeURL="navItem.relativeURL"
      :text="navItem.text"
      :icon="navItem.icon"
    />
  </ul>
</template>
<script>
import NavbarSideListItem from "@/components/nav/NavbarSideListItem.vue";
import { demo } from "@/mixins/demo.js";
import { envVars } from "@/mixins/envVars.js";
import { navigationItems } from "@/mixins/navigation-items.js";
export default {
  components: {
    NavbarSideListItem
  },
  mixins: [envVars, demo, navigationItems]
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#demo-navbar-bottom-container {
  display: flex;
  width: 100%;
  height: $navbar-bottom_height;
  flex-direction: row;
  align-items: stretch;
  position: fixed;
  bottom: 0;
  z-index: 1;
  border-top: 1px solid $color-grey-light;
  @include respond(laptop) {
    display: none;
  }
}
</style>


