<template>
  <div class="iamge-list flex flex-wrap justify-center">
    <a v-for="p in getPhotoList()" :key="p.title" 
       class="group relative mx-1 my-1 rounded-lg md:mx-2 md:my-2"
       @click="show_image(getImageUrl(p.src), p.title)">
      <img :src="get_sm_image_url(p.src)" alt=""
           class="rounded-lg shadow-lg filter brightness-90 object-cover aspect-1 h-20
                  sm:h-32
                  md:h-64
                  transition duration-400 ease-in-out
                  group-hover:brightness-100 group-hover:drop-shadow-xl" />

      <div class="absolute inset-x-0 bottom-0 h-8 bg-gray-300 bg-opacity-0 
                  transition duration-400 ease-in-out 
                  group-hover:bg-opacity-60 ">

        <span class="absolute bottom-1 left-2 text-gray-50 text-opacity-50 group-hover:text-opacity-90 transition duration-400 ease-in-out
                            text-xs
                            md:text-sm">
          {{ p.title }}
        </span>
      </div>
    </a>
    <ImageModal ref="modal" :current-show="currentShow" :current-title="currentTitle" />
  </div>
</template>
<script lang="ts">
   
    import { defineComponent } from 'vue';
    import ImageModal from './ImageModal.vue';
    import photoList from '../assets/photoList.json';
    const photoDir = './images/photos/';

    export default defineComponent({
      components: {
        ImageModal
      },
      data(){
          return{
            text1:'主題1',
            text2:'主題2',
            currentShow: '',  
            currentTitle: '',
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
            this.currentShow = url;
            this.currentTitle = title;
            (this.$refs.modal as import("vue").DefineComponent<{
                show: {
                    type: BooleanConstructor[];
                    default: null;
                };
            }>).show();
        },
      }
    })

</script>

<style>

</style>