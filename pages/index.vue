<template>
  <section>
    <div class="module-list">
      <h4 class="module-list-row-header">
        How am I doing in my shifts?
      </h4>
      <ul class="module-list-row">
        <li class="module-list-row-item">
          <GraphShiftTotalCount/>
        </li>
      </ul>
  
      <h4 class="module-list-row-header">
        How am I doing with each request?
      </h4>
      <ul class="module-list-row">
        <li class="module-list-row-item">
          <GraphRequestPDFMinPerReq/>
        </li>
        <li class="module-list-row-item">
          <ShiftAverageHandleTime/>
        </li>
      </ul>
    </div>
  
    <h4 class="module-list-row-header">
      What are my students like?
    </h4>
    <ul class="module-list-row">
      <li class="module-list-row-item">
        <StudentCourseFilter/>
      </li>
      <li class="module-list-row-item">
        <StudentMajorFilter/>
      </li>
    </ul>
  
  </section>
</template>

<script>
import GraphShiftTotalCount from "~/components/GraphShiftTotalCount";
import ShiftAverageHandleTime from "~/components/ShiftAverageHandleTime";
import GraphRequestPDFMinPerReq from "~/components/GraphRequestPDFMinPerReq";
import StudentCourseFilter from "~/components/StudentCourseFilter";
import StudentMajorFilter from "~/components/StudentMajorFilter";

export default {
  components: {
    GraphShiftTotalCount,
    ShiftAverageHandleTime,
    GraphRequestPDFMinPerReq,
    StudentCourseFilter,
    StudentMajorFilter
  },
  data() {
    return {
      dropDownName: "",
      dropDownList: []
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/grid.scss";

.module-list {
  &-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3rem;
    &-header {
      line-height: 4rem;
      color: $color-grey-dark;
      font-weight: 700;
      font-size: 1.6rem;
    }
    &-item {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
}

// @media only screen and (min-width: 930px) {
//   .module-list {
//     &-row {
//       display: flex;
//       flex-wrap: nowrap;
//       justify-content: space-between;
//       margin-bottom: 3rem;
//       &-header {
//         line-height: 4rem;
//         color: $color-grey-dark;
//         font-weight: 700;
//         font-size: 1.6rem;
//       }
//       &-item {
//         margin-right: 2rem;
//         width: auto;
//       }
//     }
//   }
// }

@media only screen and (min-width: 1270px) {
  .module-list {
    &-row {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      margin-bottom: 3rem;
      &-header {
        line-height: 4rem;
        color: $color-grey-dark;
        font-weight: 700;
        font-size: 1.6rem;
      }
      &-item {
        margin-right: 2rem;
        width: auto;
      }
    }
  }
}
</style>

