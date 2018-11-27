<template>
    <section>
        <PageHeader headerText="Requests" />
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
</style>


