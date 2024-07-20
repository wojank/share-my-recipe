<script setup lang="ts">
interface Config {
  color?: string;
  headline: string;
  text: string;
}

const props = defineProps<Config>();
const { color, headline, text } = props;
</script>

<template>
  <section class="cta-wrapper" :style="{ backgroundColor: color }">
    <div class="cta-wrapper__badge">
      <h3 class="cta-wrapper__title">{{ headline }}</h3>
      <p class="cta-wrapper__paragraph">{{ text }}</p>
      <slot></slot>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/sass/components/cta-wrapper.scss";
</style>
