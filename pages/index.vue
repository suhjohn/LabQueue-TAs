<template>
  <section>
    <div class="module-list">
      <h4 class="module-list-row-header">
        Quick look at Shifts
      </h4>
      <ul class="module-list-row">
        <li class="module-list-row-item">
          <GraphShiftTotalCount/>
        </li>
      </ul>
  
      <h4 class="module-list-row-header">
        Quick look at Requests
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
  </section>
</template>

<script>
import GraphShiftTotalCount from "~/components/GraphShiftTotalCount";
import ShiftAverageHandleTime from "~/components/ShiftAverageHandleTime";
import GraphRequestPDFMinPerReq from "~/components/GraphRequestPDFMinPerReq";

export default {
  components: {
    GraphShiftTotalCount,
    ShiftAverageHandleTime,
    GraphRequestPDFMinPerReq
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

