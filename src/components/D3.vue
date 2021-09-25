<template>
  <div class="flex justify-evenly flex-wrap">
    <div id="canvas1" class="mx-2 my-4"></div>
    <div id="canvas2" class="mx-2 my-4"></div>
  </div>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
  import dount_init from '../assets/ts/three_dount';
  import cube_init from '../assets/ts/three_cube';
  
  export default defineComponent({
    mounted() {
      const canvas = document.querySelector('#canvas1');
      if(canvas!==null){
        canvas.textContent = '';
        dount_init(canvas);
      }
      const canvas2 = document.querySelector('#canvas2');
      if(canvas2!==null){
        canvas2.textContent = '';
        cube_init(canvas2);
      }
    },
    methods:{
    }
  })
 

</script>
