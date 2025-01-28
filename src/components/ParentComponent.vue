<template>
  <div>
    <div class="parent">Parent</div>
    <div>Возраст юзера: {{ user.age }}</div>
    <div>Лет до пенсии: {{ quantityYears }}</div>
    <button @click="incrementAge">Увеличить возраст</button>
    <div>Parent Counter: {{ parentCount }}</div>
    <div class="child">
      <ChildComponent
        v-if="user.age < 32"
        @increment-parent-counter="parentCount++"
        @double="(e) => consoleEmit(e)"
        :title="parentTitle"
        :year="year"
        :posts="posts"
      >
        <template #header>
          <div>Логотип и меню</div>
        </template>
        <div>Компонент - список юзеров</div>
        <template #footer>
          <div>Контакты</div>
        </template>
      </ChildComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUpdated, ref, watch } from 'vue';
import ChildComponent from './ChildComponent.vue';
import { posts } from '@/data/posts';
import { useMedia } from '@/composables/useMedia';

defineOptions({ name: 'ParentComponent' });

const parentCount = ref(0);
const parentTitle = 'Title from parent';
const year = ref<number>(2024);

const user = ref({
  name: 'Sergey',
  age: 30,
});

const incrementAge = () => {
  user.value.age++;
};

const consoleEmit = (e: number) => {
  console.log(e);
};

const quantityYears = computed(() => {
  if (user.value.age >= 65) {
    return 'Поздравляем, вы уже на пенсии!';
  }
  return 65 - user.value.age;
});

watch(
  user,
  (newVal, oldVal) => {
    console.log('new', newVal);
    console.log('old', oldVal);
  },
  { deep: true, immediate: true },
);

watch(
  () => user.value.age,
  (newVal, oldVal) => {
    console.log('new', newVal);
    console.log('old', oldVal);
  },
);

console.log('created');

onMounted(() => {
  console.log('mounted');
});

onUpdated(() => {
  console.log('updated');
});

const { device } = useMedia();

watch(
  device,
  (value) => {
    console.log('screen', value);
  },
  { immediate: true },
);
</script>

<style scoped lang="scss">
.parent {
  background-color: antiquewhite;
  color: green;
  width: 100%;
  font-size: 32px;
}
.child {
  background-color: grey;
}
// .child-component {
//   background-color: bisque;
// }
/* :deep(.main-title) {
  font-size: 8px;
} */
</style>
