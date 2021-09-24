<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex justify-center min-h-screen text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" 
                         enter-to="opacity-100" 
                         leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="overlay fixed inset-0 bg-gray-800 bg-opacity-95 transition-opacity" />
        </TransitionChild>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>
        <!-- image -->
        <TransitionChild as="template" enter="ease-out duration-300" 
                         enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-90" enter-to="opacity-100 translate-y-0 sm:scale-100" 
                         leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-middle bg-gray-500 mt-16 rounded-lg text-left overflow-hidden shadow-xl transform transition-all">
            <div class="bg-gray-500">
              <div class="sm:flex justify-center">
                <div class="text-center sm:text-left">
                  <div class="h-80vh relative group">
                    <img :src="currentShow" alt="" class="max-w-full max-h-full" />
                    <div class="absolute bottom-0 left-0 p-4 opacity-0 text-3xl tracking-widest text-white 
                                group-hover:opacity-70 transition duration-300 ease-in-out">
                      {{ currentTitle }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts">
  import { ref } from 'vue'
  import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'

  export default {
    components: {
      Dialog,
      DialogOverlay,
      TransitionChild,
      TransitionRoot,
    },
    props: {
      currentShow: {
        type: String,
        default: ''
      },
      currentTitle: {
        type: String,
        default: ''
      },
      currentContent: {
        type: String,
        default: ''
      }
    },
    
    setup() {
      const open = ref(false)
      
      return {
        open,
        show() {
          open.value = true
        }
      }
    },
    
  }
</script>

<style>
  .overlay{
    background-position: center top;
    background-size: 30px 52px;
    background-color: #fcfcfc;
  
    background-attachment: fixed;
    min-height: 100%;
    background-image: url('../assets/bg2.svg');
  }
</style>