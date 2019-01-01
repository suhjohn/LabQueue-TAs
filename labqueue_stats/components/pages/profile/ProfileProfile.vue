<template>
  <div>
    <div id="profile-photo-container">
      <div id="profile-photo-frame"></div>
      <img id="profile-photo-img" :src="userPhoto">
    </div>
    <div id="profile-username-container">
      <h1 id="profile-username-text">{{ username }}</h1>
      <h3 id="profile-username-subtext">Class of {{ userGradYear }}</h3>
    </div>
  </div>
</template>
<script>
import { envVars } from "@/mixins/envVars.js";
import { demo } from "@/mixins/demo.js";

export default {
  mixins: [envVars, demo],
  computed: {
    username() {
      return this.self.full_name;
    },
    userPhoto() {
      return this.self.picture;
    },
    userGradYear() {
      return this.self.grad_year;
    }
  }
};
</script>
<style lang="scss" scoped>
$height: 16rem;
@import "@/assets/scss_v2/main.scss";
#profile-photo-container {
  @include flexCenter;
  height: $height;
}

#profile-photo-img {
  height: 15rem;
}
#profile-photo-frame {
  background-color: transparent;
  position: absolute;
  width: 20rem;
  height: $height;
  z-index: 1;
  mask-image: radial-gradient(6rem at 50% 45%, transparent 100%, black 100%);
}

#profile-username-container {
  @include flexCenter;
}
#profile-username-text {
  @include text-x-large;
}
#profile-username-subtext {
  @include text-medium;
}
</style>


