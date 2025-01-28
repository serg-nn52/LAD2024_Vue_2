<template>
  <div class="child-component">
    <div>
      Top
      <slot name="header" />
    </div>
    <div :class="mainTitleClasses" :style="mainTitleStyles">
      {{ title }}
    </div>
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
    <div>
      Middle
      <slot />
    </div>
    <h2>Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id" class="title">{{ post.post }}</li>
    </ul>
    <div>
      Bottom
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { IChildComponentEmits, IChildComponentProps } from './types';

const count = ref(0);
const oldCount = ref<number>(0);
const color = ref<'red' | 'yellow'>('red');
const user = ref({
  name: 'Sergey',
  age: 0,
});

const props = withDefaults(defineProps<IChildComponentProps>(), { title: 'Default title' });
const emits = defineEmits<IChildComponentEmits>();

const incrementCount = () => {
  count.value++;
};
const incrementAge = () => {
  user.value.age++;
};
const incrementParentCount = () => {
  emits('increment-parent-counter');
};

const doubleCount = computed(() => {
  return count.value * 2;
});

const mainTitleStyles = computed(() => {
  return { color: count.value < 5 ? 'yellow' : 'red' };
});

const mainTitleClasses = computed(() => {
  return [{ uppercase: count.value > 5 }, { 'main-title': true }];
});

watch(
  count,
  (newVal, oldVal) => {
    console.log('newVal: ', newVal);
    console.log('oldVal', oldVal || 0);
    console.log('title: ', props.title);
    oldCount.value = oldVal || 0;
    if (newVal > 10) color.value = 'yellow';
  },
  { immediate: true },
);

watch(
  user,
  (newVal, oldVal) => {
    console.log('newVal: ', newVal);
    console.log('oldVal', oldVal);
  },
  {
    deep: true,
    immediate: true,
    once: true,
  },
);

watch(doubleCount, (value: number) => {
  emits('double', value);
});
</script>

<style scoped lang="scss">
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
.main-title {
  background-color: aqua;
}

.uppercase {
  text-transform: uppercase;
}
</style>
