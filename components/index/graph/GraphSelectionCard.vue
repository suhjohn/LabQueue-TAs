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
$card-min-width: 13rem;
$card-height: 8rem;
.card-title {
  color: $color-grey-dark;
  font-weight: 300;
  padding-bottom: 0.5rem;
}
.card-value {
  font-size: 1.8rem;
  color: $color-grey-darkest;
}

.card {
  text-align: left;
  height: $card-height;
  padding: 1.5rem;
  transition: background-color 0.2s;
  box-sizing: border-box;
  min-width: $card-min-width;

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

    & .card-value {
      font-size: 2.2rem;
    }
  }
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 968px) {
}
</style>


