<template>
  <div>
    <div></div>
    <div class="login-container">
      <div class="logo-container">
        <img src="~/assets/static/Logo.svg">
      </div>
      <a :href="labqueueLoginURL">
        <ButtonSolid text="Log In" :minWidth="30" :minHeight="5"/>
      </a>
      <nuxt-link :to="{name: 'demo'}">
        <ButtonGhost text="See Demo" :minWidth="30" :minHeight="5"/>
      </nuxt-link>
      <a :href="labqueueBaseURL">
        <ButtonText text="Back to Queue" :minWidth="30" :minHeight="5" fontColor="turquoise"/>
      </a>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import ButtonSolid from "@/components/UI_v2/ButtonSolid.vue";
import ButtonGhost from "@/components/UI_v2/ButtonGhost.vue";
import ButtonText from "@/components/UI_v2/ButtonText.vue";

export default {
  components: {
    ButtonSolid,
    ButtonGhost,
    ButtonText
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated"
    }),
    labqueueLoginURL() {
      return process.env.labqueueLoginURL;
    },
    labqueueBaseURL() {
      return process.env.labqueueBaseURL;
    }
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

