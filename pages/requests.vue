<template>
  <section class="container">
    <RequestList/>
    <RequestDetail/>
  </section>
</template>

<script>
import PageHeader from "~/components/UI/PageHeader";
import RequestList from "~/components/requests/RequestsList";
import RequestDetail from "~/components/requests/RequestsDetail";
export default {
  components: {
    PageHeader,
    RequestList,
    RequestDetail
  }
};
</script>

<style lang="scss" scoped>
#page {
  padding: 0;
}
.container {
  display: flex;
}
</style>


