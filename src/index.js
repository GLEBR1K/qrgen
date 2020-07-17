import 'core-js/stable/promise';

import Vue from 'vue';
import VueI18Next from 'vue-i18next';

import App from './App.vue';
import i18n from './localization';
import themeHelper from './utils/theme';

themeHelper.refreshTheme();

i18n.init();
Vue.use(VueI18Next);

new Vue({
  i18n: new VueI18Next(i18n.$),
  render: (h) => h(App),
}).$mount('#app');
