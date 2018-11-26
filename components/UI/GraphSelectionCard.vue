<template>
    <li @click="onClick" class="card" :class="{'card-selected':selected}">
        <h1 class="card-title">{{ title }}</h1>
        <h3 class="card-value">{{ value }}</h3>
    </li>    
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    value: {},
    selected:{
        type: Boolean
    }
  },
  methods:{
    onClick() {
    	this.$emit('click')
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
$card-width: 30rem;
$card-height: 12rem;
.card {
  width: $card-width;
  height: $card-height;
  padding: 1.5rem;
  border: 0.5px solid $color-grey;
  border-radius: 1rem;
  &-selected{
      border: 0.5px solid $color-crimson-main;
  }
}
.card-title {
  color: $color-grey-dark;
}
.card-value {
  font-size: 1.8rem;
  color: $color-grey-darkest;
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 968px) {
}
</style>


