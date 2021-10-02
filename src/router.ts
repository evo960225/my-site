import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import ContentWrapper from "./components/ContentWrapper.vue";
import ChapterPage from "./components/ChapterPage.vue";
import PhotoPage from "./components/PhotoPage.vue";
import D3 from "./components/D3.vue";
import OtherWorks from "./components/OtherWorks.vue";
import Me from "./components/Me.vue";
import Articles from "./components/Articles.vue";

const DEFAULT_TITLE = 'Hoshi home';
const router =  createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: Home,
      },{
        path: '/',
        component: ContentWrapper,
        meta: { title: 's', desc: '' },
        children: [
          {
            path: 'chapter',
            component: ChapterPage,
            meta: { title: 's', desc: '' }
          },
          /*
          {
            path: 'articles',
            component: Articles,
            meta: { title: 'Hoshiko | 關於自己', desc: '' }
          },*/
          {
            path: '_3D',
            component: D3,
            meta: { title: '3D作品 | Hoshiko', desc: '' }
          },
          {
            path: 'photo',
            component: PhotoPage,
            meta: { title: '攝影 | Hoshiko', desc: '' }
          },
          {
            path: 'other_works',
            component: OtherWorks,
            meta: { title: '雜項 | Hoshiko', desc: '' }
          },
          {
            path: 'me',
            component: Me,
            meta: { title: '關於自己 | Hoshiko', desc: '' }
          },
        ]
      }
    ]
})
router.beforeEach((to, from, next) => {
  document.title = (to.meta.title ? to.meta.title : DEFAULT_TITLE) as string
  next() 
})
 
export default router;