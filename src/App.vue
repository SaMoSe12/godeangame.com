<template>
  <nav class="navbar" role="navigation" aria-label="mainNav">
    <div class="navbar-brand">
      <router-link :to="{ name: 'home' }" class="navbar-item">
        <img src="@/assets/img/GoDeanLogo.png" alt="logo">
      </router-link>
      <a role="button" class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <router-link class="navbar-item" :to="{ name: 'home' }">Home</router-link>
        <router-link class="navbar-item" :to="{ name: 'about' }">About</router-link>
        <router-link class="navbar-item" :to="{ name: 'devlog' }">Devlog</router-link>
        <router-link class="navbar-item" :to="{ name: 'contact' }">Contact</router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { RouterView, RouterLink } from 'vue-router';
export default {
  data() {
    return {
      showNav: false
    }
  }
}
</script>