import moment from "moment";
import {
  API_TIME_FORMAT,
  DATE_FORMAT,
  BUGGY_REQUEST_FILTER_LIMIT
} from "@/constants.js";

/**
 * Group an array objects by the provided key.
 * https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-a-array-of-objects
 *
 *
 */
export function groupBy(arr, key) {
  return arr.reduce(function (accumulated, item) {
    (accumulated[item[key]] = accumulated[item[key]] || []).push(item);
    return accumulated;
  }, {});
}

export function dateToString(date, format) {
  return moment(date).format(format)
}

/**
 * Filters requests to select proper requests only
 * @param {Array} requests 
 */
export function filter_requests(requests) {
  const limit_duration = moment.duration(
    BUGGY_REQUEST_FILTER_LIMIT,
    "minutes"
  );

  let selfRequests = requests.map(request => {
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

  selfRequests.sort((a, b) => {
    let base = moment(a.time_accepted);
    let comp = moment(b.time_closed);
    return base.diff(comp);
  });
  return selfRequests
}
/**
 * Filters shifts from the given requests
 * @param {Array} requests 
 */
export function filter_shifts(requests) {
  let shifts = requests.map(request => {
    return moment(request.time_accepted).format(DATE_FORMAT);
  });
  shifts = [...new Set(shifts)];
  shifts.sort();
  return shifts
}

export function getShiftRequests(requests) {
  const selfRequests = filter_requests(requests);
  const selfShifts = filter_shifts(requests);

  // {shift: [request, request,...], shift2: [request, request,...]}
  let shiftRequests = {};
  selfShifts.forEach(shift => {
    shiftRequests[shift] = [];
  });
  selfRequests.forEach(request => {
    const request_shift = moment(request.time_accepted).format(
      DATE_FORMAT
    );
    shiftRequests[request_shift].push(request);
  });
  return shiftRequests
}
