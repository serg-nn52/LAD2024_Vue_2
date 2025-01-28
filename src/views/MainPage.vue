<template>
  <div class="main-page">
    MainPage
    <button @click="onSave">Save</button>
    <div>Car: {{ selectedCar.model }}</div>
    <div>Year: {{ selectedCar.year }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

onBeforeRouteLeave(() => {
  alert('Вы уходите с главной!');
});

console.log('router', router);
console.log('route', route);

const car = {
  model: 'Audi',
  year: 2024,
};

const selectedCar = computed(() => {
  if (!route.query) {
    return car;
  } else {
    return {
      model: route.query.model,
      year: route.query.year,
    };
  }
});

const onSave = () => {
  router.push({
    name: 'main',
    query: car,
  });
};
</script>

<style scoped>
.main-page {
  flex-grow: 1;
}
</style>
