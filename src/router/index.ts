import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import NotFoundComponent from '@/views/NotFoundComponent.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/posts',
      name: 'posts',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PostsView.vue'),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/post/:post',
      name: 'post',
      component: () => import('../views/PostView.vue'),
      meta: {
        layout: MainLayout,
      },
    },
    { path: '/:pathMatch(.*)', component: NotFoundComponent },
  ],
});

router.beforeEach((to, from, next) => {
  if (from.name === 'posts') {
    console.log(to.name);
    alert('Уже уходите?');
    if (to.name === 'home') {
      alert('Со страницы постов нельзя пойти на домашнюю!');
      return;
    }
    next();
  }
  next();
});

export default router;
