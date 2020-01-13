<template>
  <div class="form">
    <h2>Select a date to view a different daily photo!</h2>
    <input type="date" v-model="userDate"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userDate: '',
    }
  },
}
</script>

<style>

</style>