<template>
  <div
    id="graph-select-date-picker-container"
    :class="{
        'graph-select-date-picker-container-opened': isOpen, 
        'graph-select-date-picker-container-closed': !isOpen
    }"
    v-on-clickaway="closeCalendar"
  >
    <div id="graph-select-date-picker-icon-container">
      <i id="graph-select-date-picker-icon" class="fas fa-calendar-alt"></i>
    </div>
    <div id="graph-select-date-picker-text-container">
      <label id="graph-select-date-picker-label" @click="toggleCalendar">{{ label }}</label>
      <datepicker
        wrapper-class="graph-select-date-picker"
        calendar-class="graph-select-date-picker-calendar"
        v-model="date"
        :ref="label"
        :input-class="{
        'graph-select-date-picker-input':true,
        'graph-select-date-picker-input-opened':isOpen
      }"
        :typeable="true"
        @opened="toggleCalendar"
        @input="selectDate"
      ></datepicker>
    </div>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
import { mixin as clickaway } from "vue-clickaway";

export default {
  components: {
    Datepicker
  },
  data() {
    return {
      date: this.initialDate,
      isOpen: false
    };
  },
  mixins: [clickaway],
  props: {
    label: {
      type: String
    },
    initialDate: {
      type: Date
    }
  },
  methods: {
    toggleCalendar() {
      console.log("date open");
      this.isOpen = true;
      this.$refs[this.label].showDayCalendar();
    },
    closeCalendar() {
      console.log("date close");
      this.isOpen = false;
      this.$refs[this.label].close();
    },
    selectDate() {
      console.log("date selected");
      this.closeCalendar();
      this.$emit("selectDate", this.label, this.date);
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/scss_v2/main.scss";
$date-picker-container-width: 14rem;
$date-picker-label-height: 2rem;
$calendar-height: 70vh;
$calendar-header-height: 6rem;

#graph-select-date-picker-container {
  height: 100%;
  width: $date-picker-container-width;
  text-align: left;
  display: flex;
  padding: $margin-x-small;
  padding-top: calc(#{$margin-x-small} - #{$hover-marker-size});
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
}
.graph-select-date-picker-container-opened {
  border-top: $hover-marker-size solid $color-crimson-main;
  font-weight: 700;
}

.graph-select-date-picker-container-closed {
  border-top: $hover-marker-size solid transparent;
  &:hover {
    @include backgroundColor-light;
  }
}
// Icon
#graph-select-date-picker-icon-container {
  padding: $margin-x-small;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#graph-select-date-picker-icon {
  @include text-x-small;
  @include textColor-grey;
}
//---------------------------------------------------------------------
//---------------------------------------------------------------------
#graph-select-date-picker-text-container {
  width: 100%;
}
// Label
#graph-select-date-picker-label {
  @include textColor-grey;
  cursor: pointer;
  display: block;
  padding-left: $margin-x-small;
}

// Datepicker
// Label
.graph-select-date-picker {
  height: inherit;
}

// Datepicker Input
.graph-select-date-picker-input {
  @include textColor-grey;
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-left: $margin-x-small;
  &:focus {
    cursor: text;
  }
}
.graph-select-date-picker-input-opened {
  @include selectedWeight;
}
// Datepicker Calendar
.graph-select-date-picker-calendar {
  @include boxShadow-main;
  @include roundBorder;

  position: fixed;
  width: 100vw;
  height: $calendar-height;
  left: 50%;
  bottom: 0;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  font-size: 1.6rem;
  font-weight: 200;

  & header {
    height: $calendar-header-height;
    & span {
      line-height: $calendar-header-height;
      height: $calendar-header-height;
    }
    & :nth-child(2) {
      font-weight: 700;
    }
  }

  // Day Calendar
  & div {
    background-color: $color-white;
    @include boxShadow-main;
    @include roundBorder;

    .day-header {
      font-weight: 400;
    }
    .cell {
      line-height: calc(
        calc(#{$calendar-height} - #{$calendar-header-height}) / 6
      );
      height: calc(calc(#{$calendar-height} - #{$calendar-header-height}) / 6);
      &:hover {
        background-color: $color-grey-light;
        border: none !important;
      }
      &.selected {
        color: $color-white;
        background-color: $color-crimson-main !important;
        border: none !important;
        &:hover {
          background-color: $color-crimson-main;
        }
      }
    }
  }
  // Month Calendar
  & .cell {
    line-height: calc(
      calc(#{$calendar-height} - #{$calendar-header-height}) / 6
    );
    height: calc(calc(#{$calendar-height} - #{$calendar-header-height}) / 6);
    &:hover {
      background-color: $color-grey-light;
      border: none !important;
    }
    &.selected {
      color: $color-white;
      background-color: $color-crimson-main-lighter !important;
      border: none !important;
      &:hover {
        background-color: $color-crimson-main-lighter;
      }
    }
  }

  @include respond(laptop) {
    width: 30rem;
    position: absolute;
    left: $date-picker-container-width;
    bottom: 0;
    height: auto;
    font-size: 1.2rem !important;
    & div {
      .cell {
        line-height: 4rem;
        height: 4rem;
      }
    }
    & .cell {
      line-height: 4rem;
      height: 4rem;
    }
  }
}
</style>
