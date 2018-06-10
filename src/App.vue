<template>
  <div id="app">
    <!-- <router-view/> -->
    <v-app dark>
      <tool-bar/>
      <v-container>
        <todo-list/>
        <sample-a/>
        <sample-b/>
        <h1>{{ message }}</h1>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import ToolBar from './components/Toolbar'
import SampleA from './components/SampleA'
import SampleB from './components/SampleB'
export default {
  name: 'App',
  components: {
    ToolBar,
    TodoList,
    SampleA,
    SampleB
  },
  computed: {
    message () {
      return this.$store.getters.message
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
