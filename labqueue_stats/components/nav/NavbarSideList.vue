<template>
  <div id="demo-navbar-side-list-container">
    <ul id="demo-navbar-side-list">
      <NavbarSideListItem
        v-for="(navItem, index) in navItems"
        :key="index"
        :relativeURL="navItem.relativeURL"
        :text="navItem.text"
        :icon="navItem.icon"
      />
    </ul>
    <div id="demo-navbar-side-footer">
      <a :href="labqueueBaseURL">
        <ButtonText :width="-1" :height="5" fontColor="grey-dark">
          <template slot="text">Back to Queue</template>
        </ButtonText>
      </a>
    </div>
  </div>
</template>
<script>
import NavbarSideListItem from "@/components/nav/NavbarSideListItem.vue";
import ButtonText from "@/components/UI_v2/ButtonText.vue";
import { envVars } from "@/mixins/envVars.js";
import { demo } from "@/mixins/demo.js";

export default {
  components: {
    NavbarSideListItem,
    ButtonText
  },
  mixins: [envVars, demo],
  data() {
    let relativeURLPrefix;
    if (this.isDemo) {
      relativeURLPrefix = "/demo";
    } else {
      relativeURLPrefix = "";
    }
    return {
      navItems: [
        {
          icon: "chart-line",
          text: "Dashboard",
          relativeURL: `${relativeURLPrefix}`
        },
        {
          icon: "list-ul",
          text: "Requests",
          relativeURL: `${relativeURLPrefix}/requests`
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
  width: 25rem;
  height: $navbar-side-list_height;
}
#demo-navbar-side-footer {
  @include flexCenter;
  height: 15rem;
}
</style>


