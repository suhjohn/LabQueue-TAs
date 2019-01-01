<template>
  <nuxt-link
    tag="li"
    :to="detailLink"
    @click="onClick"
    class="request-list-item"
    :class="{'request-list-item-selected':selected, 'request-list-item-unselected':!selected}"
  >
    <div class="request-list-item-title">
      <h1 class="request-list-item-title-text">{{ pk }} - {{ descriptionString }}</h1>
      <div class="request-list-item-title-date-container">
        <h4 class="request-list-item-title-date">{{ timeAccepted }}</h4>
      </div>
    </div>
    <div class="request-list-item-body">
      <p class="request-list-item-body-text">{{authorFullname}} | {{course}}</p>
    </div>
  </nuxt-link>
</template>
<script>
import { mapMutations } from "vuex";

const DESCRIPTION_LIMIT = 45;
export default {
  props: {
    pk: {
      type: Number
    },
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
    },
    isDemo: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    descriptionString() {
      let description = this.description.substring(0, DESCRIPTION_LIMIT);
      if (this.description.length > DESCRIPTION_LIMIT) {
        description += "...";
      }
      return description;
    },
    detailLink() {
      let detailURLName;
      if (this.isDemo) {
        detailURLName = "demo-requests-pk";
      } else {
        detailURLName = "requests-pk";
      }
      return { name: detailURLName, params: { pk: this.pk } };
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
@import "@/assets/scss_v2/main.scss";
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
      font-weight: 400;
      &-container {
        text-align: left;
        width: 12rem;
      }
    }
    &-text {
      font-size: 1.4rem;
      color: $color-grey-darkest;
      font-weight: 300;
    }
  }

  &-unselected {
    &:hover {
      background-color: $color-crimson-main-light;
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
      color: $color-grey;
    }
  }
}
.nuxt-link-exact-active {
  background-color: $color-crimson-main-dark;
  .request-list-item-title {
    &-date {
      color: $color-white;
    }
    &-text {
      color: $color-white;
    }
  }
  &:hover {
    background-color: $color-crimson-main-dark;
  }
}
</style>


