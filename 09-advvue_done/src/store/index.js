import { createStore } from 'vuex'

export default createStore({
  state: { //Store the data
    tasks: [
      {
        id:1,
        name: "Task 1",
        description: "This is the description of task 1",
        finished: false
      },
      {
        id:2,
        name: "Task 2",
        description: "This is the description of task 2",
        finished: false
      },
      {
        id:3,
        name: "Task 3",
        description: "This is the description of task 3",
        finished: true
      },
      {
        id:4,
        name: "Task 4",
        description: "This is the description of task 4",
        finished: true
      }
    ]
  },
  mutations: { //methods that change the data in the state, just sync
    addTask(state, task) {
      state.tasks.push(task)
    },
    removeTask(state, index) {
      state.tasks = state.tasks.slice(index, 1)
    },
    markAsFinished(state, index) {
      console.log('as finished', index);
      state.tasks.find(e => e.id === index).finished = true
    },
    initialiseStore(state) {
      // Check if the ID exists
      if (localStorage.getItem('store')) {
        // Replace the state object with the stored item
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
      }
    }

  },
  actions: { //cant change data in the state, only access. Do a mutation to change the state. Here it's allowed async
  },
  getters: { //get data from state
  },
  modules: { //Break up our store into multiple modules
  }
})
