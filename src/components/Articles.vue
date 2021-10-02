<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3  mx-12  justify-items-center gap-3.5">
    <div 
      v-for="article in articles"
      :key="article.title" 
      class="flex-wrap mx-4 border shadow rounded border-gray-400 h-56 w-full max-w-xs">
      <a href="javascript:void(0)">
        <div class="w-full h-full tracking-wider leading-loose flex-wrap">
          <img class="object-cover w-full h-full" 
               :src="article.image_path" />
          <div>{{ article.title }}</div>
        </div>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
   
    import { defineComponent } from 'vue'

    export default defineComponent({
      components: {
        
      },
      data(){
        return{
          articles:[
            { 
              title: '解析<璀璨寶石>數值設計',
              image_path: '/public/images_articles/1.jpg'
            },
            { 
              title: '待寫',
              image_path: 'src/assets/articles_images/4-s.jpg'
            },
            { 
              title: '待寫',
              image_path: 'src/assets/articles_images/本斥但大-s.jpg'
            }
          ]
        }
      },
      methods: {
   
      }
    })

 
</script>

<style>

</style>