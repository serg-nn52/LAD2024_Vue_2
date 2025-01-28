<script setup lang="ts">
// import { RouterView } from 'vue-router';
import { useRoute } from 'vue-router';
import { watchEffect } from 'vue';

const route = useRoute();
watchEffect(() => {
  console.log('###', route);
});
</script>

<template>
  <div class="wrapper">
    <component :is="route.meta?.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<style scoped></style>
