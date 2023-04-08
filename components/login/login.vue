<template>
  <v-col class="loginSection pa-5 ma-auto">
    <v-col class="pa-0 ma-0" xl="8" lg="10" md="11" cols="12">
      <v-row style="background-color: white">
        <!-- =====START: right side blue background===== -->
        <v-col md="6" class="pa-0 ma-0 loginDetail">
          <h2 class="loginDetailHeader mt-10">صرافی ارز دیجیتال نیوکوین اسپیس</h2>
          <div class="loginDetailText my-10">
            خرید و فروش امن بیت‌کوین و ارزهای دیجیتال به بزرگترین بازار ارز دیجیتال ایران
            بپیوندید
          </div>
          <div class="loginDetailImage my-3">
            <v-img max-width="246" :src="require('@/assets/images/astro.png')"></v-img>
          </div>
        </v-col>
        <!-- =====END: right side blue background===== -->
        <v-col md="6" class="pa-0 ma-0">
          <!-- =====START: login form===== -->
          <div class="loginForm">
            <v-img
              class="mt-10"
              max-width="120"
              max-height="120"
              :src="require('@/assets/images/Logo.png')"
            ></v-img>
            <div class="mainTitle">ورود به داشبورد</div>
            <nuxt-link to="/register" class="mainLink">هنوز ثبت نام نکرده‌اید؟</nuxt-link>
            <v-col class="px-md-15 mt-10">
              <v-text-field
                rounded
                outlined
                label="ایمیل"
                v-model="user.email"
                placeholder="example@email.com"
                prepend-inner-icon="lni lni-envelope"
                :error-messages="
                  $store.getters.showError ? ['اطلاعات را به درستی وارد کنید'] : []
                "
                color="#333"
              ></v-text-field>
              <v-text-field
                rounded
                outlined
                label="رمز عبور"
                v-model="user.password"
                placeholder="حداقل 8 کارکتر"
                prepend-inner-icon="lni lni-lock-alt"
                :append-icon="eye ? 'lni lni-eye' : 'mdi-eye-off-outline'"
                :type="eye ? 'text' : 'password'"
                @click:append="toggleEye"
                color="#333"
              ></v-text-field>
              <v-col class="d-flex justify-center align-center"
                ><v-btn @click="submit()" color="#388AEA" elevation="0" class="loginBtn"
                  >ورود به حساب
                  <v-icon class="mr-5" size="20">lni lni-arrow-left</v-icon></v-btn
                ></v-col
              >
            </v-col>
          </div>
          <!-- =====END: login form===== -->
        </v-col>
      </v-row>
    </v-col>
    <v-dialog width="fit-content " v-model="loading">
      <v-card class="pa-6 rounded-16">
        <v-progress-circular indeterminate />
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      eye: false,
      user: { email: "", password: "" },
      loading: false,
      showError: this.$store.getters.showError,
    };
  },
  methods: {
    //toggle eye in text-area for password
    toggleEye() {
      this.eye = !this.eye;
    },

    //submitting login form
    async submit() {
      this.loading = true;
      try {
        await this.$store.dispatch("LogIn", {
          email: this.user.email,
          password: this.user.password,
        });
        this.loading = true;
      } catch (e) {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/components/login.scss";
</style>
