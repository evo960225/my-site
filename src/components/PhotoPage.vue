<template>
    <div class="iamge-list flex flex-wrap justify-center">
        <a v-for="p in photos" :key="p.title" @click="show_image(src_dir+p.src, p.title)"
            class="group relative mx-1 my-1 rounded-lg">
            <img :src="src_dir+p.src.split('.')[0]+'-s.'+p.src.split('.')[1]" alt=""
                class="rounded-lg shadow h-48 filter brightness-90
                       transition duration-400 ease-in-out
                       group-hover:brightness-100 group-hover:drop-shadow-xl">
            
            <div class="absolute inset-x-0 bottom-0 h-8 bg-gray-300 bg-opacity-0 
                        transition duration-400 ease-in-out 
                        group-hover:bg-opacity-60 ">
                <span class="absolute bottom-1 left-2 text-sm text-gray-50 text-opacity-50 group-hover:text-opacity-90 transition duration-400 ease-in-out">{{p.title}}</span>
            </div>
        </a>
    </div>
    <ImageModal ref="test" :current_show="current_show" :current_title="current_title"></ImageModal>
</template>
<script lang="ts">
   
    import { ref, defineComponent } from 'vue'
    import ImageModal from './ImageModal.vue'
    export default defineComponent({
      components: {
        ImageModal
      },
      name: 'photo-page',
      data(){
          return{
              text1:'主題1',
              text2:'主題2',
              current_show: '',  
              current_title: '',
              content: 'random text-jgroiejhyi;orjthoi;jio',
              src_dir: '/src/assets/photos/',
              photos: [
                {
                    src: '1.jpg',
                    title: '',
                    content: ''
                },
                {
                    src: 'AYU.jpg',
                    title: 'AYU',
                    content: ''
                },
                {
                    src: '4.jpg',
                    title: '吃漢堡包',
                    content: ''
                },
                {
                    src: '請勿推擠.jpg',
                    title: '請勿推擠',
                    content: ''
                },

                {
                    src: '喰日鯨.jpg',
                    title: '喰日鯨',
                    content: ''
                },
                {
                    src: '金黃色項鍊.jpg',
                    title: '金黃色項鍊',
                    content: ''
                },
                
                {
                    src: '桃紅霧切切.jpg',
                    title: '桃紅霧切切',
                    content: ''
                },
                {
                    src: '披薩老爹-點餐桌遊.jpg',
                    title: '披薩老爹-點餐桌遊',
                    content: ''
                },
                {
                    src: '聖十字·蓋亞.jpg',
                    title: '聖十字·蓋亞',
                    content: ''
                },
                {
                    src: '靜.jpg',
                    title: '靜',
                    content: ''
                },
                {
                    src: '藍寶石天國.jpg',
                    title: '藍寶石天國',
                    content: ''
                },
                {
                    src: '焦慮藍泡泡.png',
                    title: '焦慮藍泡泡',
                    content: ''
                },
                {
                    src: '咖波屋.jpg',
                    title: '咖波屋',
                    content: ''
                },
                {
                    src: '火車路上.jpg',
                    title: '火車路上',
                    content: ''
                },
                {
                    src: '全館出清.jpg',
                    title: '全館出清',
                    content: ''
                },
                {
                    src: '租約到期.jpg',
                    title: '租約到期',
                    content: ''
                },
                {
                    src: '一件不留.jpg',
                    title: '一件不留',
                    content: ''
                },
                {
                    src: '本斥但大.jpg',
                    title: '本斥但大',
                    content: ''
                },
                
                {
                    src: '涌翠閣貓貓.jpg',
                    title: '涌翠閣貓貓',
                    content: ''
                },
                {
                    src: '高科技竹筷.jpg',
                    title: '高科技竹筷',
                    content: ''
                },
                {
                    src: '鯨魚內臟.jpg',
                    title: '鯨魚內臟',
                    content: ''
                },
                {
                    src: '憂鬱消波塊.jpg',
                    title: '憂鬱消波塊',
                    content: ''
                },
                {
                    src: '下班路上.jpg',
                    title: '下班路上',
                    content: ''
                },
                {
                    src: '情感高壓塔.jpg',
                    title: '情感高壓塔',
                    content: ''
                },
                {
                    src: '被晚餐支配的恐懼.jpg',
                    title: '被晚餐支配的恐懼',
                    content: ''
                },
                {
                    src: '6.jpg',
                    title: '',
                    content: ''
                },
                {
                    src: '7.jpg',
                    title: '',
                    content: ''
                },
                {
                    src: '8.jpg',
                    title: '',
                    content: ''
                },
                {
                    src: '9.jpg',
                    title: '',
                    content: ''
                },
                {
                    src: '10.jpg',
                    title: '',
                    content: ''
                },
                {
                    src: '11.jpg',
                    title: '',
                    content: ''
                },
                {
                    src: '森林步道.jpg',
                    title: '森林步道',
                    content: ''
                },
                {
                    src: '15.jpg',
                    title: '',
                    content: ''
                },
                {
                    src: '17.jpg',
                    title: '',
                    content: ''
                },
                {
                    src: '19.jpg',
                    title: '',
                    content: ''
                },
                {
                    src: '49.jpg',
                    title: '',
                    content: ''
                },
                {
                    src: 'IMG_4313.jpg',
                    title: '',
                    content: ''
                },
                {
                    src: '光。難.jpg',
                    title: '光。難',
                    content: ''
                },

                
              ]
              
          }
      },
      methods: {
        show_image(url:string, title:string){
            this.current_show = url;
            this.current_title = title;
            (this.$refs.test as any).show();
        },
      }
    })

</script>

<style>

</style>