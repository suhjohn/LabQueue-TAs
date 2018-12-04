<template>
  <button @click="onClick" class="tab" :class="{'tab-selected':selected, 'tab-unselected':!selected}">
    <h1 class="tab-title">{{ title }}</h1>
    <h3 class="tab-value">{{ value }}</h3>
  </button>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    value: {},
    selected: {
      type: Boolean
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
@import "@/assets/scss/variables.scss";
$tab-min-width: 76.8rem / 2.5;
$tab-height: 8rem;
.tab-title {
  color: $color-grey-dark;
  font-weight: 300;
  padding-bottom: 0.5rem;
}
.tab-value {
  font-size: 1.6rem;
  font-weight: 500;
  color: $color-grey-darkest;
  word-break: break-all;
}

.tab {
  text-align: left;
  height: $tab-height;
  padding: 1rem;
  transition: background-color 0.2s;
  box-sizing: border-box;
  width: $tab-min-width;

  &-unselected {
    &:hover {
      background-color: $color-grey-light;
    }
    &:active {
      background-color: $color-crimson-main-light;
    }
  }

  &-selected {
    color: $color-grey-darkest;
    border-bottom: 5px solid $color-crimson-main;
  }
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 968px) {
}
</style>


