import Vue from "vue";
import Vuex, { mapActions } from "vuex";
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
      self: {},
      /* 
      request:
        pk: Int
        author_full_name: Str
        author_username: Str
        location: Str
        course: ?
        description: Str
        time_created: DateTime(? String?)
        acceptor_netid: ?
        time_accepted: DateTime(? String?)
        closer_username: Str
        time_closed: DateTime in String: "2017-10-24T19:26"
      */
      selfShiftRequests: {},
      selfShiftRequestsArr: []
    },
    getters: {
      /* Returns the current logged in TA's information */
      getSelf: state => query => {}
    },
    mutations: {
      /**
       * Sets self to store.
       */
      setSelf(state, self) {
        state.self = labTA;
      },
      /**
       * Sets a request to store.
       */
      setRequest(state, request) {
        state.selfShiftRequestsArr.push(request);
      },
      /**
       * Sets self's shift requests to vuex.
       */
      setSelfShiftRequests(state, shiftRequests) {
        state.selfShiftRequests = shiftRequests;
      },
      /* 
      Sets each request in requests to the store 
      requests: [{request}}]]
      */
      setRequests(state, requests) {
        requests.forEach(request => {
          state.selfShiftRequestsArr.push(request);
        });
      }
    },
    actions: {
      ...apis,
      /**
       * Sets shift requests to vuex.
       *
       * @param {Object} state                    Vuex state
       * @param {Object} shiftRequests
       * @param {Object} shiftRequests.<semester> Enum of ["F18", "S18", "F17"...] that denotes which semester the
       *                                          request is from.
       * @return {null}
       */
      setSelfShiftRequests(context, selfShiftRequests) {
        context.commit("setSelfShiftRequests", selfShiftRequests);
        const shiftRequestsArr = Object.values(shiftRequests);
        shiftRequestsArr.forEach(shift => {
          const requests = Object.values(shift);
          context.commit("setRequests", requests);
        });
      }
    }
  });

export default store;
