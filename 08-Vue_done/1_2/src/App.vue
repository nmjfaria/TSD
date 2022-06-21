<template>
   <Header @clicked="handleClick"/>
   <div class="content">
      <input
         v-model="booksName"
         type="text"
         placeholder="Insert the book's name"
         style="width: 50%"
      />
      <input v-model="booksRead" type="checkbox" id="read" name="read" checked />
      <label for="read">Is book read?</label>
      <br /><br />
      <button type="button" @click="addNewBook">Add book</button>
      <br /><br />
      <Booklist :books="books"></Booklist>
   </div>

   <Footer />
</template>

<script>
import Booklist from "./components/Booklist.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import {defineComponent, ref} from "vue";

export default defineComponent({
   name: "App",
   components: {
      Booklist,
      Footer,
      Header
   },
   setup() {
      const booksName = ref("");
      const booksRead = ref(true);

      const books = ref([]);

      const addNewBook = () => {
         if (booksName.value !== "") {
            books.value.push({name: booksName.value, read: booksRead.value});
            booksName.value = "";
         }
      };

      const handleClick= () => {
        console.log('MENU CLICKED');
      }

      return {
         addNewBook,
         booksName,
         booksRead,
         books,
         handleClick
      };
   }
});
</script>



<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
}

.content{
  margin: 10%;
}
</style>
