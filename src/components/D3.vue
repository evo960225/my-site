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
      <div id="donut" class="mx-2 my-4"></div>
      <div id="cube" class="mx-2 my-4"></div>
      <div id="cup" class="mx-2 my-4"></div>
    </div>
 </div>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
  import load_model from '../ts/load_glb_model';
  import init_scene from '../ts/init_scene';

  export default defineComponent({
    async mounted() {   
      const canvas = document.querySelector('#donut');
      if(canvas !== null){
        const model = await load_model('donut');
        model.position.set( 0, 0, 0 );
        model.scale.set( 5, 5, 5 );
        init_scene(canvas, model);
      }
      const canvas2 = document.querySelector('#cube');
      if(canvas2!==null){
        const model = await load_model('cube');
        model.position.set( 0, 0, 0 );
        model.scale.set( 0.2, 0.2, 0.2 );
        init_scene(canvas2, model);
      }
      const canvas3 = document.querySelector('#cup');
      if(canvas3!==null){
        const model = await load_model('cup');
        model.position.set( 0, 0, 0 );
        model.scale.set( 5.5, 5.5, 5.5 );
        init_scene(canvas3, model);
      }
    },
    methods:{
    }
  })
 

</script>
