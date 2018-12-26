<template>
  <div :class="[widthClass]" id="card-main">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "small"
    }
  },
  computed: {
    widthClass() {
      return "card-main-width-" + this.width;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";

.card-main-width-small {
  width: 30rem;
}
.card-main-width-medium {
  width: 60rem;
}
#card-main {
  @include boxShadow-main;
  height: 45rem;
}
</style>


