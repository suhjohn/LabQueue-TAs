<template>
  <section>
    <loading :active.sync="isFetchingData" :is-full-page="false"></loading>
    <keep-alive>
      <IndexModuleGraph/>
    </keep-alive>
  </section>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { mapGetters, mapMutations, mapActions } from "vuex";
import IndexModuleGraph from "~/components/index/IndexModuleGraph";
import PageHeader from "~/components/UI/PageHeader";
import moment from "moment";
import { DATE_FORMAT, API_TIME_FORMAT } from "@/constants.js";

export default {
  middleware: ["auth-user"],
  components: {
    IndexModuleGraph,
    PageHeader,
    Loading
  },
  computed: {
    ...mapGetters({
      isFetchingData: "getIsFetchingData",
      isDemo: "getIsDemo"
    })
  },
  methods: {
    ...mapMutations({
      setIsInitialFetch: "setIsInitialFetch",
      setSelf: "setSelf"
    }),
    ...mapActions({
      retrieveSelf_demo: "retrieveSelf_demo",
      retrieveSelf: "retrieveSelf",
      setRequests: "setRequests"
    })
  },
  async mounted() {
    this.setIsInitialFetch(true);
    let self = {};
    if (this.isDemo) {
      self = await this.retrieveSelf_demo();
    } else {
      self = await this.retrieveSelf();
    }
    this.setSelf(self);

    // Calculate dateFrom = current date - 1 month, dateTo = current date
    const DEFAULT_MONTH = 1;
    const currentDate = moment()
      .utc()
      .startOf("day");
    const dateTo = currentDate.format(DATE_FORMAT);
    const dateFrom = currentDate
      .subtract(DEFAULT_MONTH, "months")
      .format(DATE_FORMAT);

    const defaultParams = {
      dateFrom: dateFrom,
      dateTo: dateTo
    };
    await this.setRequests(defaultParams);
    this.setIsInitialFetch(false);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
</style>

