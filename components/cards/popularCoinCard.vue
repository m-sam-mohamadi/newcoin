<template>
  <!-- =====START:show trending coins component===== -->
  <v-card elevation="0" class="popularCard">
    <div class="cardHeader">
      <h4>محبوب ترین کوین ها</h4>
      <v-select
        v-model="select"
        :items="items"
        :item-value="items[0]"
        label="هفته "
        single-line
        style="max-width: 110px"
        class="mb-n7 primaryBtn pa-2"
        outlined
      ></v-select>
    </div>
    <!-- =====START:table for show data===== -->
    <v-simple-table v-show="trendingData">
      <thead>
        <tr>
          <th class="text-right text-h6 text--black" style="color: black">نام</th>
          <th
            class="text-center text-h6 text--black"
            style="color: black; word-break: keep-all; white-space: nowrap"
          >
            حجم مارکت
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in trendingData" :key="item.length">
          <td class="py-3">
            <div class="d-flex align-center">
              <v-avatar size="40">
                <v-img :src="item.item.large"></v-img>
              </v-avatar>
              <div class="cardTitle mx-2">{{ item.item.name }}</div>
              <div class="cardSubTitle">{{ item.item.symbol }}</div>
            </div>
          </td>
          <td class="text-center price">${{ item.item.market_cap_rank }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    <!-- =====END:table for show data===== -->
    <div class="fadeLayer"></div>
  </v-card>
  <!-- =====END:show trending coins component===== -->
</template>

<script>
export default {
  data() {
    return {
      select: ["هفته"],
      items: ["هفته", "روز", "ماه"],
      trendingData: null,
    };
  },
  methods: {
    //request method for trend coins
    getTrendingCoins() {
      return fetch("https://api.coingecko.com/api/v3/search/trending", {
        headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
      });
    },
  },
  //call method for request data
  async fetch() {
    await this.getTrendingCoins()
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.trendingData = res.coins;
      });
  },
};
</script>
