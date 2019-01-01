/**
 * Redirects to main index if authenticated
 * @param {*} context 
 */
export default async function (context) {
  // console.log("[redirect-main] executed")
  if (context.store.getters.isAuthenticated) {
    // console.log("[created] authenticated");
    context.redirect({
      name: "dashboard"
    });
  } else {
    // console.log("[created] unauthenticated");
    try {
      // console.log("[created] trying setSelf...");
      await context.store.dispatch("setSelf");
      // console.log("[created] setSelf success");
      context.redirect({
        name: "dashboard"
      });
    } catch (error) {
      // console.log("[created] setSelf fail");
    }
  }
}
