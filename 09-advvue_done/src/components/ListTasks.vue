<template>
   <div class="float-beginning mt-2">
      <input v-model="search" type="text" placeholder="Search task..." />
   </div>
   <div class="card mt-3" style="width: 100%">
      <ul class="list-group list-group-flush">
         <li
            v-for="(task, i) in filteredTasks"
            :key="i"
            class="list-group-item clickable"
            :class="{'text-decoration-line-through text-muted done': task.finished}"
            @click="showDetails(task)"
         >
            {{ task.name }}
            <div v-if="task.finished" class="float-end">
               <i>done</i>
            </div>
         </li>
      </ul>
   </div>
</template>

<script>
import {defineComponent, computed, ref} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
   props: {
      tasks: Array
   },
   setup(props) {
      const router = useRouter();
      const search = ref("")

      const filteredTasks = computed(() => {
        console.log('entrei');
        if(search.value.trim() === "")
          return props.tasks
        else{
          const pat = new RegExp(search.value.trim())
          return props.tasks.filter(function (val) { return pat.test(val.name); });
        }
      })

      const showDetails = (task) => {
         router.push({name: "Details", params: {id: task.id, task: JSON.stringify(task)}});
      };

      return {
         showDetails,
         search,
         filteredTasks
      };
   }
});
</script>

<style>
.clickable {
   cursor: pointer;

   :hover {
      background-color: rgb(232, 232, 232) !important;
   }
}

.clickable:hover {
   background-color: rgb(243, 243, 243) !important;
}

.done {
   background-color: rgb(216, 216, 216) !important;
}

.done:hover {
   background-color: rgb(216, 216, 216) !important;
}
</style>
