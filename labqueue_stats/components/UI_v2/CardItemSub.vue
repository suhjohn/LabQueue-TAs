<template>
  <div id="card-sub">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";

#card-sub {
  @include boxShadow-main;
  max-width: 30rem;
  min-height: 13rem;
}
</style>


