<template>
  <div class="container" style="background: rgba(0, 0, 0, .05); padding: 1em; border-radius: .4em; border: 1px solid rgba(0, 0, 0, .1); width: 45%; margin: auto; margin-top: 4em;">

    <vue-element-loading :active="loading" spinner="spinner" :is-full-screen="true" text="Data is loading, please wait." />

    <b-table striped hover :items="cars" :fields="fields"></b-table>

  </div>
</template>

<script>
import axios from 'axios';
import * as moment from 'moment';
import datepicker from 'vuejs-datepicker';
import VueElementLoading from 'vue-element-loading'

export default {
  name: 'Cars',
  components: {
      VueElementLoading
  },
  data () {
    return {
      fields: ["name", "type", "date"],
      loading: false,
      cars: [],
      error: null
    }
  },
  async created () {
    // fetch the data when the view is created and the data is
    // already being observed
    await this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    async fetchData () {
      this.error = this.post = null
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper

      try {
       const result = await axios.get("http://localhost:5000/api/cars");
        this.cars = result.data.map((car) => {

          car.date = moment(car.date).format('MM/DD/YYYY');
          return car;
        });

      } catch(error) {
        this.error = JSON.stringify(error);
      }

      console.log("Cars " + JSON.stringify(this.cars));

      this.loading = false;

    }
  }
}

</script>