<template>
  <div>
    <div class="space h-4"></div>
    <div class="topbar fixed z-50 bg-yellow-300 w-full shadow-md bg-opacity-100">
      <div class="flex max-w-screen-xl w-full p-2 mx-auto">     
        <div id="logo" class="pl-4 font-medium w-64 sm:w-2/5">
          <a href="./index.html" class="flex">
            <img src="../assets/logo.png" alt="" class="h-10 sm:h-12" />
            <span class="mx-4 my-auto align-middle font-bold tracking-widest text-gray-700 text-left
                         text-xl sm:text-2xl">Hoshi Home</span>
          </a>
        </div>
                
        <!-- nav <md show -->
        <div 
          class="md:hidden my-auto font-bold text-gray-700 text-2xl align-middle ml-auto mr-4"
          @click="showSidebar = !showSidebar">
          <font-awesome-icon :icon="['fas','bars']" />
        </div>
              
        <!-- nav >md show -->
        <nav class="w-3/5 flex space-x-4 mr-0 items-center justify-end font-medium hidden
                    md:flex">
          <router-link 
            v-for="item in menu_items" :key="item.name" :to="item.link"  
            class="nav_menu__item align-middle text-gray-600 hover:bg-gray-700 hover:text-white 
                   pl-4 pr-3 py-2 rounded-md text-lg tracking-030">
            {{ item.name }}
          </router-link>            
        </nav>
      </div>
    </div>
    <div class="space h-14 sm:h-16"></div>  
    <!-- nav <md sidebar -->
    <transition name="fade" mode="out-in">
      <nav-small v-if="showSidebar" class="fixed z-50 bg-gray-700 w-full left-0 transfer">
        <div class="absolute top-1 right-2" 
             @click="showSidebar=false">
          <font-awesome-icon :icon="['fas','times']" />
        </div>
        
        <nav @click="showSidebar=false">
          <router-link v-for="item in menu_items" :key="item.name" :to="item.link"  
                       class="nav_menu__item block align-middle text-gray-600
                                pl-4 pr-3 py-2 rounded-md text-lg tracking-030
                                hover:bg-gray-700 hover:text-white"> 
            {{ item.name }} 
          </router-link>
        </nav>
      </nav-small>
    </transition>
  </div>
</template>
<script lang="ts">
   
    import { defineComponent } from 'vue'

    export default defineComponent({
      data(){
          return{  
            menu_items: [
              {name:'文章', link:'articles'},
              {name:'3D', link:'_3D'},
              {name:'攝影', link:'photo'},
              {name:'關於星', link:'me'}
            ],
            showSidebar: false,
          }
      },
      methods:{
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0.1;
}

</style>