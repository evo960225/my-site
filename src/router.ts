import { createRouter, createWebHistory } from "vue-router";
import ContentWrapper from "./components/ContentWrapper.vue";
import ChapterPage from "./components/ChapterPage.vue";
import PhotoPage from "./components/PhotoPage.vue";
import D3 from "./components/D3.vue";
import Articles from "./components/Articles.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: ContentWrapper,
        children: [
          {
            path: 'chapter',
            component: ChapterPage
          },
          {
            path: 'articles',
            component: Articles
          },
          {
            path: '_3D',
            component: D3
          },
          {
            path: 'photo',
            component: PhotoPage
          },
          {
            path: 'me',
            component: D3
          },
        ]
      }
    ]
})