// export const fetchOrFilter = {
//   async fetch(context) {
//     // Search and set it to requests
//     if (Object.keys(context.query).length > 0) {
//       const searchQuery = context.query.search;
//       const query = {
//         author: searchQuery
//       };
//       const requests = await context.store.dispatch(
//         "queryRequests_demo",
//         query
//       );
//       context.store.commit("setRequests", {
//         page: "requests",
//         requests: requests
//       });
//       return
//     }
//     if (context.store.getters.getRequests("requests")) {
//       return;
//     }
//     const query = {
//       accepted_before: dateToString(INITIAL_DATE_TO, DATE_FORMAT),
//       accepted_after: "2016-01-01"
//     };
//     const requests = await context.store.dispatch("queryRequests_demo", query);
//     context.store.commit("setRequests", {
//       page: "requests",
//       requests: requests
//     });
//   }
// };
