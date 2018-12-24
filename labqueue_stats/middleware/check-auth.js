export default async function (context) {
  if (!context.store.getters.isAuthenticated) {
    try {
      const self = await context.store.dispatch("retrieveSelf");
      console.log(self);
    } catch (error) {
      context.redirect({
        name: "login"
      });
    }
  }
}
