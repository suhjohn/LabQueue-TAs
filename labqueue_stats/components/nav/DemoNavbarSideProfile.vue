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
      <ButtonGhost text="Log In" :minWidth="10" :minHeight="4"/>
    </a>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { envVars } from "@/mixins/envVars.js";
import ButtonGhost from "@/components/UI_v2/ButtonGhost.vue";
export default {
  components: {
    ButtonGhost
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



