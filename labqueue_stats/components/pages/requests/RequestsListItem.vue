<template>
  <nuxt-link
    tag="a"
    :to="detailLink"
    id="request-list-item"
    :class="{'request-list-item-selected':selected, 'request-list-item-unselected':!selected}"
  >
    <div class="request-list-item-title">
      <h1
        class="request-list-item-title-text"
      >{{ authorFullname }}({{authorUsername}}) in {{ course }}</h1>
      <div class="request-list-item-title-date-container">
        <h4 class="request-list-item-title-date">{{ timeAcceptedDate }}</h4>
        <h4 class="request-list-item-title-date">{{ timeAcceptedTime }}</h4>
      </div>
    </div>
    <div class="request-list-item-body-container">
      <p class="request-list-item-body-text">{{descriptionString}}</p>
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
    },
    timeAcceptedDate() {
      return this.timeAccepted.split("T")[0];
    },
    timeAcceptedTime() {
      return this.timeAccepted.split("T")[1];
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#request-list-item {
  height: 10rem;
  display: block;
  padding: $margin-small;
  &:hover {
    cursor: pointer;
    background-color: $color-crimson-main-light;
  }
  &:not(:first-child) {
    border-top: 1px solid $color-grey-light;
  }
  &:not(:last-child) {
    border-bottom: none;
  }
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
      width: 7rem;
    }
  }
  &-text {
    font-size: 1.4rem;
    color: $color-grey-darkest;
    font-weight: 300;
  }
}

.request-list-item-body {
  &-container {
    margin-top: 1rem;
  }
  &-text {
    @include text-x-small;
    font-weight: 300;
    color: $color-grey;
  }
}
.nuxt-link-exact-active {
  background-color: $color-crimson-main;
  .request-list-item-title {
    &-date {
      color: $color-white;
    }
    &-text {
      color: $color-white;
    }
  }
  &:hover {
    background-color: $color-crimson-main !important;
  }
}
</style>


