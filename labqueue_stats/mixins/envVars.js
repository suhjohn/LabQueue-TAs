export const envVars = {
  /**
   * datasets represents a chart.js format datasets.
   * Returns a value that makes the current max being its 80%.
   */
  computed: {
    labqueueLoginURL() {
      return process.env.labqueueLoginURL;
    },
    labqueueLogoutURL() {
      return process.env.labqueueLogoutURL;
    },
    labqueueBaseURL() {
      return process.env.labqueueBaseURL;
    }
  }
};
