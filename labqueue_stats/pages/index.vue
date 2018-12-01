<template>
  <section>
    <loading :active.sync="isFetchingData" :is-full-page="false"></loading>
    <PageHeader headerText="Dashboard" />
    <IndexModuleGraph/>
  </section>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { mapGetters } from "vuex";
import IndexModuleGraph from "~/components/index/IndexModuleGraph";
import PageHeader from "~/components/UI/PageHeader";
export default {
  components: {
    IndexModuleGraph,
    PageHeader,
    Loading
  },
  computed: {
    ...mapGetters({
      isFetchingData: "getIsFetchingData"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
</style>

