import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import ContentWrapper from "./components/ContentWrapper.vue";
import ChapterPage from "./components/ChapterPage.vue";
import PhotoPage from "./components/PhotoPage.vue";
import D3 from "./components/D3.vue";
import Me from "./components/Me.vue";
import Articles from "./components/Articles.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: Home,
      },{
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
            component: Me
          },
        ]
      }
    ]
})