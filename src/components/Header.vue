<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }">Accueil</RouterLink>
      <RouterLink :to="{ name: 'create' }">Create</RouterLink>
      <RouterLink :to="{ name: 'profile' }">Profile</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  gap: 18px;
}
</style>
