<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import ThePostList from "./components/ThePostList.vue";
import TheHero from "./components/TheHero.vue";
</script>

<template>
  <Navbar />
  <main>
    <TheHero />
    <ThePostList />
  </main>
</template>

<style scoped></style>
