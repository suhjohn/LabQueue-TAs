<template>
  <div id="page-profile">
    <PageHeader>
      <template slot="header">Profile</template>
    </PageHeader>
    <div id="page-profile-wrapper">
      <ProfileProfile :isDemo="false"/>
      <ProfileSummary :isDemo="false"/>
      <ProfileDetail :isDemo="false"/>
    </div>
  </div>
</template>
<script>
import PageHeader from "@/components/pages/PageHeader.vue";
import ProfileProfile from "@/components/pages/profile/ProfileProfile.vue";
import ProfileSummary from "@/components/pages/profile/ProfileSummary.vue";
import ProfileDetail from "@/components/pages/profile/ProfileDetail.vue";
export default {
  components: {
    ProfileProfile,
    ProfileSummary,
    ProfileDetail,
    PageHeader
  },
  layout: "dashboard"
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";

$mobile-padding: $margin-small;
$laptop-padding: $margin-large;

#page-profile {
  height: 100%;
  padding: $mobile-padding;
  @include respond(laptop) {
    padding: $laptop-padding;
  }
}
#page-profile-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > :not(:last-child) {
    margin-bottom: $margin-base;
  }
}
#page-profile-divider {
  border: 1px solid $color-grey-light;
  width: 100%;
}
</style>

