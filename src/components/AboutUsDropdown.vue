<!-- eslint-disable vue/multi-word-component-names -->

<template>
   <li class="nav-item position-relative" @mouseover="showDropdown" @mouseleave="hideDropdown">
     <RouterLink class="nav-link" to="/about-us">
       About Us <i class="fas fa-angle-down dropdown-icon"></i>
     </RouterLink>
     <ul class="dropdown-menu" v-show="showDropdown">
       <li>
         <router-link to="/about-us/our-chefs" class="dropdown-item">Our Chef</router-link>
       </li>
       <li><hr class="dropdown-divider" /></li>
       <li>
         <router-link to="/about-us/signature-dishes" class="dropdown-item">Signature Dishes</router-link>
       </li>
       <li><hr class="dropdown-divider" /></li>
       <li>
         <router-link to="/about-us/our-gallery" class="dropdown-item">Our Gallery</router-link>
       </li>
       <li><hr class="dropdown-divider" /></li>
       <li>
         <router-link to="/about-us/legal-notice" class="dropdown-item">Legal Notice</router-link>
       </li>
     </ul>
   </li>
 </template>
 
 <script setup>
 import { ref } from 'vue'
 
 const show = ref(false)
 
 function showDropdown() {
   show.value = true
 }
 
 function hideDropdown() {
   show.value = false
 }
 </script>
 
 <style scoped>
 .nav-item { /* Ensure dropdown doesn't overflow container */
   display: inline-block;
 }
 
 .dropdown-menu { /* Position dropdown absolutely for correct behavior */
   position: absolute;
   top: 100%; /* Position below the navbar link */
   left: 0; /* Align to the left of the parent */
   background-color: #fff; /* Set background color */
   min-width: 150px; /* Set minimum width for dropdown */
   border-radius: 0.25rem; /* Add rounded corners */
   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Add slight shadow */
   z-index: 10; /* Ensure dropdown appears on top of other elements */
 }
 
 .dropdown-menu.show { /* Style for open dropdown */
   display: block;
 }
 </style>
 