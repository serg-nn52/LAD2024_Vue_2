<template>
  <div class="parent">Parent</div>
  <div>Parent Counter: {{ parentCount }}</div>
  <div class="child">
    <ChildComponent
      @increment-parent-counter="parentCount++"
      @double="(e) => consoleEmit(e)"
      :title="parentTitle"
      :year="year"
      :posts="posts"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChildComponent from './ChildComponent.vue';
import { posts } from '@/data/posts';

export default defineComponent({
  name: 'ParentComponent',
  components: { ChildComponent },
  data() {
    return {
      parentTitle: 'Title from parent',
      year: 2024,
      parentCount: 0,
      posts,
    };
  },
  methods: {
    consoleEmit(evt: number) {
      console.log(evt);
    },
  },
});
</script>

<style scoped>
.parent {
  background-color: antiquewhite;
  color: green;
  width: 100%;
  font-size: 32px;
}
.child {
  background-color: grey;
}
</style>
