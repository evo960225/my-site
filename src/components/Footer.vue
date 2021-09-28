<template>
  <div class="flex justify-between w-full px-8 py-9 bg-gray-800 text-gray-50 
              text-sm
              sm:px-12
              md:px-18 md:text-base 
              xl:px-24">
    <div class="text-left">
      <p>E-mail: evo960225@gmail.com</p>
      <p>©2021 hoshiko</p>
    </div>
    <div class="text-right my-auto text-2xl space-x-2">
      <a href="https://www.facebook.com/hoshiko.p">
        <font-awesome-icon :icon="['fab', 'facebook-square']" />
      </a>
      <a href="https://www.instagram.com/hoshiko_xx/">
        <font-awesome-icon :icon="['fab', 'instagram-square']" />
      </a>
      <a href="https://github.com/evo960225">
        <font-awesome-icon :icon="['fab', 'github-square']" />
      </a>
    </div>
  </div>
</template>
<script lang="ts">
   
    import { defineComponent } from 'vue'

    export default defineComponent({
      data(){
        return{
          menu_items: [
            {name:'文章', link:'chapter'}
          ]
        }
      }
    })

    
</script>

<style></style>