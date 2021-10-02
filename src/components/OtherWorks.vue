<template>
  <div>
    <div>
      <h2 class="text-3xl my-6">
        Live 2D
      </h2>
      <div class="flex justify-evenly flex-wrap my-3">
        <div class="my-auto">
          <video src="/src/assets/cube_l2d.mp4" controls></video>
        </div>
      </div>
      <!---->
      <h2 class="text-3xl mt-12">
        手繪
      </h2>
      <div class="flex justify-evenly flex-wrap my-3">
        <div class="my-auto w-full md:w-1/2">
          <img class="w-full" src="/src/assets/2013_art.png" />
          <p class="text-gray-400 text-lg tracking-030">
            2013.11
          </p>
        </div>
      </div>
    </div>
 </div>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';

  export default defineComponent({

    methods:{
    }
  })
 

</script>
