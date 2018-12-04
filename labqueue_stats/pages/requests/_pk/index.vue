<template>
  <section class="container">
    <RequestList class="request-list"/>
    <transition name="across">
        <RequestDetail class="request-detail" :authorFullname="selectedData.author_full_name" :authorUsername="selectedData.author_username" :location="selectedData.location" :course="selectedData.course" :description="selectedData.description" :timeCreated="selectedData.time_created" :timeAccepted="selectedData.time_accepted" :timeClosed="selectedData.time_closed" :acceptorNetId="selectedData.acceptor_netid" :closerUsername="selectedData.closerUsername" />
    </transition>
  </section>
</template>

<script>
import PageHeader from "~/components/UI/PageHeader";
import RequestList from "~/components/requests/RequestsList";
import RequestDetail from "~/components/requests/RequestsDetail";
import { mapGetters } from "vuex";

export default {
  transition:"none",
  components: {
    PageHeader,
    RequestList,
    RequestDetail
  },
  computed: {
    ...mapGetters({
      selfRequestsObj: "getSelfRequestsObj"
    }),
    selectedData(){
        return this.selfRequestsObj[this.$route.params.pk] || {
            author_full_name: "",
            author_username: "",
            location: "",
            course: "",
            description: "",
            time_created:"",
            time_Accepted: "",
            time_closed: "",
            acceptor_netid: "",
            closerUsername: ""
        }
    }
  }
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
.request-list{
  display:none;
}

@media only screen and (min-width: 930px) {
  .request-list{
      display:block;
      width: 60rem;
  }
  .request-detail{
      width: auto;
  }
}
</style>


