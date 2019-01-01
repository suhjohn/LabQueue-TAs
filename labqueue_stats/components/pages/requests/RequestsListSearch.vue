<template>
  <div id="requests-list-search">
    <input
      id="requests-list-search-input"
      placeholder="Type and press enter to search for a username..."
      type="text"
      v-model="query"
    >
    <ButtonText width="5" height="3">
      <template slot="text">
        <i class="fas fa-search"></i>
      </template>
    </ButtonText>
  </div>
</template>
<script>
import ButtonText from "@/components/UI/ButtonText";
export default {
  components: {
    ButtonText
  },
  data() {
    return {
      query: undefined
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#requests-list-search {
  width: 100%;
  display: flex;
}
#requests-list-search-input {
  @include text-small;
  width: 100%;
}
</style>

