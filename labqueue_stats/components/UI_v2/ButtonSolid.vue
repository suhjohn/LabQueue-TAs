<template>
  <button id="button-solid" :style="{'min-width': width + 'rem', 'min-height': height + 'rem' }">
    <span :class="fontSizeClass">{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    fontSizeClass: {
      type: String,
      default: "text-small"
    },
    width: {
      type: Number,
      default: 12
    },
    height: {
      type: Number,
      default: 6
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#button-solid {
  box-sizing: border-box;
  color: $color-white;
  background-color: $color-crimson-main;
}
</style>


