<template>
  <div id="profile-profile">
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
@import "@/assets/scss_v2/main.scss";
$height: 14rem;
$background-color: $color-crimson-main-lighter;

#profile-profile {
  width: 100%;
  padding-top: $margin-base;
  background-color: $background-color;
  @include respond(laptop) {
    background-color: $color-white;
    padding-top: 0;
  }
}
#profile-photo-container {
  @include flexCenter;
  height: $height;
}

#profile-photo-img {
  height: 14rem;
}
#profile-photo-frame {
  background-color: $background-color;
  position: absolute;
  width: 20rem;
  height: $height;
  z-index: 1;
  mask-image: radial-gradient(5rem at 50% 40%, transparent 99%, black 100%);
  @include respond(laptop) {
    background-color: $color-white;
  }
}

#profile-username-container {
  @include flexCenter;
}
#profile-username-text {
  @include text-large;
  color: $color-white;
  @include respond(laptop) {
    color: $color-grey-darkest;
  }
}
#profile-username-subtext {
  @include text-small;
  font-weight: 300;
  color: $color-grey-lightest;
  @include respond(laptop) {
    color: $color-grey-darkest;
  }
}
</style>


