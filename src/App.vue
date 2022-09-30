<template>
  <div>
    Hello World
    {{getName}}
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    getName() {
      return this.$store.state.name
    }
  }
}
</script>

<style>

</style>
