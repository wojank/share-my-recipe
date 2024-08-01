<script setup lang="ts">
interface Config {
  name: String;
  link?: String;
}
const props = defineProps<Config>();
const { name, link } = props;
</script>
<template>
  <div class="cat-card">
    <img class="cat-card__img" src="/categoryfake.jpeg" alt="przepisy.pl" />
    <h4 class="cat-card__title">{{ name }}</h4>
    <span class="cat-card__separator"></span>
  </div>
</template>
<style scoped lang="scss">
@import "../assets/sass/components/category-card.scss";
</style>
