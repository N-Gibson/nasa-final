<template>
  <div class="daily-photo">
    <h2 class="daily-photo-title" v-show="show === true"><span class="preface">Title: </span>{{ this.photo.title }}</h2>
    <img class="daily-image" @mouseover="show = true" @mouseout="show = false" v-bind:src="photo.hdurl"/>
    <p class="daily-photo-explanation" v-show="show === true"><span class="preface">Explanation: </span>{{ this.photo.explanation }}</p>
  </div>
</template>

<script>
export default {
  name: 'DailyPhoto',
  props: {
    photo: {},
    show: false,
  },
}
</script>

<style lang="scss">
.daily-photo {
  grid-area: photo;
}

.daily-photo-title {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: #fff;
  left: 100px;
  padding: 10px;
  position: absolute;
  text-align: left;
}

.daily-image {
  display: block;
  height: 90vh;
  margin: auto;
  width: 90vw;
    &:hover {
      cursor: pointer;
    }
}

.daily-photo-explanation {
  background: rgba(0, 0, 0, 0.7);
  bottom: -60px;
  border-radius: 10px;
  color: #fff;
  font-size: 1.5em;
  left: 100px;
  padding: 10px;
  padding-left: 10px;
  position: absolute;
  right: 70px;
  text-align: left;
}

.preface {
  font-size: 1.6em;
  font-weight: 800;
}
</style>
