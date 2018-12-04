import Vue from "vue";
import Vuex, { mapActions } from "vuex";
import apis from "@/apis/index";
import moment from "moment";
import { DATE_FORMAT, API_TIME_FORMAT } from "@/constants.js";

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
      // Array
      selfShifts: [],
      selfShiftsTotalTime: 0,
      // [<req1>,<req2>,<req3>,...]
      selfRequests: [],
      selfRequestsObj: {},
      shiftsRequestsArr: [],
      // {shift1: [<req>, <req>,...]}
      shiftsRequestsObj: {},
      // {ta: {shift1: [], shift2:[]}
      shiftsRequestsObjTA: {},
      // {shift1: {ta1:[], ta2:[]}}
      shiftsRequestsObjShift: {},
      isFetchingData: false,
      isInitialFetch: true,
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
      selectedRequest:{}
    },
    getters: {
      /**
       * Returns the current logged in TA's information
       */
      getSelf: state => {
        return state.self;
      },
      getSelfShifts: state => {
        return state.selfShifts;
      },
      getIsInitialFetch: state => {
        return state.isInitialFetch;
      },
      /**
       *
       */
      getSelfRequests: state => {
        return state.selfRequests;
      },
      getSelfRequestsObj:state=>{
        return state.selfRequestsObj;
      },
      getSelfRequestsCount: state => {
        return state.selfRequests.length;
      },
      getShiftRequestsArr: state => {
        return state.shiftsRequestsArr;
      },
      getShiftRequestsObj: state => as => {
        let ret = undefined;

        switch (as) {
          case "ta":
            ret = state.shiftsRequestsObjTA;
            break;
          case "shift":
            ret = state.shiftsRequestsObjShift;
            break;
          default:
            ret = state.shiftsRequestsObj;
        }
        return ret;
      },
      getSelfTotalTime: state => {
        return state.selfShiftsTotalTime;
      },
      getIsFetchingData: state => {
        return state.isFetchingData;
      },
      isTAUser: state => {
        return null;
      },
      getSelectedRequest: state=>{
        return state.selectedRequest;
      }
    },
    mutations: {
      setFetchingState(state, flag) {
        Vue.set(state, "isFetchingData", flag);
      },
      /**
       * Sets self to store.
       */
      setSelf(state, self) {
        Vue.set(state, "self", { ...self });
      },
      /**
       * Sets the current user's requests to the store.
       */
      setSelfRequests(state, requests) {
        /* Represents a filter on requests that took too long which means that it was probably just open for too long */
        const BUGGY_REQUEST_FILTER_LIMIT = 60;

        const limit_duration = moment.duration(
          BUGGY_REQUEST_FILTER_LIMIT,
          "minutes"
        );
        let selfRequests = requests.filter(request => {
          return request.acceptor_netid === state.self.netid;
        });
        selfRequests = selfRequests.map(request => {
          let moment_accepted = moment(request.time_accepted);
          let moment_closed = moment(request.time_closed);
          let diff = moment_closed.diff(moment_accepted);
          if (diff < limit_duration) {
            return request;
          } else {
            request.time_closed = moment_accepted
              .add(limit_duration)
              .format(API_TIME_FORMAT);
            return request;
          }
        });

        Vue.set(state, "selfRequests", selfRequests);
        state.selfRequests.sort((a, b) => {
          let base = moment(a.time_accepted);
          let comp = moment(b.time_closed);
          return base.diff(comp);
        });
        state.selfRequests.forEach(req => {
          state.selfRequestsObj[req.pk] = req
        })
      },
      setSelfRequestsTotalTime(state, requests) {
        let totalMin = 0;
        state.selfRequests.forEach(req => {
          let from = moment(req.time_accepted); //todays date
          let to = moment(req.time_closed); // another date
          let duration = moment.duration(to.diff(from)).asMinutes();
          totalMin += duration;
        });
        Vue.set(state, "selfShiftsTotalTime", totalMin);
      },
      /**
       * Sets the selfShifts based on selfRequest
       */
      setShifts(state) {
        const shifts = state.selfRequests.map(request => {
          return moment(request.time_accepted).format(DATE_FORMAT);
        });
        shifts.sort();
        Vue.set(state, "selfShifts", [...new Set(shifts)]);
      },
      /**
       * Sets the requests from self's shift days including other tas' requests
       */
      setShiftsRequests(state, requests) {
        // [requests]
        const shiftSet = new Set(state.selfShifts);
        const shiftsRequests = requests.filter(request => {
          const time_accepted = moment(request.time_accepted).format(
            DATE_FORMAT
          );
          return shiftSet.has(time_accepted);
        });
        Vue.set(state, "shiftsRequestsArr", [...shiftsRequests]);

        // {shift: [requests]}
        let shiftsRequestsObj = {};
        state.selfShifts.forEach(shift => {
          shiftsRequestsObj[shift] = [];
        });
        requests.forEach(request => {
          const time_accepted = moment(request.time_accepted).format(
            DATE_FORMAT
          );
          shiftsRequestsObj[time_accepted].push(request);
        });
        Vue.set(state, "shiftsRequestObj", { ...shiftsRequestsObj });

        // {ta: {shift1: [], shift2:[]}
        let formattedShiftsRequestTA = {};
        const shiftTas = [
          ...new Set(shiftsRequests.map(request => request.acceptor_netid))
        ];
        shiftTas.forEach(ta => {
          let shiftsData = {};
          state.selfShifts.forEach(shift => {
            shiftsData[shift] = [];
          });
          formattedShiftsRequestTA[ta] = shiftsData;
        });
        shiftsRequests.forEach(request => {
          const ta = request.acceptor_netid;
          const shift = moment(request.time_accepted).format(DATE_FORMAT);
          formattedShiftsRequestTA[ta][shift].push(request);
        });
        Vue.set(state, "shiftsRequestsObjTA", {
          ...formattedShiftsRequestTA
        });

        // {shift1: {ta1:[], ta2:[]}}
        const formattedShiftsRequestObj = {};
        Object.keys(shiftsRequestsObj).forEach(shift => {
          const requests = shiftsRequestsObj[shift];
          // Create a reverse mapping of ta netid to hidden alias
          let shiftTANetids = [
            ...new Set(requests.map(request => request.acceptor_netid))
          ];
          let TANetidToIndexDict = {};
          shiftTANetids.forEach((ta, index) => {
            TANetidToIndexDict[ta] = ta;
          });
          // Fill the formattedShiftsRequestObj
          formattedShiftsRequestObj[shift] = {};
          requests.forEach(request => {
            const reverseName = TANetidToIndexDict[request.acceptor_netid];
            formattedShiftsRequestObj[shift][reverseName] =
              formattedShiftsRequestObj[shift][reverseName] || [];
            formattedShiftsRequestObj[shift][reverseName].push(request);
          });
        });
        Vue.set(state, "shiftsRequestsObjShift", {
          ...formattedShiftsRequestObj
        });
      },
      setSelectedRequest(state, request){
        state.selectedrequest = request;
      }

    },
    actions: {
      ...apis,
      /**
       * Custom implementation for nuxtServerInit-like behavior;
       * Store data initialized on initial landing
       * @param {*} context
       */
      async nuxtClientInit(context) {
        context.state.isInitialFetch = true;
        const self = await context.dispatch("retrieveSelf");
        context.commit("setSelf", self);
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
        await context.dispatch("setRequests", defaultParams);
        context.state.isInitialFetch = false;
      },

      /**
       * Sets shift requests to vuex.
       *
       * @param {Object} state              Vuex state
       * @param {Object} params             Parameters for the API request
       * @param {Object} params.dateFrom
       * @param {Object} params.dateTo
       * @return {null}
       */
      async setRequests(context, params) {
        const requests = await context.dispatch("queryRequests", params);
        context.commit("setSelfRequests", requests);
        context.commit("setSelfRequestsTotalTime");
        context.commit("setShifts");
        context.commit("setShiftsRequests", requests);
      }
    }
  });

export default store;
