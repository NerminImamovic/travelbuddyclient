<template>
  <div class="container" style="background: rgba(0, 0, 0, .05); padding: 1em; border-radius: .4em; border: 1px solid rgba(0, 0, 0, .1); width: 45%; margin: auto; margin-top: 4em;">

    <vue-element-loading :active="active" spinner="spinner" :is-full-screen="true" text="Data is loading, please wait." />

    <b-form @submit="onSubmit" @reset="onReset">

    <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Name"
      label-for="input-horizontal"
      class="form-horizontal"
    >
      <b-form-input
        id="input-name"
        v-model="form.name"
        label-cols-sm="4"
        label-cols-lg="3"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Type"
      label-for="input-horizontal"
    >
      <b-form-input
        id="input-type"
        v-model="form.type"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Date"
      label-for="input-horizontal"
    >
      <datepicker :value="form.date" input-class="form-control"></datepicker>
    </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';
import datepicker from 'vuejs-datepicker';
import VueElementLoading from 'vue-element-loading'

  export default {
    name: 'RentACar',
    components: {
        datepicker,
        VueElementLoading
    },
    data() {
      return {
        form: {
          name: '',
          type: '',
          date: new Date(),
        },
        active: false,
      }
    },
    methods: {
      async onSubmit(evt) {

        this.active = true;

        evt.preventDefault()


        try {
          const result = await axios.post("http://localhost:5000/api/cars", {
            date: this.form.date,
            name: this.form.name,
            type: this.form.type,
          });

          alert('Reserved ' + result.data.type + ' for ' + result.data.date.split('T')[0] + '.');

          this.form.type = '';
          this.form.name = '';
          this.form.date = new Date();

          this.active = false;

        } catch(err) {
          alert(JSON.stringify(err));
        }
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.active = false;
        this.form.type = '';
        this.form.name = '';
        this.form.date = new Date();
      }
    }
  }
</script>