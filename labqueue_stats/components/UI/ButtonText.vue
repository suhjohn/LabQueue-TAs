<template>
  <button id="button-text" :style="{'width': _width, 'height': height + 'rem' }" @click="onClick">
    <span :class="['text-' + fontSize, 'color-text-' + fontColor]">
      <slot name="text"></slot>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    fontSize: {
      type: String,
      default: "small"
    },
    fontColor: {
      type: String
    },
    width: {
      type: Number,
      default: 12
    },
    height: {
      type: Number,
      default: 6
    }
  },
  computed: {
    _width() {
      if (this.width === -1) {
        return 100 + "%";
      } else {
        return this.width + "rem";
      }
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
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


