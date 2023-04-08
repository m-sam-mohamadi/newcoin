<template>
  <!-- =====START:market cap component===== -->
  <v-card elevation="0" class="costCard">
    <h4 class="mt-6">ارزش معاملات هفته گذشته</h4>
    <highchart :options="chartOptions" :update="['options.title', 'options.series']" />
    <!-- =====END:market cap component===== -->
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      //highchart options
      chartOptions: {
        chart: {
          type: "column",
          zoomType: "x",
          height: 180,
          renderTo: "chart",
        },
        title: {
          text: "",
          align: "left",
        },
        credits: {
          enabled: false,
        },

        yAxis: {
          visible: true,
          title: {
            text: "",
          },
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
          column: {
            borderRadius: 5,
          },
        },
        series: [
          {
            name: "",
            showInLegend: false,
            type: "column",
            pointWidth: 16,
            borderColor: "transparent",
            borderWidth: 0,
            color: {
              linearGradient: { x1: 1, x2: 1, y1: 1, y2: 0 },
              stops: [
                [0, "transparent"],
                [1, "#388beaba"],
              ],
            },
            data: [1200, 1500, 1800, 1200, 1500, 1900, 2100, 3000, 3500, 3000, 2800],
          },
        ],
      },
    };
  },
};
</script>
