<template>
  <div id="profile-detail-item">
    <p id="profile-detail-item-label">{{label}}</p>
    <p id="profile-detail-item-value">{{value}}</p>
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    value: String
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#profile-detail-item {
  font-size: 1.8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
}
#profile-detail-item-label {
  padding-right: 1.5rem;
  font-weight: 700;
}
#profile-detail-item-value {
}
</style>


