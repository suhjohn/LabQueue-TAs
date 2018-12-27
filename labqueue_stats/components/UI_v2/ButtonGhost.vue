<template>
  <button
    id="button-ghost"
    :class="{hover:'button-hover'}"
    :style="{'width': width + 'rem', 'height': height + 'rem', 'line-height': height + 'rem'}"
  >
    <span :class="['text-' + fontSize]">
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
    width: {
      type: Number,
      default: 12
    },
    height: {
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


