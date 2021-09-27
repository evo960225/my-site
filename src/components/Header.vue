<template>
  <div>
    <div class="space h-4"></div>
    <div class="topbar fixed z-50 bg-yellow-300 w-full shadow-md bg-opacity-100">
      <div class="flex max-w-screen-xl w-full p-2 mx-auto">        
        <!-- logo and title  -->
        <div id="logo" class="font-medium pl-6 sm:pl-4 w-64 sm:w-6/12 md:w-6/12">
          <a href="./index.html" class="flex">
            <img src="../assets/logo.png" alt="" class="h-10 sm:h-12" />
            <span class="mx-4 my-auto align-middle font-bold tracking-widest text-gray-700 text-left opacity-90
                         text-xl sm:text-2xl">Hoshi Home</span>
          </a>
        </div>
                
        <!-- nav <md show -->
        <div 
          class="md:hidden my-auto font-bold text-gray-700 text-2xl align-middle ml-auto mr-5"
          @click="showSidebar = !showSidebar">
          <font-awesome-icon :icon="['fas','bars']" />
        </div>
              
        <!-- nav >md show -->
        <nav class="w-3/5 flex space-x-4 mr-0 items-center justify-end font-medium hidden
                    md:flex">
          <router-link 
            v-for="item in menu_items" :key="item.name" :to="item.link"  
            class="nav_menu__item align-middle text-gray-700 font-medium transition duration-300 transform
                    hover:-translate-y-0.5 kEgdPT
                   pl-4 pr-3 py-2 rounded-md text-lg tracking-030">
            {{ item.name }}
          </router-link>            
        </nav>
      </div>
    </div>
    <div class="space h-14 sm:h-16"></div>  
    <!-- nav <md drawer -->
    <transition name="movedown">
      <nav-small v-if="showSidebar" class="fixed z-50 bg-gray-50 w-full left-0 pt-7 pb-8 opacity-90">
        <div class="absolute top-2 right-3 text-3xl" 
             @click="showSidebar=false">
          <font-awesome-icon :icon="['fas','times']" />
        </div>
        
        <nav @click="showSidebar=false">
          <router-link v-for="item in menu_items" :key="item.name" :to="item.link"  
                       class="nav_menu__item block align-middle text-gray-500 font-bold
                                pl-4 pr-3 py-2 text-lg tracking-030
                                hover:bg-gray-200 hover:text-white"> 
            {{ item.name }} 
            <hr />
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

.movedown-enter-active {
  transition: transform 0.6s ease;
}
.movedown-leave-active {
  transition: transform 0.35s ease;
}
.movedown-enter-from, .movedown-leave-to {
  transform: translateY(-50%) scaleY(0);
}
.movedown-enter-to, .movedown-leave-from {
  transform: translateY(0) scaleY(1);
}
.kEgdPT:hover::after  {
  animation-name: example;
  animation-duration: 0.9s;
}
.kEgdPT::after {
  position: absolute;
  bottom: 6px;
  left: 0px;
  width: 100%;
  height: 30%;
  background: repeating-linear-gradient(45deg, #0000 0px, #0000 7px, #666 7px, #666 18px);
  mask-image: linear-gradient(to right, transparent 0%, transparent 33%, #fff 33%, #fff 66%, transparent 66%, transparent 100%);
  mask-size: 320% 100%;
  mask-position: 0% 0; 
  opacity: 0.8;
  content: "";
  z-index: -1;
}
@keyframes example {
  0% {
    mask-position: 0% 0; 
  }
  32% {
    mask-position: 50% 0; 
  }
  68% {
    mask-position: 50% 0; 
  }
  100% {
    mask-position: 100% 0; 
  }
}
</style>
