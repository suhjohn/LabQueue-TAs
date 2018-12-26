<template>
  <header>
    <h1 class="text-header">{{ text }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
