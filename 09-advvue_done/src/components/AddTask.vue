<template>
   <div>
      <div class="text-center">
            <button
               type="button"
               class="btn btn-primary"
               data-bs-toggle="modal"
               data-bs-target="#exampleModal"
               @click="adding = true"
            >
               Add Task
            </button>
      </div>

      <div
         class="modal fade"
         id="exampleModal"
         tabindex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
      >
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add task</h5>
                  <button
                     type="button"
                     class="btn-close"
                     data-bs-dismiss="modal"
                     aria-label="Close"
                     id="close"
                  ></button>
               </div>
               <div class="modal-body">
                  <div class="row m-2">
                     <input v-model="task.name" type="text" placeholder="Task title..." />
                  </div>
                  <div class="row m-2">
                     <textarea
                        v-model="task.description"
                        type="textarea"
                        placeholder="Task description..."
                     />
                  </div>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                     Close
                  </button>
                  <button
                     type="button"
                     class="btn btn-primary"
                     :disabled="task.name.trim().length === 0"
                     @click="addTask"
                  >
                     Add
                  </button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import {defineComponent, ref} from "vue";

export default defineComponent({
   setup(props, {emit}) {
      const task = ref({id: Math.floor(Math.random() * 100)*Date.now(), name: "", description: "", done:false});

      const addTask = () => {
         emit("newtask", task.value);
         task.value = {id: Math.floor(Math.random() * 100)*Date.now(), name: "", description: "", done:false};
         document.getElementById("close").click();
      };

      return {
         task,
         addTask
      };
   }
});
</script>


<style >
.center {
   margin: auto;
}
</style>