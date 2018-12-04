export default function(context) {
  console.log("in middleware");
  console.log(context.store.getters.isAuthenticated);
  console.log(context.store.getters.isDemo);
  if (!context.store.getters.isAuthenticated && !context.store.getters.isDemo) {
    console.log("redirecting");
    context.redirect("/");
  }
}
