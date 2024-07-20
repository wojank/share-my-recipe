<script setup lang="ts">
import { ref } from "vue";
import CtaWrapper from "./CtaWrapper.vue";

const config = ref({
  headline: "dołącz do naszego newslettera",
  text: "i otrzymuj powiadomienia o nowościach",
});
</script>

<template>
  <CtaWrapper v-bind="config">
    <form class="newsletter">
      <input
        class="newsletter__form"
        type="email"
        placeholder="e-mail
    "
      />
      <button class="newsletter__btn">dołącz</button>
    </form>
  </CtaWrapper>
</template>

<style scoped lang="scss">
@import "../assets/sass/components/cta-newsletter.scss";
</style>
