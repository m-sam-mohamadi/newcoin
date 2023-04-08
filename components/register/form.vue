<template>
  <!-- =====START:step 1 for stepper===== -->
  <v-col md="9" class="pa-0 ma-0 d-flex flex-column">
    <div class="d-flex justify-center align-center flex-column mt-4">
      <div class="blueText">مرحله 1 از 3</div>
      <h3>لطفا اطلاعات خود را با دقت وارد نمائید</h3>
    </div>
    <v-col cols="12" md="8" class="ma-auto mt-10">
      <v-text-field
        rounded
        outlined
        v-model="name"
        @change="saveData"
        label="نام و نام خانوادگی"
        placeholder="محمد حسین رحمتی"
        prepend-inner-icon="lni lni-user"
        color="#333"
      ></v-text-field>
      <v-text-field
        rounded
        outlined
        label="کد ملی"
        v-model="nationalCode"
        @change="saveData"
        placeholder="208-1235-456"
        prepend-inner-icon="lni lni-postcard"
        color="#333"
      ></v-text-field>
      <v-text-field
        rounded
        outlined
        label="تاریخ تولد"
        v-model="birthDay"
        @change="saveData"
        placeholder="1370/06/31"
        prepend-inner-icon="lni lni-calendar"
        color="#333"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="mt-auto d-flex overflow-hidden">
      <div class="divider"></div>
      <v-btn
        @click="$store.commit('INCREASE_ACTIVE_TAB')"
        color="#388AEA"
        elevation="0"
        class="nextBtn mr-auto"
      >
        مرحله بعد
        <v-icon class="mr-5" size="20">lni lni-arrow-left</v-icon>
      </v-btn>
    </v-col>
  </v-col>
  <!-- =====END:step 1 for stepper===== -->
</template>

<script>
export default {
  props: {},
  data() {
    return {
      name: "",
      nationalCode: "",
      birthDay: "",
    };
  },
  methods: {
    //saving user data in localStorage
    saveData() {
      const data = {
        name: this.name,
        nationalCode: this.nationalCode,
        birthDay: this.birthDay,
      };
      if (process.browser) {
        localStorage.setItem("page1", JSON.stringify(data));
      }
    },
  },
};
</script>

<style></style>
