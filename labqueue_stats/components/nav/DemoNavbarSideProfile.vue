<template>
  <div class="profile-container">
    <!-- Image -->
    <div class="profile-photo-container">
      <img class="profile-photo-img" :src="userPhoto">
    </div>
    <!-- Name -->
    <p class="text-main-small">{{ username }}</p>
    <!-- Login Button -->
    <a :href="labqueueLoginURL">
      <ButtonText text="Are you a TA? Log In!" :width="-1" :height="4"/>
    </a>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { envVars } from "@/mixins/envVars.js";
import ButtonText from "@/components/UI_v2/ButtonText.vue";
export default {
  components: {
    ButtonText
  },
  mixins: [envVars],
  computed: {
    ...mapGetters({
      self: "demo_getSelf"
    }),
    username() {
      return this.self.full_name;
    },
    userPhoto() {
      return this.self.picture;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
.profile-container {
  @include flexCenter;
  height: $navbar-side-profile_height;
}
.profile-photo-img {
  height: 5rem;
}
</style>



