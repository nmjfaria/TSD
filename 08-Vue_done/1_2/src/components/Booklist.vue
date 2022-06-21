<template>
  <div v-for="book in books" :key="book.name" >
    <b>{{book.name}}</b> - <span :class="{ read: book.read, notRead: !book.read }">{{book.read ? "Read" : "Not read"}}</span>
  </div>
</template>

<script>
export default {
  name: 'Booklist',
  props: {
    books: Array
  },
  setup (props) {
    console.log('props', props);
    return {

    }
  }
}
</script>

<style>
.read{
  background-color: rgb(172, 238, 172);
}
.notRead{
  background-color: rgb(243, 155, 155);
}
</style>


