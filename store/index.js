import Vue from "vue";
import Vuex, { mapActions } from "vuex";
import apis from "@/apis/index";
import moment from "moment";

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
      selfShifts: [],
      selfShiftsTotalTime: 0,
      selfRequests: [],
      shiftsRequestsArr: [],
      shiftsRequestsObj: {},
      shiftsRequestsObjTA: {},
      shiftsRequestsObjShift: {},
      isFetchingData: true
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
    },
    getters: {
      /**
       * Returns the current logged in TA's information
       */
      getSelf: state => query => {},
      /**
       *
       */
      getSelfRequests: state => {
        return state.selfRequests;
      },
      getSelfRequestsCount: state => {
        return state.selfRequests.length;
      },
      getSelfRequestsObjShift: state => {
        return state.shiftsRequestsObjShift;
      },
      getSelfTotalTime: state => {
        return state.selfShiftsTotalTime;
      }
    },
    mutations: {
      setFetchingState(state, flag) {
        state.isFetchingData = flag;
      },
      /**
       * Sets self to store.
       */
      setSelf(state, self) {
        state.self = self;
      },
      setSelfRequests(state, requests) {
        state.selfRequests = requests.filter(
          request => request.acceptor_netid === state.self.netid
        );
      },
      setSelfRequestsTotalTime(state, requests) {
        let totalMin = 0;
        state.selfRequests.forEach(req => {
          var from = moment(req.time_accepted); //todays date
          var to = moment(req.time_closed); // another date
          var duration = moment.duration(to.diff(from));
          totalMin += duration.asMinutes();
        });
        state.selfShiftsTotalTime = totalMin;
      },
      /**
       * Sets the selfShifts based on selfRequest
       */
      setShifts(state) {
        state.selfShifts = new Set(
          state.selfRequests.map(request => {
            const time_accepted = moment(request.time_accepted);
            return time_accepted.format("YYYY-MM-DD");
          })
        );
      },
      /**
       * Sets the requests from self's shift days including other tas' requests
       */
      setShiftsRequests(state, requests) {
        // [requests]
        const shiftsRequests = requests.filter(request => {
          const time_accepted = moment(request.time_accepted).format(
            "YYYY-MM-DD"
          );
          return state.selfShifts.has(time_accepted);
        });
        state.shiftsRequestsArr = shiftsRequests;

        // {shift: [requests]}
        let shiftsRequestsObj = {};
        state.selfShifts.forEach(shift => {
          shiftsRequestsObj[shift] = [];
        });
        requests.forEach(request => {
          const time_accepted = moment(request.time_accepted).format(
            "YYYY-MM-DD"
          );
          shiftsRequestsObj[time_accepted].push(request);
        });
        state.shiftsRequestsObj = shiftsRequestsObj;

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
          const shift = moment(request.time_accepted).format("YYYY-MM-DD");
          formattedShiftsRequestTA[ta][shift].push(request);
        });
        state.shiftsRequestsFormatted = formattedShiftsRequestTA;

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
            if (ta === state.self.netid) {
              TANetidToIndexDict[ta] = ta;
            } else {
              TANetidToIndexDict[ta] = `TA ${index + 1}`;
            }
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
        state.shiftsRequestsObjShift = formattedShiftsRequestObj;
      },
      /**
       *
       */
      setRequestsByTime(state, requests) {},
      /**
       *
       */
      setRequestsByTimePerReq(state, requests) {},
      /**
       *
       */
      setRequestsByRatioForClass(state, requests) {}
    },
    actions: {
      ...apis,
      /**
       * Custom implementation for nuxtServerInit-like behavior;
       * Store data initialized on initial landing
       * @param {*} context
       */
      async nuxtClientInit(context) {
        context.commit("setFetchingState", true);
        const self = await context.dispatch("retrieveSelf");
        context.commit("setSelf", self);
        // Calculate dateFrom = current date - 1 month, dateTo = current date
        const DEFAULT_MONTH = 1;
        const DATE_FORMAT = "YYYY-MM-DD";
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
        context.commit("setFetchingState", false);
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
