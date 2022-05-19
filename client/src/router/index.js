/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home.vue';
import ServiceCategoryPage from '@/components/pages/ServiceCategoryPage.vue';
import ServicesCategoriesPage from '@/components/pages/ServicesCategoriesPage.vue';
import ServiceEnroll from '@/components/pages/ServiceEnroll.vue';

Vue.use(Router);

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesCategoriesPage,
      props: true,
      meta: {
        services: {
          displayName: 'Услуги',
          isCurrent: true,
        },
      },
    },
    {
      path: '/services/category=:tag',
      name: 'category',
      component: ServiceCategoryPage,
      props: true,
      meta: {
        services: {
          displayName: 'Услуги',
        },
        category: {
          isCurrent: true,
        },
      },
    },
    {
      path: '/services/category=:tag/service=:name',
      name: 'serviceEnroll',
      component: ServiceEnroll,
      props: true,
      meta: {
        services: {
          displayName: 'Услуги',
        },
        category: {
          isCurrent: false,
        },
        service: {
          isCurrent: true,
        },
      },
    },
  ],
  mode: 'history',
});
