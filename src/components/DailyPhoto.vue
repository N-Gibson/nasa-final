<template>
  <div class="daily-photo">
    <!-- <h2 class="daily-photo-title"><span class="preface">Title: </span>{{ this.photo.title }}</h2> -->
    <img v-bind:src="photo.url"/>
    <!-- <p class="daily-photo-date"><span class="preface">Date: </span>{{ this.photo.date }}</p>
    <p class="daily-photo-explanation"><span class="preface">Explanation: </span>{{ this.photo.explanation }}</p> -->
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
  /* margin: 0px; */
}

.daily-photo-title {
  padding-left: 10px;
  text-align: left;
}

.daily-photo-date {
  font-size: 1.2em;
  padding-left: 10px;
  text-align: left;
}

.daily-photo-explanation {
  font-size: 1.5em;
  padding-left: 10px;
  text-align: left;
}

.preface {
  font-size: 1.6em;
  font-weight: 800;
}
</style>
