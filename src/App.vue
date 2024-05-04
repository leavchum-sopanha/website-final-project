<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<style scoped>
html {
  overflow-x: hidden !important;
}

body {
  overflow-x: hidden;
}

.content-box {
  margin-top: 60px;
}
</style>
