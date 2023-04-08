<template>
  <client-only placeholder="loading...">
    <dashboard-component />
  </client-only>
</template>

<script>
import dashboardComponent from "@/components/dashboard/dashboard.vue";
export default {
  components: {
    dashboardComponent,
  },
};
</script>

<style></style>
