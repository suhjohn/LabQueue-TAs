<template>
  <button id="button-text" :style="{'min-width': _minWidth, 'min-height': minHeight + 'rem' }">
    <span :class="['text-' + fontSize, 'color-text-' + fontColor]">{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    fontSize: {
      type: String,
      default: "small"
    },
    fontColor: {
      type: String
    },
    minWidth: {
      type: Number,
      default: 12
    },
    minHeight: {
      type: Number,
      default: 6
    }
  },
  computed: {
    _minWidth() {
      if (this.minWidth === -1) {
        return 100 + "%";
      } else {
        return this.minWidth + "rem";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#button-text {
  box-sizing: border-box;
  &:hover {
    text-decoration-line: underline;
  }
}
</style>


