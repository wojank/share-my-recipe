<script setup lang="ts">
import { ref } from "vue";
import CtaWrapper from "./CtaWrapper.vue";

const config = ref({
  color: "rgb(126, 169, 126)",
  headline: "chcesz publikować własne przepisy?",
  text: "załóż konto i podziel się wiedzą",
});
</script>

<template>
  <CtaWrapper v-bind="config">
    <button class="register-btn">zarejestruj</button>
  </CtaWrapper>
</template>

<style scoped lang="scss">
@import "../assets/sass/components/cta-register.scss";
</style>
