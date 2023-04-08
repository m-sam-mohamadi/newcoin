<template>
  <!-- =====START:register component ===== -->
  <v-col class="registerSection pa-5 ma-auto">
    <v-col class="pa-0 ma-0" style="height: 100%" xl="8" lg="10" md="11" cols="12">
      <v-row class="wrapper">
        <v-col md="3" class="pa-0 ma-0 registerStepper" style="background-color: #388aea">
          <div class="d-flex align-center justify-center flex-column mt-10">
            <img height="120" width="120" :src="require('@/assets/images/Logo.png')" />
            <div class="mainTitle text--white">ثبت نام</div>
          </div>
          <div class="px-5 ml-auto">
            <div
              :class="`stepper d-flex flex-column activeTab-${$store.state.activeTab}`"
            >
              <!-- =====START:stepper steps===== -->
              <v-col class="steps notActive step-0 pa-0">
                <v-row class="pa-0 ma-0">
                  <span class="stepperCircle"></span>
                  <span class="stepperText mr-5">اطلاعات فردی </span>
                </v-row>
                <div class="divide"></div>
              </v-col>
              <v-col class="steps notActive step-1 pa-0">
                <v-row class="pa-0 ma-0">
                  <span class="stepperCircle"></span>
                  <span class="stepperText mr-5">اطلاعات ارتباطی</span>
                </v-row>
                <div class="divide"></div>
              </v-col>
              <v-col class="steps notActive step-2 pa-0">
                <v-row class="pa-0 ma-0">
                  <span class="stepperCircle"></span>
                  <span class="stepperText mr-5">اطلاعات مکانی</span>
                </v-row>
              </v-col>
              <!-- =====END:stepper steps===== -->
            </div>
          </div>
        </v-col>
        <!-- =====START:register forms width animation===== -->
        <transition name="fade" v-if="$store.state.activeTabBool[0]">
          <formComponent v-show="$store.state.activeTabBool[0]" />
        </transition>
        <transition name="fade" v-if="$store.state.activeTabBool[1]">
          <connecting v-show="$store.state.activeTabBool[1]"
        /></transition>
        <transition name="fade" v-if="$store.state.activeTabBool[2]">
          <locating @submit-form="submit()" v-show="$store.state.activeTabBool[2]"
        /></transition>
        <!-- =====END:register forms width animation===== -->
      </v-row>
    </v-col>
    <v-dialog width="fit-content " v-model="loading">
      <v-card class="pa-6 rounded-16">
        <v-progress-circular indeterminate />
      </v-card>
    </v-dialog>
  </v-col>
  <!-- =====END:register component ===== -->
</template>

<script>
import locating from "@/components/register/locating.vue";
import connecting from "@/components/register/connecting.vue";
import formComponent from "@/components/register/form.vue";
export default {
  components: {
    formComponent,
    connecting,
    locating,
  },
  data() {
    return {
      eye: false,
      loading: false,
      e6: 1,
      //default password for signup in default account
      password: "12345678",
      rePassword: "12345678",
      page1: {},
      page2: {},
      snackbar: false,
    };
  },
  methods: {
    //toggle eye in text-area for password
    toggleEye() {
      this.eye = !this.eye;
    },
    //get steps data from localStorage
    getPagesData() {
      if (process.browser) {
        const pg1 = localStorage.getItem("page1");
        this.page1 = JSON.parse(pg1);
        const pg2 = localStorage.getItem("page2");
        this.page2 = JSON.parse(pg2);
      }
    },
    //submit register form
    async submit() {
      this.loading = true;
      this.getPagesData();
      if (!this.page1) {
        this.$store.commit("SHOW_ALERT", {
          text: "لطفا مقدار ها را پر کنید",
          color: "error",
          show: true,
        });
      }
      try {
        await this.$store.dispatch("Register", {
          email: this.page2.email,
          password: this.password,
          password_confirmation: this.rePassword,
          name: this.page1.name,
          phone: this.page2.phone,
        });
        this.$store.commit("SHOW_ALERT", {
          text: "با موفقیت وارد شدید",
          color: "success",
          show: true,
        });
        this.loading = false;
      } catch (e) {
        this.loading = false;
      }
    },
  },
  computed: {
    //active step 1 when called
    step1() {
      this.$store.state.activeTabBool[0];
    },
    //active step 2 when called
    step2() {
      this.$store.state.activeTabBool[1];
    },
    //active step 3 when called
    step3() {
      this.$store.state.activeTabBool[2];
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "~@/assets/scss/components/login.scss";
@import "~@/assets/scss/components/stepper.scss";
</style>
