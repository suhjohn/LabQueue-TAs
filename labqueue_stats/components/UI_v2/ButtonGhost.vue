<template>
  <button
    id="button-ghost"
    :class="{hover:'button-hover'}"
    :style="{'min-width': minWidth + 'rem', 'min-height': minHeight + 'rem' }"
  >
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
    minWidth: {
      type: Number,
      default: 12
    },
    minHeight: {
      type: Number,
      default: 6
    },
    hover: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#button-ghost {
  box-sizing: border-box;
  border: 0.5px solid $color-crimson-main;
  color: $color-crimson-main;
}

.button-hover {
  &:hover {
    background-color: $color-crimson-main;
    color: $color-white;
    cursor: pointer;
  }
}
</style>


