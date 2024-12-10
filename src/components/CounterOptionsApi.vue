<template>
  <div class="counter-wrapper">Counter Options Api: {{ count }}</div>
  <div class="counter-wrapper">Double Count: {{ doubleCount }}</div>
  <button @click="count++">Increment</button>
  <button @click="decrementCount">Decrement</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CounterOptionsApi',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    decrementCount() {
      this.count--;
    },
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    },
  },
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
