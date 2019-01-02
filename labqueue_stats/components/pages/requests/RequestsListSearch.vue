<template>
  <div id="requests-list-search">
    <input
      id="requests-list-search-input"
      placeholder="Type and press enter to search for a username..."
      type="text"
      v-model="query"
      @keyup.enter="searchQuery"
    >
    {{ query }}
    <ButtonText :width="5" :height="3">
      <template slot="text">
        <i class="fas fa-search"></i>
      </template>
    </ButtonText>
  </div>
</template>
<script>
// Project
import { demo } from "@/mixins/demo.js";
import ButtonText from "@/components/UI/ButtonText";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    ButtonText
  },
  data() {
    let query = "";
    // if (Object.keys(this.$route.query).length > 0 && this.$route.query.search) {
    //   query = this.$route.query.search;
    // }
    return {
      query: query
    };
  },
  props: {
    isDemo: {
      type: Boolean
    }
  },
  computed: {
    ...mapGetters({
      getRequests: "getRequests"
    })
  },
  methods: {
    ...mapMutations({
      setRequests: "setRequests"
    }),
    searchQuery() {
      let routeName;
      if (this.isDemo) {
        routeName = "demo-requests";
      } else {
        routeName = "requests";
      }
      this.$router.push({
        name: routeName,
        query: { search: this.query }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#requests-list-search {
  width: 100%;
  display: flex;
}
#requests-list-search-input {
  @include text-small;
  width: 100%;
}
</style>

