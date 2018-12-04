<template>
  <section class="requests-detail">
    <div class="requests-detail-header">
      <h1 class="requests-detail-header-text"> {{ authorFullname }} | {{ authorUsername }}</h1>
      <h2 class="requests-detail-header-subtext">Location:  {{ location }} </h2>
      <h4 class="requests-detail-header-subsubtext">Course:  {{ course }} </h4>
      <h4 class="requests-detail-header-subsubtext">Closer Username:  {{ closerUsername }} </h4>
      <h4 class="requests-detail-header-subsubtext">time created:  {{ timeCreated }} </h4>
      <h4 class="requests-detail-header-subsubtext">time accepted:  {{ timeAccepted }} </h4>
      <h4 class="requests-detail-header-subsubtext">time closed:  {{ timeClosed }} </h4>
      <h4 class="requests-detail-header-subsubtext">Acceptor NetId:  {{ acceptorNetId }} </h4>
    </div>
    <hr>
    <div class="requests-detail-body">
      {{ description }}
    </div>
  </section>
</template>
<script>
export default {
  props: {
    authorFullname: {
      type: String
    },
    authorUsername: {
      type: String
    },
    location: {
      type: String,
      default: "room 123"
    },
    course: {
      type: String
    },
    description: {
      type: String
    },
    timeCreated: {
      type: String
    },
    timeAccepted: {
      type: String
    },
    timeClosed: {
      type: String
    },
    acceptorNetId: {
      type: String,
      default: "ssuh"
    },
    closerUsername: {
      type: String,
      default: "ssuh"
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.requests-detail {
  height: 100vh;
  padding: 5rem;
  &-header{
    &-text{
      font-size: 2.8rem;
      color: $color-grey-darkest;
      padding-bottom: 1.5rem;
    }
    &-subtext{
      font-size: 1.8rem;
      color: $color-grey-dark;
      font-weight: 300;
      padding-bottom: 1rem;
    }
    &-subsubtext{
      font-size: 1.8rem;
      color: $color-grey-dark;
      font-weight: 300;
      padding-bottom: 1rem;
    }
  }
  &-body{
    font-weight: 400;
    font-size: 1.4rem;
  }
}
hr{
  margin: 2rem 0;
}
@media only screen and (min-width: 1200px) {

}

</style>


