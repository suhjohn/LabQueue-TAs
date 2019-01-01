<template>
  <header id="page-header-container">
    <h1 id="page-header-text">
      <slot name="header"></slot>
    </h1>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#page-header-container {
  padding-bottom: 1rem;
}
#page-header-text {
  font-weight: 800;
  font-size: 2.4rem;
}
</style>
