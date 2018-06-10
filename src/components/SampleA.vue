<template>
  <v-btn @click="update"></v-btn>
</template>

<script>
export default {
  name: 'sample-a',
  methods: {
    update () {
      // console.log(this.$store.getters.message)
      this.$store.commit('setMessage', 'hello world')
      // console.log(this.$store.getters.message)
    }
  }
}
</script>

<style>

</style>
