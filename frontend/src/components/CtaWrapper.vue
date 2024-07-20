<script setup lang="ts">
interface Config {
  color?: string;
  headline: string;
  text: string;
}

const props = defineProps<Config>();
</script>
<template>
  <section class="cta-wrapper" :style="{ backgroundColor: props.color }">
    <div class="cta-wrapper__badge">
      <h3 class="cta-wrapper__title">{{ props.headline }}</h3>
      <p class="cta-wrapper__paragraph">{{ props.text }}</p>
      <slot></slot>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import "../assets/sass/components/cta-wrapper.scss";
</style>
