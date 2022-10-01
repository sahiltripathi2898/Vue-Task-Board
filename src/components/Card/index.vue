<template>
  <div id="card-container">
    <div id="card-top">
      <div id="card-top-box">
        <div>{{ cardDetails.title }}</div>
        <div id="card-select-dropdown">
          <select name="status-select" @change="onSelectChange">
            <option value="selected">Selected</option>
            <option value="progress">Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
    </div>
    <div id="card-bottom">{{ cardDetails.description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    cardDetails: {
      type: Object,
      default: () => {},
    },
    status: {
      type: String,
      default: '',
    },
  },
  methods: {
    onSelectChange(event) {
      this.$emit('select-change', this.cardDetails.id, event.target.value)
    },
  },
}
</script>

<style scoped>
#card-container {
  border: 2px solid blue;
  margin: 15px 20px;
  padding: 20px 10px;
  border-radius: 5px;
}
#card-top-box {
  display: flex;
  justify-content: space-between;
  margin: 5px 0px;
}
#card-bottom {
  margin-top: 25px;
}
</style>
