<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  },
})
</script>

<style>
#app {
  text-align: center;
  background-position: center top;
  background-size: 30px 52px;
  background-color: #fcfcfc;
 
  background-attachment: fixed;
  min-height: 100%;
  background-image: url('./assets/bg.svg');
}


/* scrollbar */
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>
