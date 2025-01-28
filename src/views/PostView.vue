<template>
  <div class="wrapper">
    <div class="posts">
      <p>Post {{ route.params.post }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route);
</script>

<style scoped>
.wrapper {
  flex-grow: 1;
}
.posts {
  font-size: 32px;
}
</style>
