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
      :ref="label"
      id="graph-select-date-picker"
      input-class="date-picker-input"
      v-model="date"
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
      type: String
    }
  },
  methods: {
    toggleCalendar() {
      if (!this.isOpen) {
        this.isOpen = true;
        this.$refs[this.label].showDayCalendar();
      } else {
        this.isOpen = false;
        this.$refs[this.label].close();
      }
    },
    closeCalendar() {
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
.date-picker-input {
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    cursor: text;
  }
}
</style>
