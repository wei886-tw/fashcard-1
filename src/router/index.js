import { createRouter, createWebHashHistory } from 'vue-router';
import WelcomeView from '@/views/WelcomeView.vue';


const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView
  },
  {
    path: '/loginView',
    name: 'loginView',
    component: () => import('../views/LoginView.vue'),

  }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
