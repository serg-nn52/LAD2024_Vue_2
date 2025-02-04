<template>
  <header class="header">
    Header
    <button @click="increment">Increment</button>
  </header>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const countStore = useCounterStore();

const { increment } = countStore;
</script>

<style scoped>
.header {
  width: 100%;
  height: 150px;
  background-color: lightgrey;
  font-size: 42px;
  color: black;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
