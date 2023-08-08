<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { reactive, provide } from 'vue'
//Vue Use
import { useOnline } from '@vueuse/core'
//Vue Use
const online = useOnline()
const userData = reactive({
  name: 'Danny',
  userName: 'dannyconnell'
})

provide('userData', userData)
</script>

<template>
  <div>
    <div class="user-data">
      {{ userData.name }} @{{ userData.userName }} |
      Network Status:
      <span :style="{ color: online ? 'green' : 'red' }">
        <b>{{ online ? 'Online' : 'Offline' }}</b>
      </span>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/posts">Posts</RouterLink>
      <RouterLink to="/modals">Modals</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
<!--    to keep the page alive-->
<!--    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>-->
<!--    to destroy the page-->
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
.user-data {
  position: absolute;
  background-color: beige;
  top: 0;
  right: 0;
  font-size: 12px;
  padding: 5px;
}
</style>
