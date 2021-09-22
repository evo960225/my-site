<template>
    <div class="iamge-list flex flex-wrap justify-center">
        <a v-for="p in getPhotoList()" :key="p.title" @click="show_image(getImageUrl(p.src), p.title)"
            class="group relative mx-1 my-1 rounded-lg">
            <img :src="get_sm_image_url(p.src)" alt=""
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
    <ImageModal ref="modal" :current_show="current_show" :current_title="current_title"></ImageModal>
</template>
<script lang="ts">
   
    import { ref, defineComponent } from 'vue';
    import ImageModal from './ImageModal.vue';
    import photoList from '../assets/photoList.json';
    const photoDir = './images/photos/';

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
          }
      },
      methods: {
        getPhotoList(){
            return photoList;
        },
        get_sm_image_url(fname:string){
            const imgPath = photoDir + fname.split('.')[0] + '-s.' + fname.split('.')[1];
            return imgPath;
        },
        getImageUrl(fname:string){
            const imgPath = photoDir + fname;
            return imgPath;
        },
        show_image(url:string, title:string){
            this.current_show = url;
            this.current_title = title;
            (this.$refs.modal as any).show();
        },
      }
    })

</script>

<style>

</style>