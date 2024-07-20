<script setup lang="ts">
import { ref } from "vue";
import TheNews from "./TheNews.vue";
const iterations = ref([1, 2, 3, 4, 5, 6, 7, 8]);
</script>

<template>
  <section class="news-list">
    <h2 class="news-list__title">ze świata kuchni</h2>
    <div class="news-list__wrapper">
      <TheNews />
      <TheNews />
      <TheNews />
    </div>
  </section>
</template>
<style scoped>
@import "../assets/sass/components/the-news-list.scss";
</style>
