<template>
  <img alt="Vue logo" src="./assets/logo.png"> 
  <joke-item :currentJoke="jokes.goodJoke"></joke-item>
</template>

<script>
import JokeItem from './components/joke/JokeItem.vue'
export default {
  components: { JokeItem },
  name: 'App',
  computed: {
    jokes(){
      return this.$store.getters['joke/jokes']
    }
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
