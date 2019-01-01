<template>
  <section class="container">
    <RequestList class="request-list"/>
    <nuxt-link class="button-back" tag="button" :to="{name: 'requests'}">
      <i class="fas fa-arrow-left"></i>
    </nuxt-link>
    <transition name="across">
      <RequestDetail class="request-detail" v-bind="selectedData"/>
    </transition>
  </section>
</template>

<script>
import PageHeader from "~/components/pages/PageHeader";
import RequestList from "~/components/pages/requests/RequestsList";
import RequestDetail from "~/components/pages/requests/RequestsDetail";
import { mapGetters } from "vuex";
export default {
  layout: "demo_dashboard",
  components: {
    PageHeader,
    RequestList,
    RequestDetail
  },
  computed: {
    ...mapGetters({
      getRequest: "getRequest"
    }),
    selectedData() {
      console.log("[requests-pk:selectedData] execute");
      const pk = Number(this.$route.params.pk);
      console.log(pk);
      const request = this.getRequest("requests", pk);
      console.log("[requests-pk:selectedData] success");
      console.log(request);
      return request;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#page {
  padding: 0;
}
.container {
  display: flex;
}
.request-list {
  display: none;
}
.button-back {
  height: 5rem;
  width: 5rem;
  position: absolute;
  font-size: 2.5rem;
  transition: 0.15s all;
  color: $color-white;
  background-color: $color-crimson-main-light;
  &:hover {
    color: $color-crimson-main;
  }
  &:active {
  }
}
@media only screen and (min-width: 1200px) {
  .request-list {
    display: block;
    width: 50rem;
  }
  .request-detail {
    width: auto;
  }
  .button-back {
    display: none;
  }
}
</style>

