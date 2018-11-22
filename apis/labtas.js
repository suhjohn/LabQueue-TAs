/* 
Retrieves information about LabTA self. 
*/
export async function retrieveSelf(context) {
  try {
    const requestParams = {
      action: {
        api_family: "lab_tas",
        action_name: "get_self"
      }
    };
    const self = await this.$axios.$get("/", requestParams);
    context.commit("setSelf", self);
    console.log(self);
    return self;
  } catch (error) {
    console.log(error);
  }
}
