<template>
    <div id="container">
        <div class="header">
            <h2 class="header-text">My Average Handle Time</h2>
        </div>
        <div class="handle-time">
            <h2 class="handle-time-text"></h2>
        </div>
    </div>    
</template>
<script>
import styles from "~/assets/scss/variables.scss";
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
  width: 60rem;
  height: 20rem;
  background-color: $color-crimson-main-dark;
  border-radius: $contained-box-m-radius;
  padding: 2rem;
  box-shadow: $contained-box-m-shadow;
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

@media (min-width: 930px) {
  #container {
    width: 30rem;
    height: 40rem;
    background-color: $color-crimson-main-dark;
    border-radius: $contained-box-m-radius;
    padding: 2rem;
    box-shadow: $contained-box-m-shadow;
  }
}
</style>


