<template>
  <div id="page-requests">
    <RequestList :requests="requests" :isDemo="true"/>
  </div>
</template>

<script>
import RequestList from "~/components/pages/requests/RequestsList";
import RequestDetail from "~/components/pages/requests/RequestsDetail";
import { mapMutations } from "vuex";
import { demo } from "@/mixins/demo.js";
import { dateToString, getShiftRequests, filter_shifts } from "@/utils.js";

import {
  DATE_FORMAT,
  INITIAL_DATE_FROM,
  INITIAL_DATE_TO
} from "@/constants.js";

export default {
  layout: "demo_dashboard",
  mixins: [demo],
  data() {
    return {};
  },
  components: {
    RequestList,
    RequestDetail
  },
  methods: {},
  async asyncData(context) {
    const query = {
      accepted_before: dateToString(INITIAL_DATE_TO, DATE_FORMAT),
      accepted_after: dateToString(INITIAL_DATE_FROM, DATE_FORMAT)
    };
    const requests = await context.store.dispatch("queryRequests_demo", query);
    context.store.commit("setRequests", {
      page: "requests",
      requests: requests
    });
    return {
      requests: requests
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#page-requests {
  border-right: 1px solid $color-grey-light;
  height: 100vh;
  @include respond(laptop) {
    width: 50rem;
  }
}
</style>

