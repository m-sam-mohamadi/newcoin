<template>
  <!-- =====START:step 3 for stepper===== -->
  <v-col md="9" class="pa-0 ma-0 d-flex flex-column">
    <div class="d-flex justify-center align-center flex-column mt-4">
      <div class="blueText">مرحله 3 از 3</div>
      <h3>لطفا اطلاعات خود را با دقت وارد نمائید</h3>
    </div>
    <v-col cols="12" md="8" class="ma-auto mt-10 px-8 px-md-0">
      <v-row>
        <v-col cols="12" class="pa-0 pa-md-3" md="6"
          ><v-text-field
            rounded
            outlined
            label="استان"
            placeholder="مازندران"
            prepend-inner-icon="lni lni-map-marker"
            color="#333"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="pa-0 pa-md-3">
          <v-text-field
            rounded
            outlined
            label="شهر"
            placeholder="ساری"
            prepend-inner-icon="lni lni-map-marker"
            color="#333"
          ></v-text-field
        ></v-col>
        <v-col cols="12" class="pa-0 pa-md-3"
          ><v-text-field
            rounded
            outlined
            label="آدرس"
            placeholder="ایران،مازندران،ساری"
            prepend-inner-icon="lni lni-map"
            color="#333"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-col> </v-col>
      <v-row>
        <v-col cols="12" class="pa-0 pa-md-3" md="6"
          ><v-text-field
            rounded
            outlined
            label="طول جغرافیایی"
            placeholder="36.325"
            prepend-inner-icon="lni lni-map-marker"
            color="#333"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="pa-0 pa-md-3" md="6">
          <v-text-field
            rounded
            outlined
            label="عرض جغرافیایی"
            placeholder="12.235"
            prepend-inner-icon="lni lni-map-marker"
            color="#333"
          ></v-text-field
        ></v-col>

        <v-btn
          @click="showMap = !showMap"
          color="#388AEA"
          elevation="0"
          text
          class="ma-auto primaryBtn mt-n10"
        >
          انتخاب طول و عرض جغرافیایی از روی نقشه
        </v-btn>
      </v-row>
    </v-col>

    <v-col cols="12" class="mt-auto d-flex overflow-hidden">
      <div class="divider"></div>

      <v-btn
        @click="
          $store.commit('INCREASE_ACTIVE_TAB');
          $emit('submit-form');
        "
        color="#388AEA"
        elevation="0"
        class="nextBtn mr-auto"
      >
        ثبت نام
        <v-icon class="mr-5" size="20">lni lni-checkmark</v-icon>
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
    <!-- =====START:show default map dialog===== -->
    <v-dialog v-model="showMap" max-width="900">
      <v-card class="mapCard rounded-16 pa-6" min-width="100%">
        <v-img :src="require('@/assets/images/map.png')"></v-img>

        <div class="mapAction">
          <v-btn
            dark
            color="#B4B4B4"
            elevation="0"
            class="primaryBtn mx-4"
            @click="showMap = false"
          >
            بستن
          </v-btn>
          <v-btn dark color="#EA8E38" elevation="0" class="primaryBtn mx-4">
            ثبت موقعیت
            <v-icon class="mr-5" size="20">lni lni-arrow-left</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
    <!-- =====START:show default map dialog===== -->
  </v-col>
  <!-- =====START:step 3 for stepper===== -->
</template>

<script>
export default {
  data() {
    return {
      showMap: false,
    };
  },
};
</script>
