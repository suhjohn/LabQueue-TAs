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
      labTAs:
          {LabTA.netId: {LabTA...}, } 
      */
      labTAs: {},
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
        time_closed: DateTime(? String?)
      requests:
        {request.pk : {request...}}
      */
      requests: {}
    },
    getters: {
      /* Returns the appropriate LabTA based on the query */
      getLabTAs: state => query => {},
      /* Returns the labta with the corresponding netid */
      getLabTA: state => netid => {},
      /* Returns the appropriate request based on the query */
      getRequests: state => query => {},
      /* Returns the request with the corresponding pk */
      getRequest: state => netid => {}
    },
    mutations: {
      /* Sets each of the labTAs to the store */
      setLabTAs(state, labTAs) {
        labTAs.forEach(labTA => {
          context.commit("setLabTA", labTA);
        });
      },
      /* Sets a LabTA to store. labTas with netid as key and the item itself as value */
      setLabTA(state, labTA) {
        state.labTAs[labTA.netid] = labTA;
      },
      /* Sets each request in requests to the store */
      setRequests(state, requests) {
        requests.forEach(request => {
          context.commit("setRequest", request);
        });
      },
      /* Sets a request to store. */
      setRequest(state, request) {
        state.requests[request.pk] = request;
      }
    },
    actions: {
      ...apis
    }
  });

export default store;
