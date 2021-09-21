<template>
  <div class="flex justify-between w-full px-24 py-9 bg-gray-800 text-gray-50">
    <div class="text-left">
        <p class="">聯絡我</p>
        <p class="">信箱: evo960225@gmail.com</p>
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
   
    import { ref, defineComponent } from 'vue'

    export default defineComponent({
      name: 'footer',
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