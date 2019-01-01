<template>
  <div id="profile-summary">
    <ProfileSummaryCard
      v-for="(summary, index) in summaries"
      :key="index"
      :icon="summary.icon"
      :title="summary.title"
      :value="summary.value"
      :color="summary.color"
    ></ProfileSummaryCard>
  </div>
</template>
<script>
// external
import moment from "moment";
// internal
import { envVars } from "@/mixins/envVars.js";
import { demo } from "@/mixins/demo.js";
import { dateToString, getShiftRequests, filter_shifts } from "@/utils.js";
import { COLORS } from "@/constants";

import ProfileSummaryCard from "@/components/pages/profile/ProfileSummaryCard.vue";

export default {
  mixins: [envVars, demo],
  components: {
    ProfileSummaryCard
  },
  data() {
    return {
      summaries: {
        requests: {
          icon: "clipboard-list",
          title: "Requests",
          value: undefined,
          color: COLORS[0]
        },
        time: {
          icon: "business-time",
          title: "Worked Time",
          value: undefined,
          color: COLORS[1]
        },
        shifts: {
          icon: "calendar-check",
          title: "Total Shifts",
          value: undefined,
          color: COLORS[2]
        }
      }
    };
  },
  methods: {
    async setValues() {
      // Queries from the beginning possible to today
      const today = moment()
        .startOf("day")
        .toDate();
      const query = {
        accepted_after: "2016-01-01",
        accepted_before: dateToString(today)
      };
      const requests = await this.getRequests(query);
      this.setRequestsValue(requests);
      this.setTimeValue(requests);
      this.setShiftValue(requests);
    },
    setRequestsValue(requests) {
      this.summaries.requests.value = requests.length;
    },
    setTimeValue(requests) {
      const handletimeSum = requests
        .reduce((total, request) => {
          let time_accepted = moment(request.time_accepted);
          let time_closed = moment(request.time_closed);
          let handleTime = time_closed.subtract(time_accepted).minutes();
          let handleTimeMoment = moment.duration(handleTime, "minutes");
          return moment.duration(total, "minutes").add(handleTimeMoment);
        })
        .asMinutes();
      const handletimeHrs = Math.floor(handletimeSum / 60);
      const handletimeMin = handletimeSum - handletimeHrs * 60;
      this.summaries.time.value = `${handletimeHrs} Hours ${handletimeMin} Minutes`;
    },
    setShiftValue(requests) {
      const shiftRequests = getShiftRequests(requests);
      this.summaries.shifts.value = Object.keys(shiftRequests).length;
    }
  },
  async created() {
    await this.setValues();
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_v2/main.scss";
#profile-summary {
  display: flex;
  width: 100%;
}
</style>

