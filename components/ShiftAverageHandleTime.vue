<template>
    <div id="container">
        <div class="header">
            <h2 class="header-text">My Average Handle Time</h2>
        </div>
        <div class="handle-time">
            <h2 class="handle-time-text">{{ getShiftAverageHandleTime }}</h2>
        </div>
    </div>    
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getShiftAverageHandleTime"])
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
#container {
  width: 30rem;
  height: 40rem;
  background-color: $color-crimson-main-dark;
  border-radius: 5px;
  padding: 2rem;
  box-shadow: 0 3px 6px $color-grey, 0 3px 6px $color-grey;
}
.header {
  padding: 1rem 0;
  &-text {
    color: $color-white;
    font-weight: 200;
    font-size: 1.4rem;
  }
}
.handle-time {
  &-text {
    color: $color-white;
    font-weight: 100;
    font-size: 3rem;
  }
}
</style>


