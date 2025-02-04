<template>
  <div class="wrapper">
    <!-- <h2>Count: {{ count }}</h2>
    <h2>Double Count: {{ doubleCount }}</h2> -->
    <h2 v-if="isLoading">Loading...</h2>
    <h2 class="error" v-else-if="isError">Ошибка, попробуйте попозже!</h2>
    <div v-else>
      <p v-for="post in posts" :key="post.id" class="posts" @click="redirectToPost(post.id)">
        {{ post.id + ' ' + post.title }}
      </p>
      <div class="btns">
        <button :disabled="page === 1" @click="page--">Назад</button>
        {{ page }}
        <button @click="page++">Вперед</button>
      </div>
      <button @click="sendData">Отправить данные</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { api } from '@/api';
// import { useCounterStore } from '@/stores/counter';
import { usePostsStore } from '@/stores/posts';
import type { AxiosError } from 'axios';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const page = ref(1);

// const countStore = useCounterStore();
const postsStore = usePostsStore();
// const { count, doubleCount } = storeToRefs(countStore);
const { posts, isError, isLoading } = storeToRefs(postsStore);
const { fetchPosts } = postsStore;

const sendData = async () => {
  try {
    const { data } = await api.post('/posts', {
      userName: 'Sergey',
    });
    console.log(data);
  } catch (e) {
    console.error((e as AxiosError).message);
  }
};

fetchPosts(1);

watch(page, (val, oldVal) => {
  if (val > 0) {
    console.log(val, oldVal);
    fetchPosts(val);
  } else {
    page.value = oldVal;
  }
});

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

<style lang="scss" scoped>
.wrapper {
  flex-grow: 1;
}
.posts {
  font-size: 24px;
  padding: 10px 40px;
  cursor: pointer;
}
.error {
  color: red;
  font-size: 36px;
  padding: 10px 40px;
}
.btns {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
