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
export async function retrieveSelf(context) {
  try {
    console.log("[retrieveSelf] execute");
    const self = await this.$axios.$get("/labtas/self/");
    console.log("[retrieveSelf] success");
    context.commit("setSelf", self);
    return self;
  } catch (error) {
    console.log("[retrieveSelf] error");
    console.log(error);
    throw error;
  }
}
