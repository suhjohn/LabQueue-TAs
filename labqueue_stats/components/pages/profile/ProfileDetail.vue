<template>
  <div id="profile-detail">
    <ProfileDetailItem
      v-for="value in profileItems"
      :key="value[0]"
      :label="value[0]"
      :value="String(value[1])"
    ></ProfileDetailItem>
  </div>
</template>
<script>
import { envVars } from "@/mixins/envVars.js";
import { demo } from "@/mixins/demo.js";
import ProfileDetailItem from "@/components/pages/profile/ProfileDetailItem.vue";

export default {
  components: {
    ProfileDetailItem
  },
  mixins: [envVars, demo],
  computed: {
    profileItems() {
      // From the self object, these fields will be displayed
      const displayFields = new Set([
        "full_name",
        "netid",
        "puid",
        "major",
        "grad_year"
      ]);
      return Object.entries(this.self).filter(entries => {
        return displayFields.has(entries[0]);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#profile-detail {
  width: 40rem;
  margin: 0 auto;
}
</style>

