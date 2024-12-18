import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/AhabanzaPage.vue'),
      meta: {
        title: 'Iga gukoresha vue js',
        description: 'reba kandi wege gukora website ukoresheje html na css.'
      }
    },
    {
      path: '/AboutPage',
      name: 'AboutPage',
      component: () => import('../pages/AboutPage.vue'),
      meta: {
        title: 'Iga gukoresha vue js',
        description: 'reba kandi wege gukora website ukoresheje html na css.'
      }
    },

    {
      path: '/AhabanzaPage',
      name: 'AhabanzaPage',
      component: () => import('../pages/AhabanzaPage.vue'),
    },

    {
      path: '/AdminPage',
      name: 'AdminPage',
      component: () => import('../pages/AdminPage.vue'),
    },


    { path: '/', component: Login },
    { path: '/register', component: Register },

  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Default Title';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || 'Default description');
  }
  next();
});
export default router
