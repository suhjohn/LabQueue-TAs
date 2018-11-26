<template>
    <div clsas="card">
        
    </div>    
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    value: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
$card-width: 30rem;
$card-height: 12rem;
.card {
  width: $card-height;
  height: $card-height;
}
</style>


