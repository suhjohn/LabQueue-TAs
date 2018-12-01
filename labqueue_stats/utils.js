/**
 * Group an array objects by the provided key.
 * https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-a-array-of-objects
 *
 *
 */
export function groupBy(arr, key) {
  return arr.reduce(function(accumulated, item) {
    (accumulated[item[key]] = accumulated[item[key]] || []).push(item);
    return accumulated;
  }, {});
}
