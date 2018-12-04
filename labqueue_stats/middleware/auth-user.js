export default function(context) {
  if (!context.store.getters.isAuthenticated && !context.store.getters.isDemo) {
    context.redirect("/");
  }
}
