<script setup lang="ts">
import { ref } from "vue";
import TheHeading from "./TheHeading.vue";

const isOpen = ref(false);
</script>

<template>
  <header class="navbar">
    <TheHeading />
    <div class="navbar__wrapper">
      <div class="nav-wrapper">
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
            <li class="nav__list-item dropdown">
              <a href="#" class="nav__list-link dropdown__btn">Przepisy</a>
              <div class="dropdown__content">
                <ul class="dropdown__list">
                  <li class="dropdown__element">
                    <a href="" class="nav__list-link">Kuchnia Włoska</a>
                  </li>
                  <li class="dropdown__element">
                    <a href="" class="nav__list-link">Kuchnia Francuska</a>
                  </li>
                  <li class="dropdown__element">
                    <a href="" class="nav__list-link">Kuchnia Hiszpańska</a>
                  </li>
                  <li class="dropdown__element">
                    <a href="" class="nav__list-link">Kuchnia Azjatycka</a>
                  </li>
                  <li class="dropdown__element">
                    <a href="" class="nav__list-link">Kuchnia Meksykańska</a>
                  </li>
                </ul>
              </div>
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
