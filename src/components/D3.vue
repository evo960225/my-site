<template>
  <div>
    <div>
      <h2 class="text-3xl my-6">
        Blender-Cycle
      </h2>
      <div class="flex justify-evenly flex-wrap my-3">
        <div class="mx-auto my-4 md:w-2/5">
          <img src="/src/assets/donut.jpg" class="w-full" />
        </div>
        <div class="mx-auto my-4 md:w-2/5">
          <video src="/src/assets/heigh_cub_spin.mp4" class="w-full" controls></video>
        </div>
      </div>
    </div>
    <h2 class="text-3xl mt-12">
      Model in Three.js
    </h2>
    <div class="flex justify-evenly flex-wrap">
      <div v-for="name in models_name" :id="name" :key="name"
           class="mx-2 my-4">
        <div class="loading-3d-anime flex flex-wrap">
          <img class="mx-auto mt-auto mb-3" src="../assets/hoshi-loading.png" />
          <div class="w-full text-white text-2xl tracking-030 opacity-30"> 
            Loading...
          </div>
        </div>
      </div>
    </div>
 </div>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
  import load_model from '../ts/load_glb_model';
  import init_scene from '../ts/init_scene';

  export default defineComponent({
    data(){
      return{
        models_name: ['donut','cube','cup']
      }
    },
    async mounted() {   
      const canvas = document.querySelector('#donut');
      if(canvas !== null){
        const model = await load_model('donut');
        canvas.innerHTML = '';
        model.position.set( 0, 0, 0 );
        model.scale.set( 5, 5, 5 );
        init_scene(canvas, model);
      }
      const canvas2 = document.querySelector('#cube');
      if(canvas2!==null){
        const model = await load_model('cube');
        canvas2.innerHTML = '';
        model.position.set( 0, 0, 0 );
        model.scale.set( 0.2, 0.2, 0.2 );
        init_scene(canvas2, model);
      }
      const canvas3 = document.querySelector('#cup');
      if(canvas3!==null){
        const model = await load_model('cup');
        canvas3.innerHTML = '';
        model.position.set( 0, 0, 0 );
        model.scale.set( 5.5, 5.5, 5.5 );
        init_scene(canvas3, model);
      }
    },
    methods:{
    }
  })
 

</script>
<style>
.loading-3d-anime {
    width: 600px;
    height: 400px;
    background-color: rgb(63, 62, 68);
    transition: all 0.7s ease;
    opacity: 1;
    visibility: visible;
    background-attachment: fixed;
    background-image: url('/src/assets/bg2.svg');
}
.loading-3d-anime > img{
    width: 100px;
    height: 100px;
    opacity: 0.3;
    animation: loader-3d 2.6s infinite;
}
@keyframes loader-3d {
  0%{
    transform: translateY(-10px) rotateY(0deg);
  }
  6%{
    transform: translateY(0px) rotateY(0deg);
  }
  12%{
    transform: translateY(-10px) rotateY(0deg);
  }
  18% {
    transform: translateY(0px) rotateY(0deg);
  }
  24%{
    transform: translateY(-10px) rotateY(0deg);
  }
  35%{
    transform: translateY(-10px) rotateY(180deg);
  }
  50%{
    transform: translateY(-10px) rotateY(180deg);
  }
  56%{
    transform: translateY(0px) rotateY(180deg);
  }
  62%{
    transform: translateY(-10px) rotateY(180deg);
  }
  68%{
    transform: translateY(0px) rotateY(180deg);
  }
  74% {
    transform: translateY(-10px) rotateY(180deg);
  }
  85%{
    transform: translateY(-10px) rotateY(0deg);
  }
  100%{
    transform: translateY(-10px) rotateY(0deg);
  }
}
</style>