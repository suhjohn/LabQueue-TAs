<template>
  <div id="request-list">
    <div id="requests-list-header">
      <PageHeader>
        <template slot="header">Requests</template>
      </PageHeader>
      <RequestsListSearch :isDemo="isDemo"/>
    </div>
    <ul id="request-list-item-container">
      <RequestsListItem
        v-for="(request, index) in requests"
        :key="request.pk"
        :authorFullname="request.author_full_name"
        :pk="request.pk"
        :authorUsername="request.author_username"
        :course="request.course"
        :description="request.description"
        :timeAccepted="request.time_accepted"
        :selected="index===selectedRequestItem"
        :isDemo="isDemo"
      />
    </ul>
  </div>
</template>
<script>
import PageHeader from "~/components/pages/PageHeader";
import RequestsListItem from "./RequestsListItem";
import RequestsListSearch from "./RequestsListSearch";
import { mapGetters, mapMutations } from "vuex";
import moment from "moment";

export default {
  data() {
    return {
      selectedRequestItem: null
    };
  },
  props: {
    requests: {
      type: Array
    },
    isDemo: {
      type: Boolean
    }
  },
  components: {
    PageHeader,
    RequestsListItem,
    RequestsListSearch
  },
  computed: {
    ...mapGetters({
      getRequestsListScrollHeight: "getRequestsListScrollHeight"
    })
  },
  destroyed() {
    const height = document.getElementById("request-list-item-container")
      .scrollTop;
    this.setRequestsListScrollHeight(height);
  },
  mounted() {
    const height = this.getRequestsListScrollHeight;
    if (height != 0) {
      document.getElementById("request-list-item-container").scrollTop = height;
    }
  },
  methods: {
    ...mapMutations({
      setRequests: "setRequests",
      setRequestsListScrollHeight: "setRequestsListScrollHeight"
    })
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
$header-height: 12rem;
#request-list {
  width: 100%;
  height: 100%;
  position: relative;
}
#request-list-item-container {
  height: calc(100% - #{$header-height});
  background-color: $color-white;
  overflow: scroll;
  @include respond(laptop) {
    height: 100%;
  }
}
#requests-list-header {
  height: $header-height;
  position: sticky;
  top: 0 + $navbar-top_height;
  padding: $margin-small;
  background-color: $color-white;
  border-bottom: 1px solid $color-grey-light;
  @include respond(laptop) {
    top: 0;
  }
}
</style>


