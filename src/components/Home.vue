<template>
  <div class="flex warp relative w-full">
    <background>
      <div class="bg-bottom">
        <video id="bg-video" src="/src/assets/cube_spin_compress.mp4" 
               autoplay playsinline muted></video>
        <div class="bg-texture"></div>
      </div>
    </background>
    <div class="z-10 absolute px-8 py-6 left-0 top-64 bg-gray-800 bg-opacity-30 w-full h-64 text-left text-white
                md:px-24 lg:px-36">
      <div class="text-5xl tracking-070 mb-3 font-bold
                  md:text-8xl md:tracking-150 md:mb-6">哈囉哈！</div>
      <div class="text-xl text-white tracking-020
                  md:text-3xl md:tracking-020">
        <p>這裡是Hash code的窩</p>
        <p>主要是用來炫技的網站(?</p>
        <p>包含各種作品3D、攝影、經歷...等</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
   
    import { defineComponent } from 'vue'

    export default defineComponent({
      components: {
        
      },
      data(){
        return{
        }
      },
      mounted() {
        const video = document.getElementById('bg-video')
        if(video !== null){
          video.addEventListener('ended',this.bgVideoSleep,false);
        }
      },
      methods: {
        bgVideoSleep(){
          setTimeout(function(){
            const video = document.getElementById('bg-video')
            if(video !== null){
              (video as HTMLVideoElement).play();
            }
          }, 1200);
        }
      }
    })

 
</script>

<style>
background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.bg-bottom {
  background-color: #252525;
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
}
.bg-texture {
  background-image: url('/src/assets/bg2.svg');
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
}
#bg-video {
  object-fit: cover;
  position: absolute;
  opacity: 0.15;
  width: 100%;
  height: 100%;
}
</style>