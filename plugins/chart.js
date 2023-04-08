import Vue from 'vue'
import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue';
import stockInit from 'highcharts/modules/stock';

import exportingInit from 'highcharts/modules/exporting'

if (typeof Highcharts === 'object') {
    stockInit(Highcharts);
    exportingInit(Highcharts)
}

Vue.use(HighchartsVue);