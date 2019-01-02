<template>
  <div id="page-profile">
    <div id="page-profile-page-header-wrapper">
      <PageHeader>
        <template slot="header">Profile</template>
      </PageHeader>
    </div>
    <div id="page-profile-header-wrapper">
      <ProfileProfile :isDemo="false"/>
      <ProfileSummary :isDemo="false"/>
    </div>
    <div id="page-profile-body-wrapper">
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
  layout: "dashboard",
  middleware: ["check-auth"]
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";

$mobile-padding: 0;
$laptop-padding: $margin-large;
$background-color: $color-crimson-main-lighter;
#page-profile {
  height: 100%;
}
#page-profile-page-header-wrapper {
  display: none;
  background-color: $background-color;
  color: $color-white;
  @include respond(laptop) {
    background-color: $color-white;
    color: $color-grey-darkest;
    display: block;
    padding: $laptop-padding;
  }
}
#page-profile-header-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > :not(:last-child) {
    padding-bottom: $margin-base;
  }
}
#page-profile-divider {
  border: 1px solid $color-grey-light;
  width: 100%;
}
</style>

