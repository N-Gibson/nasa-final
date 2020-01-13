<template>
  <div class="daily-photo">
    <h2>Title: {{ this.photo.title }}</h2>
    <img v-bind:src="photo.url"/>
    <p>Date: {{ this.photo.date }}</p>
    <p>Explanation: {{ this.photo.explanation }}</p>
  </div>
</template>

<script>
export default {
  name: 'DailyPhoto',
  props: {
    photo: {},
  },
}
</script>

<style scoped>
.daily-photo {
  border: 1px solid black;
}
</style>
