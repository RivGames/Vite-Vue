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
import {useStorage} from "@/composables/useStorage";
let food = useStorage('food','borsch');
let age = useStorage('age',18);
</script>

<template>
  <main>
    <p>What`s your favourite food ? <input type="text" v-model="food"></p>
    <p>What`s your age ? <input type="text" v-model="age"></p>
  </main>
</template>
