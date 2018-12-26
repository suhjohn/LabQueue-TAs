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
import ButtonText from "@/components/UI_v2/ButtonText.vue";
import { envVars } from "@/mixins/envVars.js";

export default {
  components: {
    NavbarSideListItem,
    ButtonText
  },
  mixins: [envVars],
  data() {
    return {
      navItems: [
        {
          icon: "chart-line",
          text: "Dashboard",
          relativeURL: "/demo"
        },
        {
          icon: "list-ul",
          text: "Requests",
          relativeURL: "/demo/requests"
        }
      ]
    };
  }
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

  @include respond(laptop) {
    display: none;
  }
}
</style>


