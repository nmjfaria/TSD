<template>
  <div class="title" @click="$emit('clicked')">{{title}}</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props:{
    title: String,
  },
  setup(props,{emit}) {
    
  },
})
</script>

<style>
  .title{
    margin-left:15px;
    margin-right: 15px;
    cursor: pointer;
  }
</style>
