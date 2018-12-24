import Vue from "vue";
import Vuex, {
  mapActions
} from "vuex";
import apis from "@/apis/index";
import moment from "moment";
import {
  DATE_FORMAT,
  API_TIME_FORMAT
} from "@/constants.js";

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
      selfRequests: {},
    },
    getters: {
      /**
       * Returns the current logged in TA's information
       */
      getSelf: state => {
        return state.self;
      },
      isAuthenticated: state => {
        return state.self != undefined;
      },
    },
    mutations: {

    },
    actions: {
      ...apis,
      async setRequests(context, params) {}
    }
  });

export default store;
