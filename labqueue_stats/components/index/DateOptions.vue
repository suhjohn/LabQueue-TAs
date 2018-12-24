<template>
  <div class="date-wrapper">
    <ul class="datepicker-list">
      <li class="datepicker-list-item" @click="openCalendar('dateTo')" v-on-clickaway="closeDateToCalendar">
        <label class="date-label">Date From</label>
        <datepicker ref="dateTo" @selected="fetchData" @opened="openCalendar('dateTo')" :typeable="true" @closed="calendarHandler(dateToState, false)" class="datepicker" calendar-class="datepicker-calendar" input-class="datepicker-input" :class="{'datepicker-opened': dateToState.calendarIsOpen, 'datepicker-closed': !dateToState.calendarIsOpen}" v-model="dateFrom"></datepicker>
      </li>
      <li class="datepicker-list-item" @click="openCalendar('dateFrom')" v-on-clickaway="closeDateFromCalendar">
        <label class="date-label">Date To</label>
        <datepicker ref="dateFrom" @selected="fetchData" @opened="openCalendar('dateFrom')" :typeable="true" @closed="calendarHandler(dateFromState, false)" class="datepicker" calendar-class="datepicker-calendar" input-class="datepicker-input" :class="{'datepicker-opened': dateFromState.calendarIsOpen, 'datepicker-closed': !dateFromState.calendarIsOpen}" v-model="dateTo"></datepicker>
      </li>
    </ul>
  </div>
</template>
<script>
import moment from "moment";
import { mixin as clickaway } from "vue-clickaway";
import Datepicker from "vuejs-datepicker";
import { mapMutations } from "vuex";

const defaultDateRange = {
  value: 1,
  unit: "months"
};

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
    openCalendar(calendar) {
      if (!this[calendar + "State"].calendarIsOpen) {
        this.$refs[calendar].showDayCalendar();
      }
      this[calendar + "State"].calendarIsOpen = true;
    },
    closeDateToCalendar() {
      this.dateToState.calendarIsOpen = false;
      this.$refs.dateTo.close();
    },
    closeDateFromCalendar() {
      this.dateFromState.calendarIsOpen = false;
      this.$refs.dateFrom.close();
    },
    async fetchData() {
      var wait = ms => new Promise(r => setTimeout(r, ms));
      this.$refs.dateTo.close();
      this.$refs.dateFrom.close();
      // ascertain that the inputed value is relevant value
      this.setFetchingState(true);
      await wait(1000);
      const dateFrom = this.dateFrom;
      const dateTo = this.dateTo;
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

<style lang="scss">
@import "@/assets/scss/variables.scss";
$calendar-height: 70vh;
$calendar-header-height: 6rem;

.datepicker {
  &:not(:last-child) {
    margin-right: 2rem;
  }
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
    position: fixed;
    width: 100vw;
    height: $calendar-height;
    left: 50%;
    bottom: 0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    font-size: 1.6rem;
    color: $color-grey-darkest;
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
      .day-header {
        font-weight: 400;
      }
      .cell {
        line-height: calc(
          calc(#{$calendar-height} - #{$calendar-header-height}) / 6
        );
        height: calc(
          calc(#{$calendar-height} - #{$calendar-header-height}) / 6
        );
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
  }
}

.datepicker-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  &-item {
    width: 50%;
  }
}

.date-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.date-label {
  font-size: 1.4rem;
}
@media only screen and (min-width: 930px) {
  .datepicker {
    &-calendar {
      width: 30rem;
      position: absolute;
      left: auto;
      bottom: auto;
      height: auto;
      font-size: 1.2rem;
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

  .datepicker-list {
    display: flex;
    flex-wrap: wrap;
    width: auto;
    &-item {
      width: auto;
    }
  }
}
</style>



