<script setup lang="ts">
import CategoryCard from "./CategoryCard.vue";
const categoryConfig = [
  {
    name: "Kuchnia Indyjska",
    link: "kuchnia-indyjska",
  },
  {
    name: "Kuchnia Włoska",
    link: "kuchnia-indyjska",
  },
  {
    name: "Kuchnia Azjatycka",
    link: "kuchnia-indyjska",
  },
  {
    name: "Kuchnia Francuska",
    link: "kuchnia-indyjska",
  },
  {
    name: "Kuchnia Meksykańska",
    link: "kuchnia-indyjska",
  },
];
</script>
<template>
  <section class="cat-carousel">
    <CategoryCard v-for="item in categoryConfig" v-bind="item" />
  </section>
</template>
<style scoped lang="scss">
@import "../assets/sass/components/category-carousel.scss";
</style>
