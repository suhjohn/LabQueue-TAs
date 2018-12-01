<template>
  <ul ref="request-list" class="request-list">
    <RequestsListItem v-for="(request, index) in selfRequestsFormatted" :key="index" :authorFullname="request.author_full_name" :authorUsername="request.author_username" :course="request.course" :description="request.description" :timeAccepted="request.time_accepted" @click="onClickHandle(index)" :selected="index===selectedRequestItem" />
  </ul>

</template>
<script>
import RequestsListItem from "./RequestsListItem";
import { mapGetters, mapActions } from "vuex";
import moment from "moment";

export default {
  data() {
    return {
      selectedRequestItem: 0,
      scrolling: false
    };
  },
  mounted() {
    this.$emit("selected", this.selfRequestsFormatted[this.selectedRequestItem]);
  },
  components: {
    RequestsListItem
  },
  computed: {
    ...mapGetters({
      selfRequests: "getSelfRequests"
    }),
    selfRequestsFormatted(){
      const req = [...this.selfRequests]
      req.reverse()
      return req;
    }
  },
  methods: {
    ...mapActions({ setRequests: "setRequests" }),
    onClickHandle(index) {
      this.selectedRequestItem = index;
      this.$emit("selected", this.selfRequestsFormatted[this.selectedRequestItem]);
    },
    async loadMore() {
      this.busy = true;
      const mostRecent = this.selfRequestsFormatted[0];
      const leastRecent = this.selfRequestsFormatted[this.selfRequestsFormatted.length - 1];
      const dateTo = mostRecent;
      const dateFrom = moment(leastRecent)
        .add(1, "months")
        .format("YYYY-MM-DD");
      await this.setRequests({
        dateFrom: dateFrom,
        dateTo: dateTo
      });
      this.busy = false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.request-list {
  width: 40rem;
  height: 100vh;
  border-right: 1px solid $color-grey-light;
  background-color: $color-white;
  overflow: scroll;
}
</style>


