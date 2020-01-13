<template>
  <div class="form">
    <h2>Select a date to view a different daily photo!</h2>
    <input type="date" v-model="userDate" v-on:change="dateToApp"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userDate: '',
    }
  },
  methods: {
    dateToApp(event) {
      this.$emit('dateSelection', this.userDate)
    },
  },
}
</script>

<style>
.form {
  width: 35%;
}

input {
  font-size: 1em;
  padding-left: 50px;
  text-align: center;
  width: 50%;
}
</style>