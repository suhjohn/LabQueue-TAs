<template>
  <div
    id="graph-select-date-picker-container"
    :class="{
        'graph-select-date-picker-container-opened': isOpen, 
        'graph-select-date-picker-container-closed': !isOpen
    }"
    v-on-clickaway="closeCalendar"
  >
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
</template>
<script>
import Datepicker from "vuejs-datepicker";
import { mixin as clickaway } from "vue-clickaway";

const defaultDateRange = {
  value: 1,
  unit: "months"
};

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
$date-picker-container-width: 15rem;
$date-picker-label-height: 2rem;

#graph-select-date-picker-container {
  height: 100%;
  width: $date-picker-container-width;
  text-align: left;
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
// Label
#graph-select-date-picker-label {
  cursor: pointer;
  height: $date-picker-label-height;
  line-height: $date-picker-label-height;
  display: block;
  padding-left: $margin-x-small;
}

// Datepicker
// Label
.graph-select-date-picker {
  height: calc(100% - #{$date-picker-label-height});
}

// Datepicker Input
.graph-select-date-picker-input {
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
  @include respond(laptop) {
    width: 30rem;
    position: absolute;
    left: $date-picker-container-width;
    bottom: 0;
    height: auto;
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
