<template>
  <div>
    <div></div>
    <div class="login-container">
      <div class="logo-container">
        <img src="~/assets/static/Logo.svg">
      </div>
      <a :href="labqueueLoginURL">
        <ButtonSolid text="Log In" :width="30" :height="5"/>
      </a>
      <nuxt-link :to="{name: 'demo'}">
        <ButtonGhost text="See Demo" :width="30" :height="5"/>
      </nuxt-link>
      <a :href="labqueueBaseURL">
        <ButtonText text="Back to Queue" :width="30" :height="5" fontColor="turquoise"/>
      </a>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { envVars } from "@/mixins/envVars.js";
import ButtonSolid from "@/components/UI_v2/ButtonSolid.vue";
import ButtonGhost from "@/components/UI_v2/ButtonGhost.vue";
import ButtonText from "@/components/UI_v2/ButtonText.vue";

export default {
  components: {
    ButtonSolid,
    ButtonGhost,
    ButtonText
  },
  mixins: [envVars],
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated"
    })
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
.login-container {
  @include absCenter;
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 40rem;
  justify-content: space-evenly;
}
.logo-container {
  margin: 3rem 0;
  margin-left: auto;
  margin-right: auto;
}
</style>

