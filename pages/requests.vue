<template>
  <section class="container">
    <RequestList @selected="onSelected" />
    <RequestDetail :authorFullname="selectedData.author_full_name" :authorUsername="selectedData.author_username" :location="selectedData.location" :course="selectedData.course" :description="selectedData.description" :timeCreated="selectedData.time_created" :timeAccepted="selectedData.time_accepted" 
    :timeClosed="selectedData.time_closed" :acceptorNetId="selectedData.acceptor_netid" :closerUsername="selectedData.closerUsername" /> 
  </section>
</template>

<script>
import PageHeader from "~/components/UI/PageHeader";
import RequestList from "~/components/requests/RequestsList";
import RequestDetail from "~/components/requests/RequestsDetail";
export default {
  data() {
    return { selectedData: {} };
  },
  components: {
    PageHeader,
    RequestList,
    RequestDetail
  },
  methods: {
    onSelected(selectedData) {
      this.selectedData = selectedData;
    }
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


