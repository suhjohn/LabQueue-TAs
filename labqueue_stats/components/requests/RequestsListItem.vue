<template>
  <li @click="onClick" class="request-list-item" :class="{'request-list-item-selected':selected, 'request-list-item-unselected':!selected}">
    <div class="request-list-item-title">
      <h1 class="request-list-item-title-text">{{ authorFullname }} | {{ authorUsername }} </h1>
      <h4 class="request-list-item-title-date">{{ timeAccepted }}</h4>
    </div>
    <div class="request-list-item-body">
      <p class="request-list-item-body-text">
        {{description}}
      </p>
    </div>
  </li>
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
    course: {
      type: String
    },
    description: {
      type: String
    },
    timeAccepted: {
      type: String
    },
    selected: {
      type: Boolean
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.request-list-item {
  height: 10rem;
  padding: 2rem;
  &:hover {
    cursor: pointer;
  }
  .request-list-item-title {
    display: flex;
    justify-content: space-between;
    &-date {
      font-size: 1.2rem;
      color: $color-grey-darkest;
      font-weight: 300;
    }
    &-text {
      font-size: 1.4rem;
      color: $color-grey-darkest;
      font-weight: 400;
    }
  }

  &-unselected {
    transition: 0.15s all;
    &:hover {
      background-color: $color-grey;
    }
  }
  &-selected {
    background-color: $color-crimson-main-dark;
    .request-list-item-title {
      &-date {
        color: $color-white;
      }
      &-text {
        color: $color-white;
      }
    }
  }
  &:not(:first-child) {
    border-top: 1px solid $color-grey-light;
  }
  &:not(:last-child) {
    border-bottom: none;
  }

  /* */
  &-body {
    margin-top: 1rem;
    &-text {
      font-size: 1.2rem;
      font-weight: 300;
      color: $color-grey-lighter;
    }
  }
}
</style>


