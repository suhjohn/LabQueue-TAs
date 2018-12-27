<template>
  <button id="graph-select-tab" :class="{'graph-select-tab-selected': selected}" @click="onClick">
    <h1
      class="text-main-small"
      id="graph-select-tab-name"
      :class="{'graph-select-tab-name-selected': selected}"
    >{{ name }}</h1>
    <p class="text-x-small">{{value}}</p>
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    value: {
      type: String
    },
    selected: {
      type: Boolean
    },
    index: {
      type: Number
    }
  },
  methods: {
    onClick() {
      this.$emit("select", this.index);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#graph-select-tab {
  width: 12rem;
  height: 12rem;
  &:hover {
    @include backgroundColor-light;
  }
}
#graph-select-tab-name {
  font-weight: 300;
}

.graph-select-tab-selected {
  border-top: 5px solid $color-crimson-main;
}
.graph-select-tab-name-selected {
  font-weight: 700 !important;
}
</style>


