import Vue from "vue";
import Vuex, {
  mapActions
} from "vuex";
import apis from "@/apis/index";

Vue.use(Vuex);
const store = () =>
  new Vuex.Store({
    state: {
      /* 
      labTA:
        full_name: SerializerMethodField
        netid: Str
        puid: Str
        major: Str
        grad_year: Int
        type: ?
        picture: Str
        is_active: Bool
      */
      self: undefined,
      demo_self: {
        full_name: "Demo TA",
        netid: "demouser",
        puid: "123456789",
        major: "AB Computer Science",
        grad_year: 2020,
        type: "full",
        picture: "/DemoUserImage.svg",
        is_active: true
      },
      /* 
      request:
        pk: Int
        author_full_name: Str
        author_username: Str
        location: Str
        course: Str
        description: Str
        time_created: DateTime(? String?)
        acceptor_netid: ?
        time_accepted: DateTime(? String?)
        closer_username: Str
        time_closed: DateTime in String: "2017-10-24T19:26"
      */
      requests_requests: {},
    },
    getters: {
      /**
       * Returns the current logged in TA's information
       */
      getSelf: state => {
        return state.self;
      },
      demo_getSelf: state => {
        return state.demo_self;
      },
      isAuthenticated: state => {
        return state.self != undefined;
      },
      getRequests: state => page => {
        return state[`${page}_requests`];
      }
    },
    mutations: {
      setSelf(state, self) {
        Vue.set(state, "self", { ...self
        });
      },
      setRequests(state, page, requests) {
        Vue.set(state, `${page}_requests`, requests)
      }
    },
    actions: {
      ...apis,
      async setRequests(context, params) {},
      async setSelf(context) {
        const self = await context.dispatch('retrieveSelf');
        context.commit("setSelf", self);
      }
    }
  });

export default store;
