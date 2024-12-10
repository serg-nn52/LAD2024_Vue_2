<template>
  <div class="counter-wrapper">Counter: {{ count }}</div>
  <div class="counter-wrapper">Other Counter: {{ otherCount }}</div>
  <div class="counter-wrapper">Double Count: {{ doubleCount }}</div>
  <button v-on:click="count++">Increment</button>
  <button @click="decrementCount">Decrement</button>
  <button @click="otherCount--">DecrementOtherCount: {{ otherCount }}</button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const count = ref<number>(0);
const otherCount = ref<number>(0);

const decrementCount = () => {
  count.value--;
};

// const doubleCount = () => {
//   console.log('call');
//   return String(count.value * 2);
// };

const doubleCount = computed<string>(() => {
  console.log('call');
  return String(count.value * 2);
});
</script>

<style scoped>
.counter-wrapper {
  color: green;
  font-size: 24px;
}
button {
  font-size: 16px;
  background-color: chartreuse;
  border: none;
  cursor: pointer;
  padding: 10px 25px;
}
</style>
