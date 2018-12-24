<template>
  <div></div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated"
    })
  }
};
</script>
<style lang="scss" scoped>
</style>

