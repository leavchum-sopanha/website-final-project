<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white m-0 p-0">
    <div class="container-fluid">
      <a class="navbar-brand">
        <img src="../assets/images/logo.jpg" alt="Logo" class="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <span
              :class="{ 'nav-link': true, active: isActive('/malis-pp') }"
              @click="setActiveLink('/malis-pp')"
            >
              <RouterLink to="/malis-pp">Malis Phnom Penh</RouterLink>
            </span>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/malis-sr"
              :class="{ 'nav-link': true, active: isActive('/malis-sr') }"
              @click="setActiveLink('/malis-sr')"
              >Malis Siem Reap</RouterLink
            >
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              :class="{ active: isActive('/about-us') }"
            >
              About Us
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li class="pl-3">
                <RouterLink
                  to="/about-us/our-chefs"
                  :class="{ 'nav-link': true, active: isActive('/about-us/our-chefs') }"
                  @click="setActiveLink('/about-us')"
                  >Our Chefs</RouterLink
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li class="pl-3">
                <RouterLink
                  to="/about-us/signature-dishes"
                  :class="{ 'nav-link': true, active: isActive('/about-us/signature-dishes') }"
                  @click="setActiveLink('/about-us')"
                  >Signature Dishes</RouterLink
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li class="pl-3">
                <RouterLink
                  to="/about-us/legal-notice"
                  :class="{ 'nav-link': true, active: isActive('/about-us/legal-notice') }"
                  @click="setActiveLink('/about-us')"
                  >Legal Notice</RouterLink
                >
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <RouterLink
              to="/menu"
              :class="{ 'nav-link': true, active: isActive('/menu') }"
              @click="setActiveLink('/menu')"
              >Menu</RouterLink
            >
          </li>
          <!-- <li class="nav-item">
            <RouterLink to="/news" class="nav-link">News</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/events" class="nav-link">Events</RouterLink>
          </li> -->
          <li class="nav-item">
            <RouterLink
              to="/contact"
              :class="{ 'nav-link': true, active: isActive('/contact') }"
              @click="setActiveLink('/contact')"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </div>
      <div class="d-flex align-items-center">
        <button class="btn-reservation">Reservation</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const isActive = (path) => {
  return route.path.startsWith(path)
}

// const setActiveLink = (path) => {
//   // If needed, you can perform additional logic here before setting the active link
//   // For example, you can store the active link in a Vuex store for global access
// }
</script>
<style scoped>
html {
  overflow-x: hidden !important;
}

body {
  overflow-x: hidden;
  overflow-y: hidden;
}

nav {
  border-bottom: 2px solid #cccccc;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 999;
}

.content-box {
  margin-top: 60px;
}

.logo {
  height: 60px;
  width: 60px;
  margin-right: 20px;
}

.nav-item {
  padding: 5px;
  display: flex;
  align-items: center;
}

.nav-link {
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.nav-link:hover {
  color: #c7aa5e;
}

.nav-link.active {
  color: #c7aa5e;
}

.active {
  color: #c7aa5e;
}

.dropdown-menu {
  min-width: 160px;
}

.btn-reservation {
  background-color: #c7aa5e;
  color: white;
  min-width: 150px;
  height: 55px;
}

.btn-reservation:hover {
  color: #c7aa5e;
  background-color: white;
  border: 1px solid #c7aa5e;
}
</style>
