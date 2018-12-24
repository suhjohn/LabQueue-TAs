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
    console.log("execute retrieveSelf");
    const self = await this.$axios.$get("/labtas/self/");
    console.log(self);
    context.commit("setSelf", self);
    return self;
  } catch (error) {
    console.log("error in retrieveSelf");
    console.log(error);
    throw error;
  }
}

export async function retrieveSelf_demo(context) {
  return {
    full_name: "Demo User",
    netid: "demouser",
    puid: "123456789",
    major: "AB Computer Science",
    grad_year: 2020,
    type: "full",
    picture: "",
    is_active: true
  };
}
