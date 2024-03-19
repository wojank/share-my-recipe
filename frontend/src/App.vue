<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import TheFooter from "./components/TheFooter.vue";
import ThePostList from "./components/ThePostList.vue";
import TheHero from "./components/TheHero.vue";
</script>

<template>
  <Navbar />
  <main>
    <TheHero />
    <ThePostList />
  </main>
  <TheFooter />
</template>

<style scoped></style>
