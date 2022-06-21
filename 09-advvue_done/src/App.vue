<template>
   <div class="main">
      <router-view />
   </div>
</template>

<script>
import { defineComponent, onBeforeMount } from 'vue'
import {useStore} from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore();

    store.commit('initialiseStore')
  },
})
</script>


<style>
.main {
   margin-left: 20%;
   margin-right: 20%;
   margin-top: 5%;
}
</style>