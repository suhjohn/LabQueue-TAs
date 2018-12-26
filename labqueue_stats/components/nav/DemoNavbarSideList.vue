<template>
  <div id="demo-navbar-side-list-container">
    <ul id="demo-navbar-side-list">
      <DemoNavbarSideListItem
        v-for="(navItem, index) in navItems"
        :key="index"
        :relativeURL="navItem.relativeURL"
        :text="navItem.text"
        :icon="navItem.icon"
      />
    </ul>
    <div id="demo-navbar-side-footer">
      <a :href="labqueueBaseURL">
        <ButtonText text="Back to Queue" :minWidth="-1" :minHeight="5" fontColor="grey-dark"/>
      </a>
    </div>
  </div>
</template>
<script>
import DemoNavbarSideListItem from "@/components/nav/DemoNavbarSideListItem.vue";
import ButtonText from "@/components/UI_v2/ButtonText.vue";
import { envVars } from "@/mixins/envVars.js";

export default {
  components: {
    DemoNavbarSideListItem,
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
#demo-navbar-side-list-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: $navbar-side-list_height;
}
#demo-navbar-side-footer {
  @include flexCenter;
  height: 15rem;
}
</style>


