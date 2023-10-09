import { createRouter , createWebHashHistory } from 'vue-router'
import DatasetPageVue from './components/DatasetPage.vue'
import ClassesPageVue from './components/ClassesPage.vue'
import NotificationsPageVue from './components/NotificationsPage2.vue'
import UsersPageVue from './components/UsersPage.vue'
import DetectionPageVue from './components/DetectionPage.vue'
import TrainPageVue from './components/TrainPage.vue'
import LoginPageVue from './components/LoginPage.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: '/Login',
        name: 'Login',
        component: LoginPageVue
      },
      {
        path: '/Dataset',
        name: 'Dataset',
        component: DatasetPageVue
      },
      {
        path: '/Classes',
        name: 'Classes',
        component: ClassesPageVue,
      },
      {
        path: '/',
        name: 'Notifications',
        component: NotificationsPageVue,
      },
      {
        path: '/Users',
        name: 'Users',
        component: UsersPageVue,
      },
      {
        path: '/Detection',
        name: 'Detection',
        component: DetectionPageVue,
      },
      {
        path: '/Train',
        name: 'Train',
        component: TrainPageVue,
      },
    ]
  });
  
  export default router;
  