<script setup>
/*
import TheWelcome from '../components/TheWelcome.vue'
import {ref} from "vue";
import {useFlash} from "@/composables/useFlash";

let message = ref("Hello world");
let {flash} = useFlash();
setTimeout(() => {
  message.value = 'Hi!';
}, 2500)
*/
import {ref,watch} from "vue";
import {useStorage} from "@/composables/useStorage";
let food = useStorage('food');
// let food = ref(localStorage.getItem('food'));
// let age = ref(localStorage.getItem('age'));
// watch(food,() => {
//   write('food',food.value)
// })
// watch(age,() => {
//   write('age',age.value)
// })
// function write(key,val){
//   localStorage.setItem(key,val)
// }
// setTimeout(()=>{
//   food.value = 'changed!';
// },2000);
</script>

<template>
  <main>
    <p>What`s your favourite food? <input type="text" v-model="food"></p>
    <p>How old are you? <input type="text" v-model="age"></p>
  </main>
</template>
