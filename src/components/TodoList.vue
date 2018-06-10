<template>
<!-- <v-app dark> -->
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="teal" dark>
          <v-dialog v-model="dialog" persistent max-width="500px">
            <v-btn slot="activator" color="primary" dark><v-icon>add</v-icon></v-btn>
            <!-- <v-toolbar-side-icon><v-icon>add</v-icon></v-toolbar-side-icon> -->
            <v-card>
              <v-card-title>
                <span class="headline">Add new ToDo</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12>
                      <v-text-field v-model="title" label="ToDo"></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-date-picker v-model="date" color="green lighten-1" header-color="primary"></v-date-picker>
                    </v-flex>
                  </v-layout>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" flat @click.native="submit(); dialog = false">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-toolbar-title>ToDo</v-toolbar-title>
        </v-toolbar>
        <v-list two-line subheader>
          <!-- <v-text-field v-model="value" solo label="Add ToDo" @keyup.enter="submit"></v-text-field> -->
          <!-- <v-subheader>Hangout notifications</v-subheader> -->
          <v-list-tile avatar v-for="todo in todos" :key="todo.id">
            <v-list-tile-action>
              <v-checkbox v-model="todo.isDone"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ todo.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ todo.dueDate }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon @click="deleteTodo(todo.id)">delete</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
<!-- </v-app> -->
</template>

<script>
// import { search } from './elastcsearch.js'
import axios from 'axios'

export default {
  name: 'todo-list',
  data () {
    return {
      dialog: false,
      date: '',
      title: '',
      todos: []
    }
  },

  mounted () {
    let todos = this.todos
    axios
      .get('http://localhost:9200/todos/hello/_search')
      .then(res => {
        let hits = res.data.hits.hits
        hits.forEach(element => todos.push(element._source))
      })
      .catch(err => console.log(err.message))
  },

  methods: {
    submit () {
      let obj = {
        title: this.title,
        dueDate: this.date,
        isDone: false
      }
      axios
        .post('http://localhost:9200/todos/hello', obj)
        .then(res => this.todos.push(obj))
        .catch(err => console.log(err.message))
      this.title = ''
      this.date = ''
    },
    deleteTodo (id) {
      this.todos.splice(id, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
