<script setup lang="ts">
const tags = ["włochy", "deser", "przepis", "tanio", "kuchnia fusion"];
</script>

<template>
  <div class="tags">
    <span v-for="tag in tags" class="tags__tag">{{ tag }}</span>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/sass/components/category-tags.scss";
</style>
