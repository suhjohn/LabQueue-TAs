<template>
  <section id="page-container">
    <div id="title-main">
      <h1 id="title-main-text">LabQueue Statistics</h1>
    </div>
    <div class="module-list">
      <!-- 
          
         -->
      <div class="module-list-row">
        <div class="module-list-row-header">ƒ
          <h4 class="module-list-row-header-text">
            How am I doing in my shifts?
          </h4>
        </div>
        <ul class="module-list-row-list">
          <li class="module-list-row-list-item">
            <ShiftTotalNumber/>
          </li>
        </ul>
  
      </div>
      <!-- 
          
         -->
      <div class="module-list-row">
        <div class="module-list-row-header">
          <h4 class="module-list-row-header-text">
            How am I doing with each request?
          </h4>
        </div>
        <ul class="module-list-row-list">
          <li class="module-list-item">
            <RequestPDFMinPerReq/>
          </li>
          <li class="module-list-row-item">
            <ShiftAverageHandleTime/>
          </li>
        </ul>
      </div>
    </div>
    <!-- 
          
         -->
    <div class="module-list-row">
      <div class="module-list-row-header">
        <h4 class="module-list-row-header-text">
          What are my students like?
        </h4>
      </div>
      <ul class="module-list-row-list">
        <li class="module-list-item">
          <StudentCourseFilter/>
        </li>
        <li class="module-list-row-item">
          <StudentMajorFilter/>
        </li>
      </ul>
    </div>
  
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
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
#page-container {
  margin-top: 2rem;
  margin-left: 2rem;
  margin-bottom: 10rem;
}

#title-main {
}

#title-main-text {
  font-weight: 400;
  font-size: 2.4rem;
}

.module-list {
  display: flex;
  flex-wrap: wrap;
  > :not(:last-child) {
    margin-bottom: 4rem;
    margin-right: 4rem;
  }
  &-row-header {
    line-height: 4rem;
    &-text {
      font-weight: 300;
      font-size: 1.6rem;
    }
  }
  &-row-list {
    display: flex;
    > :not(:last-child) {
      margin-bottom: 4rem;
      margin-right: 4rem;
    }
  }
}
</style>

