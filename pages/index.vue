<template>
  <section id="page-container">
    <div id="title-main">
      <h1 id="title-main-text">LabQueue Statistics</h1>
    </div>
    <div class="module-container">
      <div class="module">
        <AverageHandleTime/>
      </div>
      <div class="module">
        <GraphTotalNumberOfReq/>
      </div>
    </div>
  </section>
</template>

<script>
import GraphTotalNumberOfReq from "~/components/GraphTotalNumberOfReq";
import AverageHandleTime from "~/components/AverageHandleTime";

export default {
  components: {
    GraphTotalNumberOfReq,
    AverageHandleTime
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
#page-container {
  margin-top: 2rem;
}
#title-main {
  padding-bottom: 2rem;
}
#title-main-text {
  font-weight: 300;
  font-size: 2.4rem;
}
.module-container {
  display: flex;
  > :not(:last-child) {
    margin-bottom: 4rem;
    margin-right: 4rem;
  }
}
</style>

