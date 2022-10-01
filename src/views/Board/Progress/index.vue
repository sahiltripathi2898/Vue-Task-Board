<template>
  <div id="progress-container">
    <div id="progress-header">
      <h3>In Progress</h3>
    </div>
    <div id="progress-content">
      <div v-for="task in getTasksInProgressStatus" :key="task.id">
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
    getTasksInProgressStatus() {
      let tasks = cloneDeep(this.$store.state.tasks)
      tasks = tasks.filter((task) => task.status === 'progress')
      return tasks
    }
  },
  methods: {
    onCardStatusChange(id, status) {
      this.$store.dispatch('updateTasksData', {
        key: id,
        updatedStatus: status
      })
    }
  }
}
</script>

<style scoped>
#progress-header {
  text-align: center;
}
#progress-container {
  padding: 10px;
  min-height: 500px;
  width: 350px;
  border: 2px black solid;
}
</style>
