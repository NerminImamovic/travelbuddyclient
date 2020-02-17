<template>
  <div class="container" style="background: rgba(0, 0, 0, .05); padding: 1em; border-radius: .4em; border: 1px solid rgba(0, 0, 0, .1); width: 45%; margin: auto; margin-top: 4em;">

    <vue-element-loading :active="loading" spinner="spinner" :is-full-screen="true" text="Data is loading, please wait." />

    <b-table striped hover :items="rooms" :fields="fields"></b-table>

  </div>
</template>

<script>
import * as moment from 'moment';
import axios from 'axios';
import datepicker from 'vuejs-datepicker';
import VueElementLoading from 'vue-element-loading'

export default {
  name: 'Rooms',
  components: {
      VueElementLoading
  },
  data () {
    return {
      fields: ["name", "city", "type", "date"],
      loading: false,
      rooms: [],
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
        const result = await axios.get("http://localhost:5000/api/rooms");
        this.rooms = result.data.map((room) => {

          room.date = moment(room.date).format('MM/DD/YYYY');
          return room;
        });
      } catch(error) {
        this.error = JSON.stringify(error);
      }

      this.loading = false;

    }
  }
}

</script>