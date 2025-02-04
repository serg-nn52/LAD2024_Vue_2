import { api } from '@/api';
import type { AxiosError } from 'axios';
import { defineStore, storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
import { useCounterStore } from './counter';

interface IPostDTO {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<IPostDTO[]>([]);
  const isLoading = ref(false);
  const isError = ref(false);

  const countStore = useCounterStore();

  const { count } = storeToRefs(countStore);

  const fetchPosts = async (page: number) => {
    isLoading.value = true;
    isError.value = false;
    try {
      const { data } = await api.get<IPostDTO[]>('/posts', {
        params: {
          _page: page,
        },
      });
      posts.value = data;
      console.log(data);
    } catch (e) {
      console.error((e as AxiosError).message);
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  watch(count, (val) => {
    posts.value = posts.value.map((el) => ({ ...el, title: val + ' ' + el.title }));
  });

  return { posts, isLoading, isError, fetchPosts };
});
