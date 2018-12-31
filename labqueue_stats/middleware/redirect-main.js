/**
 * Redirects to main index if authenticated
 * @param {*} context 
 */
export default async function (context) {
  console.log("[redirect-main] executed")
  if (context.store.getters.isAuthenticated) {
    context.redirect(301, "/")
  }
}
