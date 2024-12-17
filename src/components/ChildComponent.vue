<template>
  <div :style="{ color }">{{ title }}</div>
  <div>Year: {{ year }}</div>
  <input type="text" v-model="user.name" />
  <button @click="incrementCount">Increment</button>
  <button @click="incrementAge">Increment Age</button>
  <button @click="incrementParentCount">Increment For Parent</button>
  <div v-if="count < 10">Count: {{ count }}</div>
  <div v-else-if="count < 15">Среднее значение!</div>
  <div v-else-if="count < 20">Большое значение!</div>
  <div v-else>Слишком большое значение!</div>
  <div>Old count: {{ oldCount }}</div>
  <div v-show="doubleCount < 10">Double count: {{ doubleCount }}</div>
  <h2>User</h2>
  <div>{{ user.name }}</div>
  <div>{{ user.age }}</div>
  <h2>Posts</h2>
  <ul>
    <li v-for="post in posts" :key="post.id" class="title">{{ post.post }}</li>
  </ul>
</template>

<script lang="ts">
import type { IPost } from '@/data/posts';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      count: 0,
      oldCount: 0,
      color: 'red',
      user: {
        name: 'Sergey',
        age: 0,
      },
    };
  },
  props: {
    title: {
      type: String,
      default: 'Default title',
    },
    year: {
      type: Number,
      required: true,
    },
    posts: {
      type: Array<IPost>,
      required: true,
    },
  },
  emits: ['double', 'increment-parent-counter'],
  computed: {
    doubleCount() {
      return this.count * 2;
    },
  },
  methods: {
    incrementCount() {
      this.count++;
    },
    incrementAge() {
      this.user.age++;
    },
    incrementParentCount() {
      this.$emit('increment-parent-counter');
    },
  },
  watch: {
    count(newVal, oldVal) {
      // console.log('newVal: ', newVal);
      // console.log('oldVal', oldVal);
      this.oldCount = oldVal;
      if (newVal > 10) this.color = 'yellow';
    },
    doubleCount(value) {
      this.$emit('double', value);
    },
    // 'user.age': {
    //   handler(newVal, oldVal) {
    //     console.log('newVal: ', newVal);
    //     console.log('oldVal', oldVal);
    //   },
    // },
    user: {
      handler(newVal) {
        console.log('newVal: ', newVal);
        // console.log('oldVal', oldVal);
      },
      // deep: true,
      // once: true,
      // immediate: true,
    },
  },
});
</script>

<style scoped>
div {
  font-size: 32px;
}
h2 {
  font-size: 40px;
  color: green;
}
.title {
  font-size: 30px;
  color: greenyellow;
  list-style-type: none;
}
</style>
