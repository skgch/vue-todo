<template>
  <div class="hello">
    <v-date-picker v-model="picker" color="green lighten-1" header-color="primary"></v-date-picker>
    <v-app>
      <v-card>
        <v-card-text>
          <v-slider v-model="value" thumb-label step="1" max="24" ticks></v-slider>
        </v-card-text>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      picker: null,
      value: 0
    }
  },
  watch: {
    picker () {
      console.log(this.picker)
    },
    value () {
      console.log(this.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
