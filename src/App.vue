<template>
  <div id="app">
    <div class="header-content">
      <div class="img-h1">
        <img src="https://i.ya-webdesign.com/images/nasa-logo-transparent-background-png-2.png"/>
        <h1>'s Photo of the Day</h1>
      </div>
      <Form v-on:dateSelection="selectDate"/>
    </div>
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

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.img-h1 {
  align-items: center;
  display: flex;
}

.header-content {
  display: flex;
  height: 80px;
  justify-content: space-between;
  margin-bottom: 10px;
}

img {
  box-sizing: border-box;
  width: 200px;
}

h1 {
  margin-left: -60px;
  font-size: 1.4em;
}
</style>
