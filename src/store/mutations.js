import { cloneDeep } from 'lodash'

export default {
  UPDATE_TASKS_DATA(state, data) {
    let currTasks = cloneDeep(state.tasks)
    currTasks.forEach((task) => {
      if (task.id === data.key) {
        task.status = data.updatedStatus
      }
    })
    state.tasks = currTasks
  },
}
