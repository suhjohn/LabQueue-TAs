<template>
  <button id="graph-select-tab" :class="{'graph-select-tab-selected': selected}" @click="onClick">
    <h1
      class="text-main-small"
      id="graph-select-tab-name"
      :class="{'graph-select-tab-name-selected': selected}"
    >{{ name }}</h1>
    <p
      class="text-x-large"
      id="graph-select-tab-value"
      :class="{'graph-select-tab-value-selected': selected}"
    >{{value}}</p>
    <p
      class="text-x-small"
      id="graph-select-tab-name"
      :class="{'graph-select-tab-value-selected': selected}"
    >{{ valueUnit }}</p>
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
    valueUnit: {
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
      this.$emit("select", this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#graph-select-tab {
  width: 18rem;
  height: 12rem;
  &:hover {
    @include backgroundColor-light;
  }
  @include respond(laptop) {
    width: 12rem;
  }
}

#graph-select-tab-name {
  font-weight: 300;
}

#graph-select-tab-value {
  width: 10rem;
  margin: 0 auto;
}
// Tab Select
.graph-select-tab-selected {
  border-top: 5px solid $color-crimson-main;
}
.graph-select-tab-name-selected {
  @include selectedWeight;
}
.graph-select-tab-value-selected {
  @include selectedWeightStrong;
}
</style>


