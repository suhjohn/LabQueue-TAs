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

// width
.card-main-width-small {
  @include col-1-of-2;
}

.card-main-width-medium {
  width: 100%;
}

// Height
.card-main-height-small {
  height: 10rem;
}
.card-main-height-medium {
  height: 50rem;
}
</style>


