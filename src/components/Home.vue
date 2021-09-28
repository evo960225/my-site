<template>
  <div class="flex warp mx-12">
    <div class="bg-bottom">
      <video id="bg-video" src="/src/assets/cube_spin_compress.mp4" 
             autoplay playsinline 
             muted></video>
      <div class="bg-texture"></div>
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
.bg-bottom {
  background-color: #252525;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.bg-texture {
  background-image: url('/src/assets/bg2.svg');
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
}
#bg-video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.15;
}
</style>