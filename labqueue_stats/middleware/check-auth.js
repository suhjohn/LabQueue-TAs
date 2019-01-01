export default async function (context) {
  // console.log("[check-auth] executed")
  if (!context.store.getters.isAuthenticated) {
    try {
      await context.store.dispatch("setSelf");
    } catch (error) {
      context.redirect({
        name: "login"
      });
    }
  }
}
