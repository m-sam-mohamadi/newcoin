<template>
  <!-- =====START:own slider component===== -->
  <div class="sliderContainer">
    <v-btn class="slideLeft" @click="prevSlide()" icon
      ><v-icon>lni lni-chevron-right-circle</v-icon></v-btn
    >
    <div class="slides">
      <slot />
    </div>
    <v-btn class="slideRight" @click="nextSlide()" icon
      ><v-icon>lni lni-chevron-left-circle</v-icon></v-btn
    >
  </div>
  <!-- =====END:own slider component===== -->
</template>

<script lang="ts">
export default {
  data() {
    return {
      i: 150,
    };
  },
  methods: {
    //scrolling to next slide method
    nextSlide() {
      const slider = document.querySelector(".slides") || undefined;
      const cardWidth: number = Number(
        document.querySelector(".cardComponent")?.clientWidth
      );
      if (slider == undefined) return;
      slider!.scrollLeft -= cardWidth;
    },
    //scrolling to previous slide method
    prevSlide() {
      const slider = document.querySelector(".slides") || undefined;
      const cardWidth: number = Number(
        document.querySelector(".cardComponent")?.clientWidth
      );
      if (!slider) return;
      slider!.scrollLeft += cardWidth;
    },
  },
  mounted() {
    //scroll slide when mouse wheeling
    const slider = document.querySelector(".slides") || undefined;
    const cardWidth: number = Number(
      document.querySelector(".cardComponent")?.clientWidth
    );
    slider?.addEventListener("wheel", (e) => {
      console.log(e);
      
      // if (e.deltaY > 0) {
      //   slider!.scrollLeft -= cardWidth;
      // } else {
      //   slider!.scrollLeft += cardWidth;
      // }
    });
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/components/slider.scss";
</style>
