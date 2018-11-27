<template>
  <ul ref="request-list" class="request-list">
    <RequestsListItem v-for="(request, index) in selfRequests" :key="index" :authorFullname="request.author_full_name" :authorUsername="request.author_username" :course="request.course" :description="request.description" :timeAccepted="request.time_accepted" @click="onClickHandle(index)" :selected="index===selectedRequestItem" />
    <no-ssr>
      <!-- <infinite-loading></infinite-loading> -->
    </no-ssr>
  </ul>

</template>
<script>
import RequestsListItem from "./RequestsListItem";
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import InfiniteLoading from "vue-infinite-loading";
import NoSSR from "vue-no-ssr";

export default {
  data() {
    return {
      selectedRequestItem: 0,
      scrolling: false
    };
  },
  components: {
    RequestsListItem,
    InfiniteLoading,
    "no-ssr": NoSSR
  },
  computed: {
    ...mapGetters({
      selfRequests: "getSelfRequests"
    }),
    containerHeight() {
      const container = this.$refs;
      console.log(container);
      return {};
    }
  },
  methods: {
    ...mapActions({ setRequests: "setRequests" }),
    onClickHandle(index) {
      this.selectedRequestItem = index;
    },
    async loadMore() {
      this.busy = true;
      const mostRecent = this.selfRequests[0];
      const leastRecent = this.setRequests[this.setRequests.length - 1];
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


