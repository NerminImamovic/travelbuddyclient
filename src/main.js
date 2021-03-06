import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Cars from './components/Cars.vue'
import RentACar from './components/RentACar.vue'
import ReserveARoom from './components/ReserveARoom.vue'
import Rooms from './components/Rooms.vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/rentacar', component: RentACar },
  { path: '/reservearoom', component: ReserveARoom },
  { path: '/cars', component: Cars },
  { path: '/rooms', component: Rooms },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
