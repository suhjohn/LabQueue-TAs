/*
Query requests of the current TA by shift.

Expected Response Format: 
{
    "F18": [
        <shift_obj: obj>, 
        <shift_obj: obj>, 
        <shift_obj: obj>, 
        <shift_obj: obj>
        ],
    },
    "S18": [
        <shift_obj:obj>,
        ...
    ],
    ...
}
*/
import { groupBy } from "@/utils.js";
export async function querySelfRequestsBySemester(context, params) {
  try {
    const requestParams = {
      action: {
        api_family: "requests",
        action_name: "query_self",
        parameters: { group_by: "semester", count: params.semesterCount }
      }
    };
    const queriedSelfRequests = await this.$axios.$get("/", requestParams);
    // Group the requests by the accepted day to
    const DATETIMEDELIMITER = "T";
    formatRequests(queriedSelfRequests, DATETIMEDELIMITER);
    context.dispatch("setSelfShiftRequests", queriedSelfRequests);
    return queriedSelfRequests;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

/**
 * Takes the queried self's requests as parameter.
 * Groups each semester's request by time_accepted's date
 * (time_accepted's format: "yyyy-mm-ddTmm:ss"), and assigns the
 * shift number in order of the date.
 *
 * @access     private
 *
 * @param {Object} queriedSelfRequests API response from query
 * @param {String} datetimeDelimiter   Delimiter for Python's datetime type
 */
function formatRequests(queriedSelfRequests, datetimeDelimiter) {
  const queriedSelfRequestSemesters = Object.keys(queriedSelfRequests);
  queriedSelfRequestSemesters.forEach(semester => {
    const semesterRequests = queriedSelfRequests[semester];
    // group the requests by their accepted day
    for (let i = 0; i < semesterRequests.length; i++) {
      semesterRequests[i]["time_accepted_day"] = semesterRequests[i][
        "time_accepted"
      ].split(datetimeDelimiter)[0];
    }
    const groupedReqs = groupBy(semesterRequests, "time_accepted_day");

    // replace the dates by their relative order to represent shift #
    const shifts = Object.keys(groupedReqs);
    const shiftGroupedReqs = {};
    shifts.sort();
    shifts.forEach((shift, index) => {
      shiftGroupedReqs[index + 1] = groupedReqs[shift];
    });
    queriedSelfRequests[semester] = shiftGroupedReqs;
  });
}
