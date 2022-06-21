<template>
   <div class="header">
      <div class="title">Book Recorder - Copyright 2022</div>
      <MenuItem title="Menu1" @clicked="$emit('clicked')"/>
      <MenuItem title="Menu2"  @clicked="$emit('clicked')"/>
      
   </div>
</template>

<script>
import { defineComponent, emit } from 'vue'
import MenuItem from './MenuItem.vue'
export default defineComponent({
  props:{},
  components:{
    MenuItem
  },
  setup(props, {emit}) {
    
  },
})
</script>


<style >
.header {
   position: absolute;
   top: 0;
   width: 100%;
   height: 60px; /* Height of the footer */
   background: rgb(228, 228, 228);
   display: flex;
   align-items: center;
   justify-content: flex-start;
}
</style>
