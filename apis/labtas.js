/* 
Gets the list of LabTAs. Save the result to the state. 
*/
export async function getLabTAList(context) {
  try {
    const labTAs = await this.$axios.$get("/labtas/");
    context.commit("setLabTAs", labTAs);
    return labTAs;
  } catch (error) {
    console.log(error);
  }
}

/* 
Queries LabTAs based on the params. Save the result to the state. 
*/
export async function queryLabTAList(context, params) {
  try {
    const kwargs = {
      params: params
    };
    const queriedLabTAs = await this.$axios.$get("/labtas/query", kwargs);
    context.commit("setLabTAs", queriedLabTAs);
    return queriedLabTAs;
  } catch (error) {
    console.log(error);
  }
}
