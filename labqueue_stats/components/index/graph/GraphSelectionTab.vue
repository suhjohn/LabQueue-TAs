<template>
  <button @click="onClick" class="card" :class="{'card-selected':selected, 'card-unselected':!selected}">
    <h1 class="card-title">{{ title }}</h1>
    <h3 class="card-value">{{ value }}</h3>
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
$card-min-width: 20rem;
$card-height: 8rem;
.card-title {
  color: $color-grey-dark;
  font-weight: 300;
  padding-bottom: 0.5rem;
}
.card-value {
  font-size: 1.6rem;
  color: $color-grey-darkest;
  word-break: break-all;
}

.card {
  text-align: left;
  height: $card-height;
  padding: 1.5rem;
  transition: background-color 0.2s;
  box-sizing: border-box;
  width: 100%;

  &-unselected {
    padding-bottom: 2rem;

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
  .card {
    width: $card-min-width;
  }
}

@media only screen and (min-width: 968px) {
}
</style>


