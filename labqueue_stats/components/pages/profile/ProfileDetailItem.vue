<template>
  <div id="profile-detail-item">
    <p id="profile-detail-item-label">{{label}}</p>
    <p id="profile-detail-item-value">{{value || "unknown" }}</p>
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    value: {
      type: String,
      default: "unknown"
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#profile-detail-item {
  width: 100%;
  border-bottom: 1px solid $color-grey-light;
  @include respond(laptop) {
    height: 5rem;
  }
}
#profile-detail-item-label {
  padding-right: 1.5rem;
  font-weight: 700;
  font-size: 1.2rem;
  color: $color-crimson-main;
}
#profile-detail-item-value {
  font-size: 1.4rem;
}
</style>


