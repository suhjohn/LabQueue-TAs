<template>
  <section class="requests-detail">
    <div class="requests-detail-header">
      <h1 class="requests-detail-header-text">{{ author_full_name }} | {{ author_username }}</h1>
      <h2 class="requests-detail-header-subtext">Location: {{ location }}</h2>
      <h4 class="requests-detail-header-subsubtext">Course: {{ course }}</h4>
      <h4 class="requests-detail-header-subsubtext">Closer Username: {{ closer_username }}</h4>
      <h4 class="requests-detail-header-subsubtext">time created: {{ time_created }}</h4>
      <h4 class="requests-detail-header-subsubtext">time accepted: {{ time_accepted }}</h4>
      <h4 class="requests-detail-header-subsubtext">time closed: {{ time_closed }}</h4>
      <h4 class="requests-detail-header-subsubtext">Acceptor NetId: {{ acceptor_netid }}</h4>
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
      default: ""
    },
    course: {
      type: String,
      default: ""
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
      font-size: 1.8rem;
      color: $color-grey-dark;
      font-weight: 300;
      padding-bottom: 1rem;
    }
    &-subsubtext {
      font-size: 1.8rem;
      color: $color-grey-dark;
      font-weight: 300;
      padding-bottom: 1rem;
    }
  }
  &-body {
    font-weight: 400;
    font-size: 1.4rem;
  }
}
hr {
  margin: 2rem 0;
}
</style>


