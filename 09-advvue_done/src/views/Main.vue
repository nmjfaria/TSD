<template>
  <AddTask @newtask="addNewTask"/>
  <ListTasks :tasks="store.state.tasks"/>
</template>

<script>
import AddTask from '../components/AddTask'
import ListTasks from '../components/ListTasks'
import {ref} from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Home',
  components: {
    AddTask,
    ListTasks
  },
  setup(){
    const store = useStore()

    const addNewTask = (task) => {
      store.commit('addTask', task)
      console.log('Added task. Store:', store.state.tasks);
    }

    return{
      addNewTask,
      store
    }
  }
}
</script>

<style>
.main{
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 5%;
}

</style>
