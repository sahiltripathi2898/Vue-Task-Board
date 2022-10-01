<template>
  <div>
    <div id="home-header">
      <h1>Platform Task Board</h1>
    </div>
    <div id="board-container">
      <Selected/>
      <Progress/>
      <Completed/>
    </div>
  </div>
</template>

<script>
import Selected from './Selected/index.vue'
import Progress from './Progress/index.vue'
import Completed from './Completed/index.vue'

export default {
  components: {
    Selected, Progress, Completed
  }
}
</script>

<style scoped>

#home-header{
  text-align: center;
  padding: 20px;
}

#board-container{
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
}

</style>