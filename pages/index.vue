<template>
  <section>
    <div id="title-main">
      <h1 id="title-main-text">LabQueue Statistics</h1>
    </div>
    <div class="module-list">
      <h4 class="module-list-row-header">
        How am I doing in my shifts?
      </h4>
      <ul class="module-list-row">
        <li class="module-list-row-item">
          <ShiftTotalNumber/>
        </li>
      </ul>
  
      <h4 class="module-list-row-header">
        How am I doing with each request?
      </h4>
      <ul class="module-list-row">
        <li class="module-list-row-item">
          <RequestPDFMinPerReq/>
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
import ShiftTotalNumber from "~/components/ShiftTotalNumber";
import ShiftAverageHandleTime from "~/components/ShiftAverageHandleTime";
import RequestPDFMinPerReq from "~/components/RequestPDFMinPerReq";
import StudentCourseFilter from "~/components/StudentCourseFilter";
import StudentMajorFilter from "~/components/StudentMajorFilter";

export default {
  components: {
    ShiftTotalNumber,
    ShiftAverageHandleTime,
    RequestPDFMinPerReq,
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
#title-main-text {
  font-weight: 700;
  font-size: 3.6rem;
  color: $color-black;
}

#title-main {
  padding-bottom: 3rem;
}

.module-list {
  > :not(:last-child) {
    margin-bottom: 2rem;
  }
  &-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 4rem;
    &-header {
      line-height: 4rem;
      color: $color-grey-dark;
      font-weight: 700;
      font-size: 1.6rem;
    }
    &-item {
      margin-bottom: 2rem;
      width: 100%;
    }
  }
}

@media only screen and (min-width: 930px) {
  #title-main-text {
    font-size: 2.4rem;
  }
  #title-main {
    padding: 0;
  }
  .module-list {
    > :not(:last-child) {
      margin-bottom: 0;
      margin-right: 4rem;
    }
    &-row {
      display: flex;
      flex-wrap: nowrap;
      justify-content: initial;
      margin-bottom: 0;
      > :not(:last-child) {
        margin-right: 4rem;
      }
      &-header {
        line-height: 4rem;
        color: $color-grey;
        font-weight: 400;
        font-size: 1.4rem;
      }
    }
  }
}
</style>

