<template>
  <ul ref="request-list" class="request-list">
    <div id="requests-list-header">
      <PageHeader>
        <template slot="header">Requests</template>
      </PageHeader>
      <RequestsListSearch/>
    </div>
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
</template>
<script>
import PageHeader from "~/components/pages/PageHeader";
import RequestsListItem from "./RequestsListItem";
import RequestsListSearch from "./RequestsListSearch";
import { mapGetters, mapActions } from "vuex";
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
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";

.request-list {
  height: 100%;
  background-color: $color-white;
  overflow: scroll;
}
#requests-list-header {
  position: sticky;
  top: 0;
  padding: $margin-small;
  background-color: $color-white;
  border-bottom: 1px solid $color-grey-light;
}
</style>


