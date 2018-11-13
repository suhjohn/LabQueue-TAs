<template>
  <section id="page-container">
    <div id="title-main">
      <h1 id="title-main-text">LabQueue Statistics</h1>
    </div>
    <div class="module-list">
      <div class="module-list-item">
        <GraphTotalNumberOfReq/>
      </div>
      <div class="module-list-item">
        <AverageHandleTime/>
      </div>
      <div class="module-list-item">
        <PDBarGraphRequestsHandled/>
      </div>
    </div>
  </section>
</template>

<script>
import GraphTotalNumberOfReq from "~/components/GraphTotalNumberOfReq";
import AverageHandleTime from "~/components/AverageHandleTime";
import PDBarGraphRequestsHandled from "~/components/PDBarGraphRequestsHandled";

export default {
  components: {
    GraphTotalNumberOfReq,
    AverageHandleTime,
    PDBarGraphRequestsHandled
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
#page-container {
  margin-top: 2rem;
  margin-bottom: 10rem;
}
#title-main {
  padding-bottom: 2rem;
}
#title-main-text {
  font-weight: 300;
  font-size: 2.4rem;
}
.module-list {
  display: flex;
  flex-wrap: wrap;
  > :not(:last-child) {
    margin-bottom: 4rem;
    margin-right: 4rem;
  }
}
</style>

