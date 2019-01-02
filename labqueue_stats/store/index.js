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
      requests_requestsArr: undefined,
      requests_requestsObj: undefined,
      requests_requestsArr_copy: undefined,
      /* */
      requestsListScrollHeight: 0,
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
        return state[`${page}_requestsArr`];
      },
      getFilteredRequests: state => page => {
        return state[`${page}_requestsArr_filtered`];
      },
      getRequest: state => (page, pk) => {
        // console.log("[getRequest] execute")
        // console.log(page, pk)
        const request = state[`${page}_requestsObj`][pk];
        // console.log("[getRequest] success")
        // console.log(request)
        return request
      },
      getRequestsListScrollHeight: state => {
        return state.requestsListScrollHeight;
      }
    },
    mutations: {
      setSelf(state, self) {
        Vue.set(state, "self", { ...self
        });
      },
      setRequests(state, {
        page,
        requests
      }) {
        if (!requests || requests.length == 0) {
          // console.log("[vuex:setRequests] fail")
          return
        }
        const requestsObj = {};
        requests.forEach(request => {
          requestsObj[request.pk] = request;
        })
        Vue.set(state, `${page}_requestsArr`, [...requests])
        Vue.set(state, `${page}_requestsArr_copy`, [...requests])
        Vue.set(state, `${page}_requestsObj`, { ...requestsObj
        })
        // console.log("[vuex:setRequests] success")
        // console.log(`${page}_requestsArr: ${requests.length}`)
        // console.log(`${page}_requestsObj: ${Object.keys(requestsObj).length}`)
      },
      setFilteredRequests(state, {
        page,
        requests
      }) {
        if (!requests || requests.length == 0) {
          // console.log("[vuex:setRequests] fail")
          return
        }
        const requestsObj = {};
        requests.forEach(request => {
          requestsObj[request.pk] = request;
        })
        Vue.set(state, `${page}_requestsArr`, [...requests])
        Vue.set(state, `${page}_requestsObj`, { ...requestsObj
        })
        // console.log("[vuex:setRequests] success")
        // console.log(`${page}_requestsArr: ${requests.length}`)
        // console.log(`${page}_requestsObj: ${Object.keys(requestsObj).length}`)
      },
      setRequestsListScrollHeight(state, height) {
        state.requestsListScrollHeight = height;
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
