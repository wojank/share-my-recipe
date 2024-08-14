<script setup lang="ts">
import { ref } from "vue";
import CtaWrapper from "./CtaWrapper.vue";

const config = ref({
  color: "rgb(255,255,255)",
  headline: "Znajdź nas",
});
</script>

<template>
  <CtaWrapper v-bind="config">
    <div class="socials">
      <font-awesome-icon icon="fa-brands fa-facebook" size="2x" />
      <font-awesome-icon icon="fa-brands fa-square-instagram" size="2x" />
      <font-awesome-icon icon="fa-brands fa-twitter" size="2x" />
      <font-awesome-icon icon="fa-brands fa-linkedin" size="2x" />
      <font-awesome-icon icon="fa-brands fa-pinterest" size="2x" />
    </div>
  </CtaWrapper>
</template>

<style scoped lang="scss">
@import "../assets/sass/components/the-socials.scss";
</style>
