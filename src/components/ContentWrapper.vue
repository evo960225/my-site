<template>
  <div id="content-wrapper" class="min-h-70vh max-w-screen-xl px-3 pt-8 pb-8 mx-auto bg-white bg-opacity-80 shadow">
    <router-view/>
  </div>
</template>
<script lang="ts">
   
    import { ref, defineComponent } from 'vue'

    export default defineComponent({
      name: 'content-wrapper',
      data(){
          return{
              text1:'主題1',
              text2:'主題2',
              content: 'random text'
          }
      }
    })
</script>

<style>

</style>