<template>
  <header>
    <h1 class="text-header">
      <slot name="header"></slot>
    </h1>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.text-header {
  font-weight: 800;
  font-size: 2.4rem;
}
</style>
