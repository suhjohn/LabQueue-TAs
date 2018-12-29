import moment from 'moment';

const defaultDateRange = {
  value: 2,
  unit: "months"
};
export const DATE_FORMAT = "YYYY-MM-DD";
export const API_TIME_FORMAT = "YYYY-MM-DDTHH:mm";
/* Represents a filter on requests that took too long which means that it was probably just open for too long */
export const BUGGY_REQUEST_FILTER_LIMIT = 60; // min
export const INITIAL_DATE_FROM = moment()
  .subtract(defaultDateRange.value, defaultDateRange.unit)
  .startOf("day")
  .toDate();
export const INITIAL_DATE_TO = moment()
  .startOf("day")
  .toDate();
