<template>
  <section class="container">
    <RequestList class="request-list" />
  </section>
</template>

<script>
import PageHeader from "~/components/UI/PageHeader";
import RequestList from "~/components/requests/RequestsList";
import RequestDetail from "~/components/requests/RequestsDetail";
export default {
  middleware: ["auth-user"],
  transition: "none",
  data() {
    return {};
  },
  components: {
    PageHeader,
    RequestList,
    RequestDetail
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
#page {
  padding: 0;
}
.container {
  display: flex;
}
.request-list {
  width: 100%;
}

@media only screen and (min-width: 1200px) {
  .request-list {
    width: 50rem;
  }
}
</style>


