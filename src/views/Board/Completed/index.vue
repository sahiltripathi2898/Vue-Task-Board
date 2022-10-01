<template>
  <div id="completed-container">
    <div id="completed-header">
      <h3>Completed</h3>
    </div>
    <div id="completed-content">
      <div v-for="task in getTasksInCompletedStatus" :key="task.id">
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
    getTasksInCompletedStatus() {
      let tasks = cloneDeep(this.$store.state.tasks)
      tasks = tasks.filter((task) => task.status === 'completed')
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
#completed-header {
  text-align: center;
}
#completed-container {
  padding: 10px;
  min-height: 500px;
  width: 350px;
  border: 2px black solid;
}
</style>
