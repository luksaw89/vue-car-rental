import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import CarsPage from './components/CarsPage';
import ClientsPage from './components/ClientsPage';
import CarPage from './components/CarPage';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/cars' },
  { path: '/cars', component: CarsPage },
  { path: '/cars/:id', component: CarPage },
  { path: '/clients', component: ClientsPage },
];

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');

