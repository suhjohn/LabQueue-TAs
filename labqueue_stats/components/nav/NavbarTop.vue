<template>
  <nav>
    <ul>
      <nuxt-link tag="li" id="logo" to="/">
        <img class="logo-img" src="~/assets/static/Logo.svg">
      </nuxt-link>

      <li class="navbar-options-sub-option">
        <a
          class="navbar-options-sub-option-text"
          href="https://www.labqueue.io/queue/"
        >Back to Queue</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
</style>

