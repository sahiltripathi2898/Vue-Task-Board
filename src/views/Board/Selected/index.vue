<template>
  <div id="selected-container">
    <div id="selected-header">
      <h3>Selected for development</h3>
    </div>
    <div id="selected-content">
      <div v-for="task in getTasksInSelectedStatus" :key="task.id">
        <Card :cardDetails="task" @select-change="onCardStatusChange"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../../../components/Card/index.vue'
import { cloneDeep } from 'lodash'

export default {
  components: {
    Card
  },
  computed: {
    getTasksInSelectedStatus() {
      let tasks = cloneDeep(this.$store.state.tasks)
      tasks = tasks.filter((task) => task.status === 'selected')
      return tasks
    }
  },
  methods: {
    onCardStatusChange(id, status) {
      console.log(id, status)
    }
  }
}
</script>

<style scoped>
#selected-header {
  text-align: center;
}
#selected-container {
  padding: 10px;
  height: 500px;
  width: 350px;
  border: 2px black solid;
}
</style>
