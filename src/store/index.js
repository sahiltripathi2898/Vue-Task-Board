import state from './state'
import actions from './actions'
import mutations from './mutations'

import { createStore } from 'vuex'

const store = createStore({
  state,
  actions,
  mutations
})

export default store
