<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import TheFooter from "./components/TheFooter.vue";
import ThePostList from "./components/ThePostList.vue";
import TheHero from "./components/TheHero.vue";
import TheNewsList from "./components/TheNewsList.vue";
import CtaNewsletter from "./components/CtaNewsletter.vue";
import CtaRegister from "./components/CtaRegister.vue";
import CategoryCarousel from "./components/CategoryCarousel.vue";
</script>

<template>
  <Navbar />
  <main>
    <TheHero />
    <ThePostList />
    <TheNewsList />
    <CtaNewsletter />
    <CtaRegister />
    <CategoryCarousel />
  </main>
  <TheFooter />
</template>

<style scoped></style>
