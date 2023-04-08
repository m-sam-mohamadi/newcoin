<template>
  <v-app>
    <Nuxt />
    <!-- =====START: show message or alert===== -->
    <v-snackbar
      v-model="$store.state.alert.show"
      :color="$store.state.alert.color"
    >
      {{ $store.state.alert.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          :color="$store.state.alert.color"
          text
          v-bind="attrs"
          @click="$store.commit('HIDE_ALERT')"
        >
          بستن
        </v-btn>
      </template>
    </v-snackbar>
    <!-- =====START: show message or alert===== -->
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  mounted() {
    //hide message after 3seconds
    setTimeout(() => {
      this.$store.commit("HIDE_ALERT");
    }, 3000);
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/main.scss";
</style>
