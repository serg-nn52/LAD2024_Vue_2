<template>
  <div class="wrapper">
    <PageHeader />
    <nav>
      <router-link active-class="active-link" class="link" :to="{ name: 'main' }">Main</router-link>
      <router-link active-class="active-link" class="link" :to="{ name: 'home' }">Home</router-link>
      <router-link active-class="active-link" class="link" :to="{ name: 'posts' }"
        >Posts</router-link
      >
      <button @click="router.back()">Back</button>
      <button @click="router.forward()">Forward</button>
    </nav>
    <router-view />
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import PageFooter from '@/components/PageFooter.vue';
import PageHeader from '@/components/PageHeader.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}
nav {
  padding: 5px 20px;
  display: flex;
  gap: 10px;
}
.link {
  color: white;
  font-size: 24px;
}
.active-link {
  color: red;
}
</style>
