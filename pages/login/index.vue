<template>
  <login-component />
</template>

<script>
import loginComponent from "@/components/login/login.vue";
export default {
  transition: {
    name: "slide",
    mode: "out-in",
  },
  components: {
    loginComponent,
  },
};
</script>

<style>
</style>