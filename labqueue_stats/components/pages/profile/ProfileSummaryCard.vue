<template>
  <div class id="profile-summary-card" :style="profileSummaryCardStyle">
    <div id="profile-summary-card-icon-container">
      <i
        id="profile-summary-card-icon"
        class="fas text-small u-margin-small"
        :class="'fa-' + icon"
        :style="{color:color}"
      ></i>
    </div>
    <div id="profile-summary-card-title-container">
      <h1 id="profile-summary-card-title">{{ title }}</h1>
    </div>
    <div id="profile-summary-card-value-container">
      <h3 id="profile-summary-card-value">{{ value }}</h3>
    </div>
  </div>
</template>
<script>
import CardItemMain from "@/components/UI/CardItemMain.vue";
export default {
  props: {
    icon: {
      type: String
    },
    title: {
      type: String
    },
    value: {
      type: Number
    },
    color: {
      type: String
    }
  },
  components: {
    CardItemMain
  },
  computed: {
    profileSummaryCardStyle() {
      return {
        "border-bottom": `5px solid ${this.color}`
      };
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#profile-summary-card {
  width: 33%;
  justify-content: space-around;
  @include respond(laptop) {
    padding: 2rem;
  }
}
#profile-summary-card-icon-container {
  @include flexCenter;
  height: 6rem;
}
#profile-summary-card-icon {
  font-size: 3rem;
  @include respond(laptop) {
    font-size: 3rem;
  }
}
#profile-summary-card-title-container {
  @include flexCenter;
  text-align: center;
}
#profile-summary-card-title {
  font-size: 1.2rem;
  font-weight: 500;

  @include respond(laptop) {
    font-size: 1.4rem;
  }
}

#profile-summary-card-value-container {
  @include flexCenter;
  text-align: center;
}

#profile-summary-card-value {
  @include selectedWeight;
  @include respond(laptop) {
    font-size: 2.4rem;
  }
  font-size: 1.8rem;
}
</style>


