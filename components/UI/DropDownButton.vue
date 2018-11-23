<template>
  <div class="dropdown clearfix" v-on-clickaway="away">
    <button @click="showDropdown=!showDropdown" v-if="!showDropdown" class="dropdown-btn" :class="{'dropdown-btn-active': showDropdown}"><i class="fas fa-caret-down"></i> {{ options[selectedIndex] }} </button>
    <ul class="dropdown-list" :style="styleObj.list" v-if="showDropdown">
      <li class="dropdown-list-title" :style="styleObj.title">
        <div class="dropdown-list-title-container">
          <p class="dropdown-list-title-text">{{ options[selectedIndex] }}</p>
          <p class="dropdown-list-title-subtitle dropdown-list-title-text">Time Period</p>
        </div>
      </li>
      <hr class="divider">
      <li :class="{'dropdown-list-item-active': selectedIndex==index, 'dropdown-list-item':selectedIndex!=index}" :style="styleObj.item"
          v-for="(option, index) in options" :key="index" @click="onClickItem(option, index)">{{ option }}</li>
    </ul>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  mixins: [clickaway],
  props: {
    /**
     * Format [{key: "", value:"", subtitle: ""}]
     */
    options: {
      type: Array,
      required: true
    },
    defaultSelectedIndex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    const TITLEHEIGHT = 6;
    const ITEMHEIGHT = 4;
    return {
      dynamicStyle: {
        itemHeight: ITEMHEIGHT,
        titleHeight: TITLEHEIGHT
      },
      showDropdown: false,
      selectedIndex: this.defaultSelectedIndex
    };
  },
  computed: {
    styleObj: function() {
      const top =
        0 -
        this.dynamicStyle.titleHeight -
        this.dynamicStyle.itemHeight * this.selectedIndex;
      return {
        list: {
          top: top + "rem"
        },
        title: {
          height: this.dynamicStyle.titleHeight + "rem"
        },
        item: {
          height: this.dynamicStyle.itemHeight + "rem"
        }
      };
    }
  },
  methods: {
    away: function() {
      this.showDropdown = false;
    },
    onClickItem: function(option, index) {
      this.$emit("select", option);
      this.selectedIndex = index;
      this.showDropdown = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
$list-padding: 1.5rem;
.dropdown {
  position: relative;
}

.dropdown-btn {
  height: 4rem;
  width: 14rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: $color-grey-dark;
  transition: all 0.25s;
  &:hover {
    cursor: pointer;
    background-color: $color-grey-light;
  }
}

.dropdown-btn-active {
  color: $color-crimson-main-dark;
}

.divider {
  background-color: $color-grey;
  height: 1px;
  border: 0;
}

.dropdown-list {
  border: 1px solid $color-grey-light;
  border-top: none;
  border-radius: $contained-box-m-radius;
  box-sizing: border-box;
  box-shadow: $contained-box-m-shadow;
  position: absolute;
  left: -2rem;
  width: 25rem;
  flex-direction: column;
  &-title {
    padding: $list-padding 0;
    padding-left: $list-padding;
    background-color: $color-white;
    position: relative;
    &:hover {
      cursor: default;
    }
    &-container {
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
    }
    &-text {
      font-size: 1.3rem;
      font-weight: 700;
      color: $color-grey-dark;
    }
    &-subtitle {
      font-size: 1.6rem;
    }
  }
  &-item {
    font-size: 1.3rem;
    font-weight: 700;
    color: $color-grey-dark;
    background-color: $color-white;
    padding-left: $list-padding;
    height: 4rem;
    line-height: 4rem;
    transition: all 0.25s;
    &:hover {
      cursor: pointer;
      background-color: $color-grey-light;
    }
    &:active {
      font-weight: 700;
      color: $color-crimson-main-dark;
      background-color: $color-crimson-main-light;
    }
    &:focus {
      font-weight: 700;
      color: $color-crimson-main-dark;
      background-color: $color-crimson-main-light;
    }
  }
  &-item-active {
    font-size: 1.3rem;
    font-weight: 700;
    color: $color-crimson-main-dark;
    background-color: $color-grey-light;
    padding-left: $list-padding;
    height: 4rem;
    line-height: 4rem;
    transition: all 0.25s;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>


