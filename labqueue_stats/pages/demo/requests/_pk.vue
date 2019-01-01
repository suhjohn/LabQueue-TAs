<template>
  <div id="page-requests-pk">
    <div id="page-requests-pk-list">
      <RequestList :requests="requests" :isDemo="true"/>
    </div>
    <nuxt-link id="page-requests-pk-button" :to="{name: 'demo-requests'}">
      <ButtonSolid :width="5" :height="5">
        <template slot="text">
          <i class="fas fa-chevron-left"></i>
        </template>
      </ButtonSolid>
    </nuxt-link>
    <div id="page-requests-pk-detail">
      <RequestDetail v-bind="selectedData"/>
    </div>
  </div>
</template>

<script>
import PageHeader from "~/components/pages/PageHeader";
import RequestList from "~/components/pages/requests/RequestsList";
import RequestDetail from "~/components/pages/requests/RequestsDetail";
import ButtonSolid from "@/components/UI/ButtonSolid.vue";
import { mapGetters } from "vuex";
import {
  DATE_FORMAT,
  INITIAL_DATE_FROM,
  INITIAL_DATE_TO
} from "@/constants.js";
import { dateToString, getShiftRequests, filter_shifts } from "@/utils.js";

export default {
  layout: "demo_dashboard",
  components: {
    PageHeader,
    RequestList,
    RequestDetail,
    ButtonSolid
  },
  computed: {
    ...mapGetters({
      getRequest: "getRequest",
      getRequests: "getRequests"
    }),
    selectedData() {
      console.log("[requests-pk:selectedData] execute");
      const pk = Number(this.$route.params.pk);
      // console.log(pk);
      const request = this.getRequest("requests", pk);
      console.log("[requests-pk:selectedData] success");
      // console.log(request);
      return request;
    },
    requests() {
      return this.getRequests("requests");
    }
  },
  async fetch(context) {
    if (context.store.getters.getRequests("requests")) {
      return;
    }
    const query = {
      accepted_before: dateToString(INITIAL_DATE_TO, DATE_FORMAT),
      accepted_after: dateToString(INITIAL_DATE_FROM, DATE_FORMAT)
    };
    const requests = await context.store.dispatch("queryRequests_demo", query);
    context.store.commit("setRequests", {
      page: "requests",
      requests: requests
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
$list-width: 50rem;
#page-requests-pk {
  height: 100vh;
  display: flex;
}
#page-requests-pk-list {
  border-right: 1px solid $color-grey-light;
  width: 0;
  display: none;
  @include respond(laptop) {
    width: $list-width;
    display: block;
  }
}

#page-requests-pk-button {
  height: 5rem;
  width: 5rem;
  position: absolute;
  font-size: 2.5rem;
  transition: 0.15s all;
  color: $color-white;
  background-color: $color-crimson-main-light;
  display: block;
  &:hover {
    color: $color-crimson-main;
  }
  @include respond(laptop) {
    display: none;
  }
}
#page-requests-pk-detail {
  @include respond(laptop) {
    width: calc(100% - #{$list-width});
  }
}
</style>

