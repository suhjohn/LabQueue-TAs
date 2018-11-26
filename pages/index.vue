<template>
  <section>
    <PageHeader headerText="Dashboard"/>
    <IndexModuleGraph/>
  </section>
</template>

<script>
import IndexModuleGraph from "~/components/index/IndexModuleGraph";
import PageHeader from "~/components/UI/PageHeader";
export default {
  components: {
    IndexModuleGraph,
    PageHeader
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
</style>

