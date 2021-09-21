<template>
    <div class="space h-4"></div>
    <div class="topbar fixed z-50 bg-yellow-300 w-full shadow-md bg-opacity-100">
        <div class="flex max-w-screen-xl w-full p-2 mx-auto ">
            <div id="logo" class="w-96 pl-4 font-medium">
                <a href="./index.html" class="flex">
                    <img src="../assets/logo.png" alt="" class="h-12">
                    <span class="mx-4 my-auto text-2xl align-middle font-bold tracking-widest text-gray-700">Hoshi Home</span>
                </a>
            </div>
            <div id="nav" class="w-full flex space-x-4 mr-0 items-center justify-end  font-medium">
                <router-link v-for="item in menu_items" :key="item.name" :to="item.link"  
                    class="nav_menu__item align-middle text-gray-600 hover:bg-gray-700 hover:text-white pl-4 pr-3 py-2 rounded-md text-lg tracking-030">{{item.name}}</router-link>
            </div>
        </div>
    </div>
    <div class="space h-16"></div>
</template>
<script lang="ts">
   
    import { ref, defineComponent } from 'vue'

    export default defineComponent({
      name: 'header',
      data(){
          return{
            menu_items: [
              {name:'文章', link:'articles'},
              {name:'3D', link:'_3D'},
              {name:'攝影', link:'photo'},
              {name:'關於星', link:'me'}
            ]
          }
      }
    })

    
</script>

<style>
.topbar { 
  background: 
   linear-gradient(to bottom right,transparent 50%,#3d5820 0) right bottom/24px 24px no-repeat,
   linear-gradient(to top left,transparent 50%,#3d5820 0) left top/24px 24px no-repeat,
   rgba(252, 211, 77, var(--tw-bg-opacity));  
  color: white; 
  overflow: hidden;
}
</style>