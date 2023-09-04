import { createRouter , createWebHashHistory } from 'vue-router'
import DatasetPageVue from './components/DatasetPage.vue'
import ClassesPageVue from './components/ClassesPage.vue'
import NotificationsPageVue from './components/NotificationsPage2.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
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
    ]
  });
  
  export default router;
  