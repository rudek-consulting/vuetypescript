import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;

store.dispatch.mod1.loadP1({ id: 'initialer Wert' });
// store.dispatch.mod1.loadP1({ id: 'initialer Wert' });
// store.original.direct.dispatch.mod1.loadP1({ id: 'test' });
new Vue({
  router,
  store: store.original,
  render: h => h(App)
}).$mount('#app');
