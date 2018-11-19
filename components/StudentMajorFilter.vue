<template>
    <div id="container">
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
$header-height: 5rem;
$container-width: 45rem;
$container-height: 40rem;
$container-padding: 2rem;

#container {
  width: $container-width;
  height: $container-height;
  border-radius: 5px;
  border: 1px solid $color-grey-light;
  padding: $container-padding;
  background-color: $color-white;
  box-shadow: 0 3px 6px $color-grey, 0 3px 6px $color-grey;
}
</style>

