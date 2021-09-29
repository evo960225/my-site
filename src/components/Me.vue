<template>
  <div class="warp mx-12">
    <div class="w-full">
      <div>
        <div class="flex">
          <div class="mx-auto my-5 w-1/3">
            <img class="shadow-sm" src="/src/assets/images_me/me.jpg" />
          </div>
        </div>
        <div>畢業於國立雲林科技大學</div>
        <div>現階段程式廢人、學生時期經常刷題(Zero Judge、Green Judge)</div>
        <div>曾獲得全國技能競賽(程式設計)第四名、全國技藝競賽第三名</div>
        <div>
          <span>我信箱： </span><a href="mailto:evo960225@gmail.com">evo960225@gmail.com</a>
        </div>
      </div>

      
      <div class="w-full text-lg text-center">
        <h2 class="text-2xl font-bold mt-12">經歷</h2>
        <hr />
        <div class="flex mt-6">
          <div class="flex">
            <div class="ml-auto mr-3 my-5 w-3/6">
              <img class="rounded-full shadow-sm" src="/src/assets/images_me/laboratory.jpg" />
            </div>
          </div>
          <div class="text-md ml-8 my-6 text-left tracking-010">
            <div class="font-bold text-lg my-3 tracking-030">國立雲林科技大學雜項工程師(聘期結束)</div>
            <div>產學案支援</div>
            <div>網站全端雜項設計</div>
            <div>深度學習/數據分析</div>
            <div>系統演算法</div>
            <div>可撥聯絡窗口</div>
          </div>
        </div>
      </div>
    </div>
    <!--FB like-->
    <div class="flex my-4">
      <iframe class="ml-auto mr-0"
              src="https://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fhoshiko.info%2Fme&width=150&layout=button_count&action=like&size=small&share=true&height=46&appId=241603416018130"
              width="120" height="65" style="border:none;overflow:hidden" 
              scrolling="no" frameborder="0" allowfullscreen="true" 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
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