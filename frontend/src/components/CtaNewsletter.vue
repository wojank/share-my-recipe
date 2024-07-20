<script setup lang="ts">
import CtaWrapper from "./CtaWrapper.vue";
</script>
<template>
  <CtaWrapper
    headline="dołącz do naszego newslettera"
    text="i otrzymuj powiadomienia o nowościach"
  >
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
