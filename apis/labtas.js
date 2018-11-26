/* 
Retrieves information about LabTA self. 

  full_name: SerializerMethodField
  netid: Str
  puid: Str
  major: Str
  grad_year: Int
  type: ?
  picture: Str
  is_active: Bool

*/
// export async function retrieveSelf(context) {
//   try {
//     const requestParams = {
//       action: {
//         api_family: "lab_tas",
//         action_name: "get_self"
//       }
//     };
//     const self = await this.$axios.$get("/", requestParams);
//     context.commit("setSelf", self);
//     console.log(self);
//     return self;
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function retrieveSelf(context) {
  return {
    full_name: "John Suh",
    netid: "ssuh",
    puid: "960886217",
    major: "AB Computer Science",
    grad_year: 2020,
    type: "full",
    picture: "",
    is_active: true
  };
}
