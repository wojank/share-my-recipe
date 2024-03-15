<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <header class="navbar">
    <div class="navbar__wrapper">
      <div class="nav-wrapper">
        <div class="brand">
          <h2 class="brand__logo">MyRecipe</h2>
        </div>
        <nav :class="[{ open: isOpen }, 'nav']">
          <ul class="nav__list">
            <li class="nav__list-item">
              <a href="#" class="nav__list-link">Newsy</a>
            </li>
            <li class="nav__list-item">
              <a href="#" class="nav__list-link">Desery</a>
            </li>
            <li class="nav__list-item">
              <a href="#" class="nav__list-link">Koktajle</a>
            </li>
            <li class="nav__list-item">
              <a href="#" class="nav__list-link">Przepisy</a>
            </li>
          </ul>
        </nav>
        <div class="hamburger" @click="isOpen = !isOpen">
          <span :class="[{ rotate: isOpen }, 'hamburger__bar']"></span>
        </div>
      </div>
      <button class="cta-sign">Sign Up</button>
    </div>
  </header>
</template>

<style scoped>
@import "../assets/sass/components/navbar.scss";
</style>
