/**
 * Redirects to main index if authenticated
 * @param {*} context 
 */
export default async function (context) {
  if (context.store.getters.isAuthenticated) {
    context.redirect({
      name: "index"
    });
  }
}
