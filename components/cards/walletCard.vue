<template>
  <!-- ====START:component for wallet chart===== -->
  <v-card elevation="0" class="walletCard">
    <h4 class="mt-6">دارایی‌های کیف پول</h4>
    <highchart :options="chartOptions" :update="['options.title', 'options.series']" />
  </v-card>
  <!-- ====END:component for wallet chart===== -->
</template>

<script>
export default {
  data() {
    return {
      //highchart options
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          height: 180,
        },

        legend: {
          align: "right",
          verticalAlign: "top",
          layout: "vertical",
          x: 0,
          y: 20,
          itemMarginBottom: 10,
          title: {
            style: {
              fontWeight: "bold",
              color: "white",
              textShadow: "none",
              fontFamily: "sans-serif",
              fontSize: "14px",
              textOutline: "transparent",
            },
          },
        },
        credits: {
          enabled: false,
        },
        exporting: {
          enabled: false,
        },
        title: {
          text: " ",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },

        plotOptions: {
          pie: {
            colorByPoint: true,
            size: 170,
            dataLabels: {
              enabled: true,
              distance: -50,
              style: {
                fontWeight: "bold",
                color: "white",
                textShadow: "none",
                fontFamily: "sans-serif",
                fontSize: "14px",
                textOutline: "transparent",
              },
            },
          },
        },
        colors: [],
        series: [
          {
            name: " ",
            showInLegend: true,
            data: [],
          },
        ],
      },
      walletData: null,
    };
  },
  methods: {
    //request for load wallet data from MOCKAPI
    async loadWallet() {
      const res = await this.$axios.get(
        "https://63f44f1a864fb1d60025d0cb.mockapi.io/api/v1/cryptowallet"
      );
      this.walletData = res.data;
      this.saveWallet();
      for (let i = 0; i < this.walletData.length; i++) {
        this.chartOptions.series[0].data.push([
          this.walletData[i].name,
          this.walletData[i].percentage,
        ]);
        this.chartOptions.colors.push(this.walletData[i].color);
      }
    },
    //saving wallet data in localStorage
    saveWallet() {
      if (process.browser) {
        let wallet = localStorage.setItem("wallet", JSON.stringify(this.walletData));
      }
    },
    //getting wallet data from localStorage
    getWalletData() {
      if (process.browser) {
        let wallet = JSON.parse(localStorage.getItem("wallet") || "{}");
        return wallet;
      }
    },
  },
  //fetch request
  async fetch() {
    await this.loadWallet();
  },
};
</script>
