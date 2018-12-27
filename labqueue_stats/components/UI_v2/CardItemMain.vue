<template>
  <div class="u-margin-small-bottom" :class="[widthClass, heightClass]" id="card-main">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "medium"
    },
    height: {
      type: String,
      default: "medium"
    }
  },
  computed: {
    widthClass() {
      return "card-main-width-" + this.width;
    },
    heightClass() {
      return "card-main-height-" + this.height;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#card-main {
  @include boxShadow-main;
  @include roundBorder;
}
//width
.card-main-width-small {
  width: 50%;
  flex-grow: 0;

  @include respond(laptop) {
    flex-grow: initial;
    width: 30rem;
  }
}

.card-main-width-medium {
  width: 100%;
  flex-grow: 1;

  @include respond(laptop) {
    flex-grow: initial;
    width: 60rem;
  }
}
// Height
.card-main-height-small {
  height: 10rem;
}
.card-main-height-medium {
  height: 45rem;
}
</style>


