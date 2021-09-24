<template>
    <div class="space h-4"></div>
    <div class="topbar fixed z-50 bg-yellow-300 w-full shadow-md bg-opacity-100">
        <div class="flex max-w-screen-xl w-full p-2 mx-auto">
          
            <div id="logo" class="w-96 pl-4 font-medium">
                <a href="./index.html" class="flex">
                  <img src="../assets/logo.png" alt="" class="h-12">
                  <span class="mx-4 my-auto text-2xl align-middle font-bold tracking-widest text-gray-700">Hoshi Home</span>
                </a>
            </div>
            

            <!-- nav <md show -->
            <div class="md:hidden my-auto font-bold text-gray-700 text-2xl align-middle ml-auto mr-4"
                 @click="showNavSmall=true">
              <font-awesome-icon :icon="['fas','bars']" />
            </div>
            
            <!-- nav >md show -->
            <nav class="w-full flex space-x-4 mr-0 items-center justify-end font-medium hidden
                        md:flex">
                <router-link v-for="item in menu_items" :key="item.name" :to="item.link"  
                    class="nav_menu__item align-middle text-gray-600 hover:bg-gray-700 hover:text-white pl-4 pr-3 py-2 rounded-md text-lg tracking-030">{{item.name}}</router-link>
            </nav>
            
            
        </div>
    </div>
    <div class="space h-16"></div>
    <nav-small v-if="showNavSmall" class="fixed z-50 bg-gray-700 w-full left-0">
          <div class="absolute top-1 right-2" 
              @click="showNavSmall=false">
            <font-awesome-icon :icon="['fas','times']" />
          </div>
          <nav>
          <router-link v-for="item in menu_items" :key="item.name" :to="item.link"  
                    class="nav_menu__item block align-middle text-gray-600 hover:bg-gray-700 hover:text-white pl-4 pr-3 py-2 rounded-md text-lg tracking-030">{{item.name}}</router-link>
          </nav>
    </nav-small>
    
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
            ],
            showNavSmall: false,
          }
      },
      methods:{
        showSmllNav(){
         
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