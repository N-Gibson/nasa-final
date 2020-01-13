<template>
  <div class="daily-photo">
    <img v-bind:src="photo.url"/>
    <p>{{ this.photo }}</p>
  </div>
</template>

<script>
export default {
  name: 'DailyPhoto',
  props: {
    photo: {},
  }
}
</script>

<style scoped>
.daily-photo {
  border: 1px solid black;
}
</style>
