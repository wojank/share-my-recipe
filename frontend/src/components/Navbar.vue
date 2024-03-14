<script setup lang="ts"></script>

<template>
  <header class="navbar">
    <div class="navbar__wrapper">
      <div class="nav-wrapper">
        <div class="brand">
          <h2 class="brand__logo">MyRecipe</h2>
        </div>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__list-item">Newsy</li>
            <li class="nav__list-item">Desery</li>
            <li class="nav__list-item">Koktajle</li>
            <li class="nav__list-item">Przepisy</li>
          </ul>
        </nav>
        <div class="hamburger">
          <span class="hamburger__bar"></span>
        </div>
      </div>
      <button class="cta-sign">Sign Up</button>
    </div>
  </header>
</template>

<style scoped>
@import "../assets/sass/components/navbar.scss";
</style>
