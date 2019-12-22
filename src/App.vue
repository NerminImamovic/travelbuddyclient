<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
      <b-navbar-brand><router-link to="/rooms" class="navbar-item">Reserve a room </router-link></b-navbar-brand>
      <b-navbar-brand><router-link to="/cars" class="navbar-item">Rent a car </router-link></b-navbar-brand>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import VueRouter from 'vue-router'
import VueElementLoading from 'vue-element-loading'

import RentACar from './components/RentACar.vue'
import ReserveARoom from './components/ReserveARoom.vue'

export default {
  name: 'app',
  components: {
    VueElementLoading,
    RentACar,
    ReserveARoom
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
