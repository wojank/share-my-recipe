<script setup lang="ts">
import { ref } from "vue";
import TheCard from "./TheCard.vue";

// dummy data
const elos = ref([
  "jeden",
  "dwa",
  "trzy",
  "cztery",
  "pięć",
  "sześć",
  "siedem",
  "osiem",
]);
</script>

<template>
  <section class="post-list">
    <h2 class="post-list__title">Najnowsze przepisy</h2>
    <div class="post-list__wrapper">
      <TheCard v-for="elo in elos" :elo="elo" />
    </div>
  </section>
</template>

<style scoped>
@import "../assets/sass/components/the-post-list.scss";
</style>
