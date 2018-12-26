<template>
  <div>
    <DemoNavbarTop/>
    <DemoNavbarSide/>
    <DemoNavbarBottom/>
    <nuxt/>
  </div>
</template>

<script>
import DemoNavbarSide from "@/components/nav/DemoNavbarSide";
import DemoNavbarTop from "@/components/nav/DemoNavbarTop";
import DemoNavbarBottom from "@/components/nav/DemoNavbarBottom";

export default {
  components: {
    DemoNavbarSide,
    DemoNavbarTop,
    DemoNavbarBottom
  }
};
</script>

<style lang="scss">
</style>

