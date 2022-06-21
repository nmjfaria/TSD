<template>
   <div class="hello">USD: {{usdVal}} | EUR: {{eurVal}} | </div>
</template>

<script>
import {onMounted, ref} from "vue";
export default {
   name: "HelloWorld",
   props: {},
   setup() {
      const eurVal = ref();
      const usdVal = ref();
      // Simple POST request with a JSON body using fetch
      onMounted(() => {
         const requestOptions = {
            method: "GET",
            headers: {
               "Content-Type": "application/json",  
            }
         };
         fetch("https://api.nbp.pl/api/exchangerates/rates/a/EUR/?format=json", requestOptions)
            .then((response) => response.json())
            .then((data) => (eurVal.value = data.rates[0].mid));

         fetch("https://api.nbp.pl/api/exchangerates/rates/a/USD/?format=json", requestOptions)
            .then((response) => response.json())
            .then((data) => (usdVal.value = data.rates[0].mid));
      });

      return {
        eurVal,
        usdVal
      }
   }
};
</script>
