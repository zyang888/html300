import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Grid from '../views/Grid.vue';
import Images from '../views/Images.vue';
import Accordion from '../views/Accordion.vue';
import Person from '../views/Person.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/images',
    name: 'Images',
    component: Images,
  },
  {
    path: '/accordion',
    name: 'Accordion',
    component: Accordion,
  },
  {
    path: '/grid',
    name: 'Grid',
    component: Grid,
  },
  {
    path: '/grid/:firstname',
    name: 'Person',
    component: Person,
  },
];

const router = new VueRouter({
  mode: 'history', routes,
});

export default router;
