<template>
  <div class="warp mx-4 md:mx-12">
    <div class="w-full">
      <div>
        <div class="flex">
          <div class="mx-auto my-5 w-5/6
                      sm:w-4/6 md:w-2/5 lg:w-1/3">
            <img class="shadow-sm" src="/src/assets/images_me/me.jpg" />
          </div>
        </div>
        <div class="text-sm leading-loose tracking-010 md:text-base md:tracking-020">
          <p>畢業於國立雲林科技大學</p>
          <p>
            <span class="inline-block">現階段程式廢人，</span>
            <span class="inline-block">學生時期經常刷題</span>
            <span class="inline-block">(Zero Judge、Green Judge)</span>
          </p>
          <p>
            <span class="inline-block">曾獲得全國技能競賽(程式設計)第四名、</span>
            <span class="inline-block">全國技藝競賽第三名</span>
          </p>
          <p>
            <span>我信箱： </span><a href="mailto:evo960225@gmail.com">evo960225@gmail.com</a>
          </p>
        </div>
      </div>

      
      <div class="w-full text-lg text-center mt-20">
        <h2 class="text-2xl font-semibold mb-2 tracking-070">經歷</h2>
        <hr />

        <div class="flex justify-center mt-6 flex-wrap md:flex-nowrap">
          <div class="flex">
            <div class="mx-auto my-5 w-4/6 md:ml-auto 
                        md:mr-3 md:min-w-250 sm:w-3/6
                        lg:w-1/6">
              <img class="rounded-full shadow-sm" src="/src/assets/images_me/laboratory.jpg" />
            </div>
          </div>
          <div class="mx-auto my-4 text-left text-sm tracking-020 w-full
                      sm:text-base sm:tracking-010 sm:mx-8 sm:w-5/6
                      md:text-lg md:tracking-010 md:ml-8 md:w-3/5">
            <div class="font-semibold text-lg my-2 tracking-030">
              國立雲林科技大學雜項工程師<span class="inline-block">(聘期結束)</span>
            </div>
            <p>產學案支援</p>
            <p>網站全端雜項設計</p>
            <p>深度學習/數據分析</p>
            <p>系統演算法</p>
            <p>可撥聯絡窗口</p>
            <div class="text-sm text-gray-500 italic mt-6">
              *照片是跟學生借碩士服來穿的，沒有讀碩<span class="inline-block">(´・_・`)</span>
            </div>
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