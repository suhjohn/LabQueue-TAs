export const navigationItems = {
  data() {
    let dashboardURLName;
    let profileURLName;
    let requestsURLName;
    if (this.isDemo) {
      profileURLName = "demo-profile";
      dashboardURLName = "demo-dashboard";
      requestsURLName = "demo-requests";
    } else {
      profileURLName = "profile";
      dashboardURLName = "dashboard";
      requestsURLName = "requests";
    }
    return {
      navItems: [{
          icon: "user-alt",
          text: "Profile",
          relativeURL: {
            name: profileURLName
          }
        },
        {
          icon: "chart-line",
          text: "Dashboard",
          relativeURL: {
            name: dashboardURLName
          }
        },
        {
          icon: "clipboard-list",
          text: "Requests",
          relativeURL: {
            name: requestsURLName
          }
        }
      ]
    };
  }
}
