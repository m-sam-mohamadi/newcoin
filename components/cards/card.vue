<template>
  <!-- =====START:card component for show data in slider===== -->
  <div class="cardComponent">
    <v-col cols="12" class="d-flex px-0 flex-column align-center">
      <div class="d-flex align-center px-5" style="width: 100%">
        <v-avatar>
          <v-img :src="image"></v-img>
        </v-avatar>
        <div style="width: 100%" class="d-flex justify-space-between">
          <div class="d-flex mx-2 flex-column">
            <div class="cardTitle">{{ name }}</div>
            <div class="cardSubTitle">{{ symbol }}</div>
          </div>
          <div class="d-flex mx-2 align-end flex-column">
            <div class="profit">
              {{ priceChange }}
            </div>
            <div class="price">${{ currentPrice }}</div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-center align-center pa-0 mt-5 mb-n2">
        <highchart
          :options="chartOptions"
          :update="['options.title', 'options.series']"
        />
      </div>
    </v-col>
  </div>
  <!-- =====end:card component=====  -->
</template>

<script>
export default {
  props: ["priceChange", "currentPrice", "name", "symbol", "image", "chartData"],
  data() {
    return {
      //highchart options
      chartOptions: {
        chart: {
          type: "areaspline",
          zoomType: "x",
          height: 120,
          width: 280,
        },
        title: {
          text: "",
          align: "left",
        },
        credits: {
          enabled: false,
        },

        yAxis: {
          visible: false,
        },
        exporting: {
          enabled: false,
        },
        xAxis: {
          visible: false,
        },
        legend: {
          visible: false,
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: true,
            },
            color: "#2AC479",
            pointStart: 2000,
          },
          areaspline: {
            fillColor: {
              linearGradient: { x1: 1, x2: 1, y1: 1, y2: 0 },
              stops: [
                [0, "transparent"],
                [1, "#2ac47a96"],
              ],
            },
            marker: {
              radius: 3,
              fillColor: "#FFFFFF",
            },
            lineWidth: 3,
            threshold: null,
          },
        },
        series: [
          {
            name: "",
            showInLegend: false,
            data: this.chartData,
          },
        ],
      },
    };
  },
  mounted() {
    //changing color when price is negative
    if (this.priceChange < 0) {
      document
        .querySelectorAll(".cardComponent .profit")
        .forEach((e) => (e.style.color = "#EA3838"));
    }
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/components/card.scss";
</style>
