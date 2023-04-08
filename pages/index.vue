<template>
  <v-card width="100%" height="100%" class="d-flex justify-center align-center">
    <v-btn to="/login" class="mx-2 primaryBtn" color="#388AEA" dark elevation="0"
      >لاگین</v-btn
    >
    <v-btn to="/register" class="mx-2 primaryBtn" color="#388aea" dark elevation="0"
      >ثبت نام</v-btn
    >
    <v-btn to="/dashboard" class="mx-2 primaryBtn" color="#388aea" dark elevation="0"
      >داشبورد</v-btn
    >
  </v-card>
</template>

<script>
export default {
  transition: "slide",
};
</script>
