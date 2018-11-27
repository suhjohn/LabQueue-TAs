<template>
    <div class="header-container">
        <h1 class="header-text">
            {{ headerText }}
        </h1>
    </div>
</template>
<script>
export default {
  props: {
    headerText: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.header-container {
  margin-bottom: 2rem;
}
.header-text {
  font-size: 2.4rem;
  color: $color-grey-darkest;
  font-weight: 700;
}
</style>


