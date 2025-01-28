<template>
  <div class="wrapper">
    <div>
      <p v-for="post in posts" :key="post.id" class="posts" @click="redirectToPost(post.id)">
        {{ post.post }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const posts = [
  {
    id: 1,
    post: 'Post1',
  },
  {
    id: 2,
    post: 'Post2',
  },
  {
    id: 3,
    post: 'Post3',
  },
  {
    id: 4,
    post: 'Post4',
  },
  {
    id: 5,
    post: 'Post5',
  },
];

const router = useRouter();

const redirectToPost = (id: number) => {
  router.push({
    name: 'post',
    params: {
      post: id,
    },
  });
};
</script>

<style scoped>
.wrapper {
  flex-grow: 1;
}
</style>
