<script setup lang="ts">
import CategoryTags from "./CategoryTags.vue";

defineProps<{ elo: string }>();
</script>

<template>
  <a href="#" class="card-link">
    <article class="card">
      <img class="card__image" src="/orange-juice.jpg" alt="hej" />
      <div class="card__typography">
        <span class="card__category">{{ elo }}</span>
        <h3 class="card__title">To jest tytuł wpisu blogowego dynamiczny</h3>
        <CategoryTags />
      </div>
    </article>
  </a>
</template>

<style scoped>
@import "../assets/sass/components/the-card.scss";
</style>
