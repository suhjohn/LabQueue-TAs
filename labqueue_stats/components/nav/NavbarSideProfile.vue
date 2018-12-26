<template>
  <div>
    <!-- Image -->
    <div class="profile-container"></div>
    <!-- Name -->
    <p class="text-small">{{ self.full_name }}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      self: "getSelf"
    })
  }
};
</script>
<style lang="scss" scoped>
</style>



