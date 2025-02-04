<template>
  <div class="wrapper">
    <div class="posts">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { api } from '@/api';
import type { AxiosError } from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const post = ref<IPostDTO>({} as IPostDTO);
const isLoading = ref(false);
const isError = ref(false);

interface IPostDTO {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const fetchPost = async (id: string) => {
  isLoading.value = true;
  isError.value = false;
  try {
    const { data } = await api.get<IPostDTO>(`/posts/${id}`);
    post.value = data;
    console.log(data);
  } catch (e) {
    console.error((e as AxiosError).message);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
};
fetchPost(route.params.post as string);
</script>

<style scoped>
.wrapper {
  flex-grow: 1;
}
.posts {
  font-size: 32px;
}
</style>
