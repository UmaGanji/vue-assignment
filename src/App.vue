<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Hellowizard msg="Welcome to Your Vue.js App"/> -->
    <!-- <wizard></wizard> -->
    <wizardTask></wizardTask>
  </div>
</template>

<script>
// import wizard from './examples/ac-wizard-task'
import wizardTask from './examples/wizard-task'
export default {
  name: 'App',
  components: {
    wizardTask
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
