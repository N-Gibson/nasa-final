<template>
  <div class="daily-photo">
    <!-- <h2 class="daily-photo-title"><span class="preface">Title: </span>{{ this.photo.title }}</h2> -->
    <img class="daily-image" v-bind:src="photo.hdurl"/>
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
  grid-area: photo;
}

.daily-photo-title {
  padding-left: 10px;
  text-align: left;
}

.daily-image {
  display: block;
  height: 90vh;
  margin: auto;
  width: 90vw;
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
