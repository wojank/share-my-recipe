<script setup lang="ts"></script>
<template>
  <section class="hero">
    <div class="hero__container">
      <div class="main">
        <div>
          <h1 class="main__headline">
            znajdź przepis<br />
            który cię <br />zainspiruje
          </h1>
          <p class="main__paragraph">
            Lub załóż konto i zainspiruj innych <br />
            publikując własne przepisy
          </p>
        </div>
        <div class="cta">
          <button class="cta__btn cta__btn--primary">zarejestruj się</button>
          <button class="cta__btn cta__btn--secondary">
            przeglądaj przepisy
          </button>
        </div>
      </div>
      <img class="hero__image" src="/hero.jpg" alt="przepisy.pl" />
    </div>
  </section>
</template>
<style scoped>
@import "../assets/sass/components/the-hero.scss";
</style>
