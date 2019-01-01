import {
  mapGetters,
  mapActions
} from "vuex";
export const demo = {
  props: {
    isDemo: {
      type: Boolean
    },
  },
  computed: {
    ...mapGetters({
      getSelf: "getSelf",
      demo_getSelf: "demo_getSelf"
    }),
    self() {
      let _self;
      if (this.isDemo) {
        _self = this.demo_getSelf;
      } else {
        _self = this.getSelf;
      }
      return _self;
    }
  },
  methods: {
    ...mapActions({
      querySelfRequests: "querySelfRequests",
      queryRequests_demo: "queryRequests_demo"
    }),
    async getRequests(query) {
      let requests;
      if (this.isDemo) {
        requests = await this.queryRequests_demo(query)
      } else {
        requests = await this.querySelfRequests(query)
      }
      return requests
    },

  }
};
