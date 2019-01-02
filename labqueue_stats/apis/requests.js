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
import queryData from "@/assets/static/dummydata.json";

export async function queryRequests(context, params) {
  try {
    // console.log("[queryRequests] execute")
    const requestParams = createQuery(params);
    const requests = await this.$axios.$get(
      "/requests/" + params.netid + "/query",
      requestParams
    );
    // console.log("[queryRequests] success")
    return requests
  } catch (error) {
    // console.log("[queryRequests] fail")
    // console.log(error);
    throw error;
  }
}

export async function querySelfRequests(context, params) {
  try {
    let response;
    let results = [];
    const requestParams = createQuery(params);
    // console.log("[querySelfRequests] execute")
    response = await this.$axios.$get(
      "labtas/self/requests/query",
      requestParams
    );
    response.results.forEach(item => {
      results.push(item);
    })
    // console.log("[queryRequests] success")
    while (response.next) {
      // console.log("[querySelfRequests] execute")
      let response = await this.$axios.$get(response.next);
      response.results.forEach(item => {
        results.push(item);
      })
      // console.log("[queryRequests] success")
      // console.log(response);
    }
    return results
  } catch (error) {
    // console.log("[querySelfRequests] fail")
    // console.log(error);
    throw error;
  }
}

/**
 * Temporary dummy query function
 */
export async function queryRequests_demo(context, params) {
  console.log("[queryRequests_demo] execute")
  const dateFrom = params.accepted_after;
  const dateTo = params.accepted_before;
  const author = params.author;
  let requests = queryData;
  console.log(params)
  if (dateFrom && dateTo) {
    requests = requests.filter(
      data => dateFrom < data.time_accepted && data.time_accepted < dateTo
    );
  }
  if (author) {
    requests = requests.filter(
      request => {
        return author === request.author_username
      }
    )
  }
  // console.log("[queryRequests_demo] success")
  // console.log(requests.length)
  return requests;
}

/**
 * Creates the query parameteres to attach to the API. 
 * 
 * @param {Object} params   Parameters to pass for request query
 */
function createQuery(params) {
  const requestParams = {};
  if (params['is_open']) {
    requestParams['is_open'] = params.is_open
  }
  if (params['author']) {
    requestParams['author'] = params.author
  }
  if (params['author_full_name']) {
    requestParams['author_full_name'] = params.author_full_name
  }
  if (params['course']) {
    requestParams['course'] = params.course
  }
  if (params['description']) {
    requestParams['description'] = params.description
  }
  if (params['accepted_by']) {
    requestParams['accepted_by'] = params.accepted_by
  }
  if (params['closed_by']) {
    requestParams['closed_by'] = params.closed_by
  }
  if (params['accepted_before']) {
    requestParams['accepted_before'] = params.accepted_before
  }
  if (params['accepted_after']) {
    requestParams['accepted_after'] = params.accepted_after
  }
  return requestParams
}
