<template>
  <div id="profile-container">
    <!-- Image -->
    <div>
      <div id="profile-photo-frame"></div>
      <img id="profile-photo-img" :src="userPhoto">
    </div>

    <!-- Name -->
    <p class="text-main-small">{{ username }}</p>

    <!-- Login Button -->
    <a :href="loginButton.url">
      <ButtonText :width="-1" :height="4">
        <template slot="text">{{ loginButton.text }}</template>
      </ButtonText>
    </a>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { envVars } from "@/mixins/envVars.js";
import { demo } from "@/mixins/demo.js";
import ButtonText from "@/components/UI/ButtonText.vue";
export default {
  components: {
    ButtonText
  },
  mixins: [envVars, demo],
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated"
    }),
    username() {
      console.log(this.self);
      return this.self.full_name;
    },
    userPhoto() {
      return this.self.picture;
    },
    loginButton() {
      if (this.isAuthenticated) {
        return {
          url: this.labqueueLogoutURL,
          text: "Logout"
        };
      } else {
        return {
          url: this.labqueueLoginURL,
          text: ""
        };
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#profile-container {
  @include flexCenter;
  height: $navbar-side-profile_height;
  position: relative;
}
#profile-photo-img {
  width: 7.5rem;
  height: 10rem;
}
#profile-photo-frame {
  @include backgroundColor-light;
  position: absolute;
  width: 10rem;
  height: 10rem;
  transform: translateX(-50%);
  left: 50%;
  z-index: 1;
  mask-image: radial-gradient(3.75rem at 50% 40%, transparent 95%, black 100%);
}
</style>



