<template>
  <ul ref="request-list" class="request-list">
    <RequestsListItem
      v-for="(request, index) in selfRequestsFormatted"
      :key="request.pk"
      :authorFullname="request.author_full_name"
      :pk="request.pk"
      :authorUsername="request.author_username"
      :course="request.course"
      :description="request.description"
      :timeAccepted="request.time_accepted"
      :selected="index===selectedRequestItem"
    />
  </ul>
</template>
<script>
import RequestsListItem from "./RequestsListItem";
import { mapGetters, mapActions } from "vuex";
import moment from "moment";

export default {
  data() {
    return {
      selectedRequestItem: null,
      scrolling: false
    };
  },
  components: {
    RequestsListItem
  },
  computed: {
    ...mapGetters({
      selfRequests: "getSelfRequests"
    }),
    selfRequestsFormatted() {
      const req = [...this.selfRequests];
      req.reverse();
      return req;
    }
  },
  methods: {
    ...mapActions({
      setRequests: "setRequests",
      setSelectedRequest: "setSelectedRequest"
    }),

    async loadMore() {
      this.busy = true;
      const mostRecent = this.selfRequestsFormatted[0];
      const leastRecent = this.selfRequestsFormatted[
        this.selfRequestsFormatted.length - 1
      ];
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
@import "@/assets/scss_v2/main.scss";

.request-list {
  width: 30rem;
  height: 100vh;
  border-right: 1px solid $color-grey-light;
  background-color: $color-white;
  overflow: scroll;
}
</style>


