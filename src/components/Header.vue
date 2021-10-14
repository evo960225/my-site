<template>
  <div>
    <div class="space h-4"></div>
    <div class="topbar fixed z-50 bg-yellow-300 w-full shadow-md bg-opacity-100">
      <div class="flex max-w-screen-xl w-full p-2 mx-auto">        
        <!-- logo and title  -->
        <div id="logo" class="font-medium pl-6 sm:pl-4 w-64 sm:w-6/12 md:w-6/12">
          <a href="/" class="flex">
            <img src="../assets/logo.png" alt="" class="h-10 sm:h-12" />
            <span class="mx-4 my-auto align-middle font-semibold tracking-widest text-gray-700 text-left
                         text-xl sm:text-2xl">Hoshi Home</span>
          </a>
        </div>
                
        <!-- nav <md show -->
        <div 
          class="md:hidden my-auto font-bold text-gray-700 text-2xl align-middle ml-auto mr-5"
          @click="switchDrawer()">
          <font-awesome-icon :icon="['fas','bars']" />
        </div>
              
        <!-- nav >md show -->
        <nav class="w-3/5 flex space-x-4 mr-0 items-center justify-end font-medium hidden
                    md:flex">
          <router-link 
            v-for="item in menu_items" :key="item.name" :to="item.link"  
            class="nav_menu__item align-middle text-gray-700 font-medium transition duration-300 transform
                   hover:-translate-y-0.5 menu-hover-animate
                   pl-4 pr-3 py-2 rounded-md text-lg tracking-030">
            {{ item.name }}
          </router-link>            
        </nav>
      </div>
    </div>
    <div class="space h-14 sm:h-16"></div>  
    <!-- nav <md drawer -->
    <nav-small class="drawer fixed z-10 w-full left-0 opacity-90 overflow-y-hidden"
               :class="{ 'invisible': !showDrawer }">
      <nav class="drawer__nav bg-gray-50 relative"
           :class="{ 'drawer__nav--open': showDrawer, 'drawer__nav--close': !showDrawer }"
           @click="closeDrawer()">
        <div class="absolute text-3xl top-1 right-2" 
             @click="closeDrawer()">
          <font-awesome-icon :icon="['fas','times']" />
        </div>
        <div class="pt-8 mb-5">
          <router-link v-for="item in menu_items" :key="item.name" :to="item.link"  
                       class="nav_menu__item block align-middle text-gray-500 font-bold
                              pl-4 pr-3 py-2 text-lg tracking-030
                              hover:bg-gray-200 hover:text-white"> 
            {{ item.name }} 
            <hr />
          </router-link>
        </div>
      </nav>
    </nav-small>
  </div>
</template>
<script lang="ts">
   
    import { defineComponent } from 'vue'
    
    export default defineComponent({
      data(){
          return{  
            menu_items: [
              /*{name:'文章', link:'articles'},*/
              {name:'3D', link:'_3D'},
              {name:'攝影', link:'photo'},
              {name:'雜項', link:'other_works'},
              {name:'關於星', link:'me'}
            ],
            showDrawer: false,
            showBeforeDrawer: false,
          }
      },

      methods:{
        closeDrawer(){
          this.showDrawer = false;
        },
        switchDrawer(){
          this.showDrawer = !this.showDrawer;
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
:root {
  --topbar-transition-sec: 0.5s;
}
.drawer{
  transition: visibility var(--topbar-transition-sec);
}
.drawer__nav {
  transition: transform var(--topbar-transition-sec) ease;
}
.drawer__nav--open {
  transform: translateY(0%);
}
.drawer__nav--close {
  transform: translateY(-100%);
}

.menu-hover-animate:hover::after  {
  animation-name: menu-animate;
  animation-duration: 0.65s;
}
.menu-hover-animate::after {
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
@keyframes menu-animate {
  0% {
    mask-position: 0% 0; 
  }
  37% {
    mask-position: 50% 0; 
  }
  62% {
    mask-position: 50% 0; 
  }
  100% {
    mask-position: 100% 0; 
  }
}
</style>
