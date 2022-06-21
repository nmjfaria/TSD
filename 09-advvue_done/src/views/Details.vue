<template>
   <h1>{{ task.name }} - {{task.finished ? 'Finished' : 'Not finished'}}</h1>
   <h5>{{ task.description }}</h5>

   <button :disabled="task.finished" type="button" class="btn btn-primary  mt-5" @click="markAsFinished">Mark as finished</button>
</template>

<script>
import {defineComponent} from "vue";
import {useRoute} from "vue-router";
import { useStore } from 'vuex'

export default defineComponent({
   setup(props) {
      const store = useStore()

      const route = useRoute();
      const id = JSON.parse(route.params.id);
      const task = store.state.tasks.find(e => e.id === id)

      const markAsFinished = () => {
        store.commit('markAsFinished', id)
      }

      return {
         store,
         task,
         markAsFinished
      };
   }
});
</script>

