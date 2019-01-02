<template>
  <div>
    <div></div>
    <div class="login-container">
      <div class="logo-container">
        <img src="~/assets/static/Logo.svg">
      </div>
      <a :href="labqueueLoginURL">
        <ButtonSolid :width="30" :height="5">
          <template slot="text">Log In</template>
        </ButtonSolid>
      </a>
      <nuxt-link :to="{name: 'demo-profile'}">
        <ButtonGhost :width="30" :height="5">
          <template slot="text">See Demo</template>
        </ButtonGhost>
      </nuxt-link>
      <a :href="labqueueBaseURL">
        <ButtonText :width="30" :height="5" fontColor="turquoise">
          <template slot="text">Back to Queue</template>
        </ButtonText>
      </a>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { envVars } from "@/mixins/envVars.js";
import ButtonSolid from "@/components/UI/ButtonSolid.vue";
import ButtonGhost from "@/components/UI/ButtonGhost.vue";
import ButtonText from "@/components/UI/ButtonText.vue";

export default {
  components: {
    ButtonSolid,
    ButtonGhost,
    ButtonText
  },
  mixins: [envVars],
  middleware: ["redirect-main"],
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated"
    })
  },
  methods: {
    ...mapActions({
      setSelf: "setSelf"
    })
  },
  async created() {
    console.log("[created] execute");
    if (this.isAuthenticated) {
      console.log("[created] authenticated");
      this.$router.push({
        name: "dashboard"
      });
    } else {
      console.log("[created] unauthenticated");
      try {
        console.log("[created] trying setSelf...");
        await this.setSelf();
        console.log("[created] setSelf success");
        this.$router.push({
          name: "dashboard"
        });
      } catch (error) {
        console.log("[created] setSelf fail");
      }
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

