<template>
  <div id="page-requests">
    <div id="page-requests-list">
      <RequestList :requests="requests" :isDemo="true"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RequestList from "~/components/pages/requests/RequestsList";
import RequestDetail from "~/components/pages/requests/RequestsDetail";
import { demo } from "@/mixins/demo.js";
import { dateToString, getShiftRequests, filter_shifts } from "@/utils.js";
import {
  DATE_FORMAT,
  INITIAL_DATE_FROM,
  INITIAL_DATE_TO
} from "@/constants.js";

export default {
  watchQuery: ["search"],
  layout: "demo_dashboard",
  data() {
    return {};
  },
  components: {
    RequestList,
    RequestDetail
  },
  computed: {
    ...mapGetters({
      getRequests: "getRequests"
    }),
    requests() {
      return this.getRequests("requests");
    }
  },
  // async fetch(context) {
  //   // console.log("[demo-requests:fetch] execute");
  //   if (Object.keys(context.query).length > 0 && context.query.search !== "") {
  //     console.log("[demo-requests:fetch] has search query");
  //     const searchQuery = context.query.search;
  //     const query = {
  //       author: searchQuery
  //     };
  //     const requests = await context.store.dispatch(
  //       "queryRequests_demo",
  //       query
  //     );
  //     // console.log(requests);
  //     context.store.commit("setRequests", {
  //       page: "requests",
  //       requests: requests
  //     });
  //     return;
  //   }
  //   if (context.store.getters.getRequests("requests")) {
  //     return;
  //   }
  //   const query = {
  //     accepted_before: dateToString(INITIAL_DATE_TO, DATE_FORMAT),
  //     accepted_after: "2016-01-01"
  //   };
  //   const requests = await context.store.dispatch("queryRequests_demo", query);
  //   context.store.commit("setRequests", {
  //     page: "requests",
  //     requests: requests
  //   });
  // }
  async created() {
    // console.log("[demo-requests:fetch] execute");
    if (
      Object.keys(this.$route.query).length > 0 &&
      this.$route.query.search !== ""
    ) {
      console.log("[demo-requests:fetch] has search query");
      const searchQuery = this.$route.query.search;
      const query = {
        author: searchQuery
      };
      const requests = await this.$store.dispatch("queryRequests_demo", query);
      // console.log(requests);
      this.$store.commit("setRequests", {
        page: "requests",
        requests: requests
      });
      return;
    }
    if (this.$store.getters.getRequests("requests")) {
      return;
    }
    const query = {
      accepted_before: dateToString(INITIAL_DATE_TO, DATE_FORMAT),
      accepted_after: "2016-01-01"
    };
    const requests = await this.$store.dispatch("queryRequests_demo", query);
    this.$store.commit("setRequests", {
      page: "requests",
      requests: requests
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#page-requests {
  border-right: 1px solid $color-grey-light;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
}
#page-requests-list {
  @include respond(laptop) {
    width: 50rem;
  }
}
</style>

