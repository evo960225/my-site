<template>
  <div class="flex warp mx-12">
    <div 
      v-for="article in articles"
      :key="article.title" 
      class="flex-1 mx-4 border shadow rounded border-gray-400 h-56">
      <a href="javascript:void(0)">
        <div class="w-full h-full tracking-wider leading-loose">
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
              image_path: 'src/assets/articles_images/1.jpg'
            },
            { 
              title: 'B',
              image_path: 'src/assets/articles_images/4-s.jpg'
            },
            { 
              title: 'C',
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