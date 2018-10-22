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
      getLabTa: state => query => {}
    },
    mutations: {
      /* Sets each of the labTAs to the store */
      setLabTAs(state, labTAs) {
        labTAs.forEach(labTA => {
          context.commit("setLabTA", labTA);
        });
      },
      /* Sets a LabTA to state. labTas with netid as key and the item itself as value */
      setLabTA(state, labTA) {
        state.labTAs[labTA.netid] = labTA;
      },
      /* Sets a Request to state. Request with pk as key and the item itself as value */
      setRequests(state, requests) {}
    },
    actions: {
      ...apis
    }
  });

export default store;
