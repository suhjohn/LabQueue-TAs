<template>
  <button
    id="graph-select-date-picker-container"
    v-on-clickaway="closeCalendar"
    @click="toggleCalendar"
    :class="{
        'graph-select-date-picker-container-opened': isOpen, 
        'graph-select-date-picker-container-closed': !isOpen
    }"
  >
    <label id="graph-select-date-picker-label">{{ label }}</label>
    <datepicker
      id="graph-select-date-picker"
      v-model="date"
      @selected="closeCalendar"
      :ref="label"
      :input-class="{
        'graph-select-date-picker-input':true,
        'graph-select-date-picker-input-opened':isOpen
      }"
      :typeable="true"
    ></datepicker>
  </button>
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
      console.log("toggle");
      this.isOpen = true;
      this.$refs[this.label].showDayCalendar();
    },
    closeCalendar() {
      console.log("close");
      this.isOpen = false;
      this.$refs[this.label].close();
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/scss_v2/main.scss";
#graph-select-date-picker-container {
  height: 100%;
  text-align: left;
  padding-left: $margin-x-small;
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
#graph-select-date-picker-label {
  height: 1rem;
  cursor: pointer;
}
.graph-select-date-picker-input {
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    cursor: text;
  }
}
.graph-select-date-picker-input-opened {
  @include selectedWeight;
}
</style>
