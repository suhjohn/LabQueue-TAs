/**
 * Query requests of the current TA by shift.
 *
 * Refer to Backend Documentation for the API Proxy for params
 *
 * @access     public
 *
 * @param {Object} context             Vuex context object
 * @param {String} params              Parameters for query
 * @param {String} params.dateFrom     Start date of the query
 * @param {String} params.dateTo       End date of the query
 * @return {null}
 */
import {
  groupBy
} from "@/utils.js";
import queryData from "@/assets/static/dummydata.json";

export async function queryRequests(context, params) {
  try {
    console.log("[queryRequests] execute")
    const requestParams = {
      accepted_after: params.dateFrom,
      accepted_before: params.dateTo
    };
    const requests = await this.$axios.$get(
      "/requests/" + params.netid + "/query",
      requestParams
    );
    console.log("[queryRequests] success")
    console.log(requests);
    return requests
  } catch (error) {
    console.log("[queryRequests] fail")
    console.log(error);
    throw error;
  }
}

/**
 * Temporary dummy query function
 */
export async function queryRequests_demo(context, params) {
  const dateFrom = params.dateFrom;
  const dateTo = params.dateTo;
  return queryData.filter(
    data => dateFrom < data.time_accepted && data.time_accepted < dateTo
  );
}
