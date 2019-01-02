<template>
  <section class="requests-detail">
    <div class="requests-detail-header">
      <h1 class="requests-detail-header-text">{{ author_full_name }} | {{ author_username }}</h1>
      <h4 class="requests-detail-header-subtext">Author Full Name: {{ author_full_name }}</h4>
      <h4 class="requests-detail-header-subtext">Author Username: {{ author_username }}</h4>
      <h4 class="requests-detail-header-subtext">Location: {{ location }}</h4>
      <h4 class="requests-detail-header-subtext">Course: {{ course }}</h4>
      <h4 class="requests-detail-header-subtext">Closer Username: {{ closer_username }}</h4>
      <h4 class="requests-detail-header-subtext">time created: {{ time_created }}</h4>
      <h4 class="requests-detail-header-subtext">time accepted: {{ time_accepted }}</h4>
      <h4 class="requests-detail-header-subtext">time closed: {{ time_closed }}</h4>
      <h4 class="requests-detail-header-subtext">Acceptor NetId: {{ acceptor_netid }}</h4>
    </div>
    <hr>
    <div class="requests-detail-body">{{ description }}</div>
  </section>
</template>
<script>
export default {
  props: {
    author_full_name: {
      type: String,
      default: ""
    },
    author_username: {
      type: String,
      default: ""
    },
    location: {
      type: String,
      default: "unknown"
    },
    course: {
      type: String,
      default: "unknown"
    },
    description: {
      type: String,
      default: ""
    },
    time_created: {
      type: String,
      default: ""
    },
    time_accepted: {
      type: String,
      default: ""
    },
    time_closed: {
      type: String,
      default: ""
    },
    acceptor_netid: {
      type: String,
      default: ""
    },
    closer_username: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";

.requests-detail {
  height: 100vh;
  padding: 5rem;
  &-header {
    &-text {
      font-size: 2.8rem;
      color: $color-grey-darkest;
      padding-bottom: 1.5rem;
    }
    &-subtext {
      @include text-small;
      color: $color-grey-dark;
      font-weight: 300;
      padding-bottom: $margin-x-small;
    }
  }
  &-body {
    @include text-x-small;
    font-weight: 300;
    color: $color-grey-dark;
  }
}
hr {
  margin: 2rem 0;
}
</style>


