<template>
 <div>
   <h2>SampleB</h2>
   <!-- <p>{{ text }}</p> -->
 </div>
</template>

<script>
export default {
  name: 'sample-b',
  data () {
    return {
    }
  },
  computed: {
    text () {
      return this.$store.state.message
    }
  },
  watch: {
    text () {
      console.log('watched' + this.$store.state.message)
    }
  },
  methods: {
    update () {
      console.log(this.$store.getters.message)
      this.$store.commit('setMessage', 'hello world')
      console.log(this.$store.getters.message)
    }
  }
}
</script>

<style>

</style>
