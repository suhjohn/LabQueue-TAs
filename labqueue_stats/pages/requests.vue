<template>
  <div></div>
</template>
<script>
import PageHeader from "@/components/pages/PageHeader.vue";
export default {
  components: {
    PageHeader
  },
  layout: "dashboard",
  middleware: ["check-auth"]
};
</script>
