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
  import init_donut from '../assets/ts/three_dount';
  import init_cube from '../assets/ts/three_cube';
  import init_cup from '../assets/ts/three_cup';

  export default defineComponent({
    mounted() {
      const canvas = document.querySelector('#donut');
      if(canvas!==null){
        canvas.textContent = '';
        init_donut(canvas);
      }
      const canvas2 = document.querySelector('#cube');
      if(canvas2!==null){
        canvas2.textContent = '';
        init_cube(canvas2);
      }
      const canvas3 = document.querySelector('#cup');
      if(canvas3!==null){
        canvas3.textContent = '';
        init_cup(canvas3);
      }
    },
    methods:{
    }
  })
 

</script>
