<template>
  <div id="content-wrapper"
       class="min-h-70vh max-w-screen-xl px-3 pt-8 pb-8 mx-auto bg-white
              bg-opacity-80 shadow">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      text1: '主題1',
      text2: '主題2',
      content: 'random text',
    }
  }
})
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0.1;
}
</style>