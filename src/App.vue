<template>
  <div id="app">
    <h1>NASA's Photo of the Day</h1>
    <Form v-on:dateSelection="selectDate"/>
    <DailyPhoto v-bind:photo="dailyImage"/>
  </div>
</template>

<script>
import DailyPhoto from './components/DailyPhoto.vue'
import Form from './components/Form.vue'
import { dailyImage, dailyImageOnDate } from '../apiCalls'

export default {
  name: 'app',
  components: {
    DailyPhoto,
    Form
  },
  data() {
    return {
      dailyImage: {},
      date: '',
    }
  },
  methods: {
    selectDate(date) {
      this.date = date;
      dailyImageOnDate(this.date)
        .then(res => this.dailyImage = res)
        .catch(error => console.error(error))
    },
  },
  mounted() {
    dailyImage()
      .then(res => this.dailyImage = res)
      .catch(error => console.error(error))
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
