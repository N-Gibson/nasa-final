<template>
  <div id="app">
    <DailyPhoto v-bind:photo="dailyImage"/>
  </div>
</template>

<script>
import DailyPhoto from './components/DailyPhoto.vue'
import { dailyImage } from '../apiCalls'

export default {
  name: 'app',
  components: {
    DailyPhoto
  },
  data() {
    return {
      dailyImage: {},
    }
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
