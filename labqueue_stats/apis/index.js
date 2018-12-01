import * as labtaAPIs from "./labtas";
import * as requestAPIs from "./requests";
import * as queueAPIs from "./queue";

export default {
  ...labtaAPIs,
  ...requestAPIs,
  ...queueAPIs
};
