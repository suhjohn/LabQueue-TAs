<template>
    <ul class="datepicker-list" v-on-clickaway="away">
        <datepicker @selected="fetchData" :typeable="true" @opened="calendarHandler(dateToState, true)" @closed="calendarHandler(dateToState, false)" class="datepicker" calendar-class="datepicker-calendar" input-class="datepicker-input" :class="{'datepicker-opened': dateToState.calendarIsOpen, 'datepicker-closed': !dateToState.calendarIsOpen}" v-model="dateFrom"></datepicker>

        <datepicker @selected="fetchData" :typeable="true" @opened="calendarHandler(dateFromState, true)" @closed="calendarHandler(dateFromState, false)" class="datepicker" calendar-class="datepicker-calendar" input-class="datepicker-input" :class="{'datepicker-opened': dateFromState.calendarIsOpen, 'datepicker-closed': !dateFromState.calendarIsOpen}" v-model="dateTo"></datepicker>
    </ul>
</template>
<script>
import moment from "moment";
import { mixin as clickaway } from "vue-clickaway";
import Datepicker from "vuejs-datepicker";
import { mapMutations } from "vuex";

const defaultDateRange = {
  value: 1,
  unit: "months"
}; // useful for moment.js

export default {
  components: {
    Datepicker
  },
  mixins: [clickaway],
  data() {
    return {
      dateTo: moment()
        .startOf("day")
        .toDate(),
      dateFrom: moment()
        .subtract(defaultDateRange.value, defaultDateRange.unit)
        .startOf("day")
        .toDate(),
      dateFromState: {
        calendarIsOpen: false
      },
      dateToState: {
        calendarIsOpen: false
      }
    };
  },
  methods: {
    /**
     * Event Handlers
     */
    ...mapMutations({ setFetchingState: "setFetchingState" }),
    away() {
      this.dateFromState.calendarIsOpen = false;
      this.dateToState.calendarIsOpen = false;
    },
    calendarHandler(calendarState, isOpen) {
      calendarState.calendarIsOpen = isOpen;
      if (calendarState == this.dateFromState) {
        this.dateToState.calendarIsOpen = false;
      } else {
        this.dateFromState.calendarIsOpen = false;
      }
    },
    async fetchData() {
      var wait = ms => new Promise(r => setTimeout(r, ms));

      // ascertain that the inputed value is relevant value
      const dateFrom = this.dateFrom;
      const dateTo = this.dateTo;
      this.setFetchingState(true);
      await wait(2000);
      if (
        dateFrom.getTime() != this.dateFrom.getTime() ||
        dateTo.getTime() != this.dateTo.getTime()
      ) {
        this.setFetchingState(false);
        return;
      }
      const dateFromString = moment(dateFrom).format("YYYY-MM-DD");
      const dateToString = moment(dateTo).format("YYYY-MM-DD");
      await this.$store.dispatch("setRequests", {
        dateFrom: dateFromString,
        dateTo: dateToString
      });
      this.setFetchingState(false);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.datepicker {
  &:not(:last-child) {
    margin-right: 2rem;
  }
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 0px 0px 1px $color-grey-light;
  border-radius: 10px;
  &-closed {
    transition: 0.2s box-shadow;
    &:hover {
      box-shadow: 0px 0px 0px 1px $color-grey-dark;
    }
  }
  &-opened {
    box-shadow: 0px 0px 0px 1px $color-crimson-main;
    & div {
      & input {
        & input {
          cursor: text;
        }
      }
    }
  }
  &-input {
    padding-left: 1rem;
    height: 4rem;
    line-height: 4rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:focus {
      cursor: text;
    }
  }
  &-calendar {
    right: 0;
    & div {
      .cell {
        &:hover {
          background-color: $color-grey-light;
          border: none !important;
        }
        &.selected {
          color: $color-white;
          background-color: $color-crimson-main-lighter;
          border: none !important;
          &:hover {
            background-color: $color-crimson-main-lighter;
          }
        }
      }
    }
  }
}
.datepicker-list {
  display: flex;
  flex-wrap: wrap;
}
</style>



