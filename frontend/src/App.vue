<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import TheFooter from "./components/TheFooter.vue";
import ThePostList from "./components/ThePostList.vue";
import TheHero from "./components/TheHero.vue";
import TheNewsList from "./components/TheNewsList.vue";
import TheNewsletter from "./components/TheNewsletter.vue";
</script>

<template>
  <Navbar />
  <main>
    <TheHero />
    <ThePostList />
    <TheNewsList />
    <TheNewsletter />
  </main>
  <TheFooter />
</template>

<style scoped></style>
