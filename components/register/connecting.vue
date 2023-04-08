<template>
  <!-- =====START:step 2 for stepper===== -->
  <v-col md="9" class="pa-0 ma-0 d-flex flex-column">
    <div class="d-flex justify-center align-center flex-column mt-4">
      <div class="blueText">مرحله 2 از 3</div>
      <h3>لطفا اطلاعات خود را با دقت وارد نمائید</h3>
    </div>
    <v-col cols="12" md="8" class="ma-auto mt-10">
      <v-text-field
        rounded
        outlined
        label="شماره همراه"
        @change="saveData()"
        v-model="phone"
        placeholder="0912345678"
        prepend-inner-icon="lni lni-mobile"
        color="#333"
      >
        <template #append>
          <v-btn
            elevation="0"
            @click="sendMessageEl = !sendMessageEl"
            rounded
            text
            color="#388AEA"
            class="sendCodeBtn"
            >ارسال کد</v-btn
          >
        </template>
      </v-text-field>
      <!-- =====START:confirm code section===== -->
      <v-text-field
        v-if="sendMessageEl"
        rounded
        prepend-inner-icon="lni lni-checkmark-circle"
        filled
        value="کد تائید به شماره 09015671346 ارسال شده است. این کد تا 02:00 دقیقه دیگر معتبر است"
        background-color="#E8F4FF"
        readonly
        class="mt-n6"
        style="font-size: 14px"
      ></v-text-field>
      <v-col md="6" v-show="sendMessageEl" class="ma-auto">
        <v-row justify="center" align="center" class="flex-column">
          <h4 class="mt-n4">کد تایید</h4>
          <v-otp-input class="otpInput" type="number" length="4"></v-otp-input>
          <v-btn color="#388AEA" elevation="0" class="primaryBtn ma-auto text--white mb-4"
            >تایید شماره همراه</v-btn
          >
        </v-row>
      </v-col>
      <!-- =====END:confirm code section===== -->
      <v-text-field
        rounded
        outlined
        v-model="email"
        label="ایمیل"
        @change="saveData()"
        placeholder="example@email.com"
        prepend-inner-icon="lni lni-envelope"
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
      <v-btn
        @click="$store.commit('DECREASE_ACTIVE_TAB')"
        color="#388AEA"
        elevation="0"
        text
        class="prevBtn"
      >
        مرحله قبل
      </v-btn>
    </v-col>
  </v-col>
  <!-- =====END:step 2 for stepper===== -->
</template>

<script>
export default {
  data() {
    return {
      sendMessageEl: false,
      phone: "",
      email: "",
    };
  },
  methods: {
    //saving user data in localStorage
    saveData() {
      const data = {
        phone: this.phone,
        email: this.email,
      };
      if (process.browser) {
        localStorage.setItem("page2", JSON.stringify(data));
      }
    },
  },
};
</script>

<style></style>
