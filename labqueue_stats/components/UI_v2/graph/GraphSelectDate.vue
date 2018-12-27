<template>
  <div id="graph-select-date-container">
    <GraphSelectDatePicker
      v-for="(datepicker, index) in datepickers"
      :key="index"
      :label="datepicker.label"
      :initialDate="datepicker.initialDate"
    />
  </div>
</template>
<script>
import GraphSelectDatePicker from "@/components/UI_v2/graph/GraphSelectDatePicker.vue";
import moment from "moment";
const defaultDateRange = {
  value: 1,
  unit: "months"
};

export default {
  components: {
    GraphSelectDatePicker
  },
  data() {
    return {
      datepickers: [
        {
          label: "Date From",
          initialDate: moment()
            .subtract(defaultDateRange.value, defaultDateRange.unit)
            .startOf("day")
            .toDate()
        },
        {
          label: "Date To",
          initialDate: moment()
            .startOf("day")
            .toDate()
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
#graph-select-date-container {
  height: 100%;
}
</style>
