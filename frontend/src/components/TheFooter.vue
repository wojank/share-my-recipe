<script setup lang="ts"></script>
<template>
  <footer class="footer">
    <div class="footer-primary">
      <div class="footer-primary__info">
        <div class="terms">
          <div>
            <span class="terms__title">About</span>
            <ul class="terms__list">
              <li class="terms__item">Become Affiliate</li>
              <li class="terms__item">Go Unlimited</li>
              <li class="terms__item">Service</li>
            </ul>
          </div>
          <div>
            <span class="terms__title">Product</span>
            <ul class="terms__list">
              <li class="terms__item">Mockups</li>
              <li class="terms__item">Presentations</li>
              <li class="terms__item">Ui Kits</li>
              <li class="terms__item">Wireframe Kits</li>
              <li class="terms__item">Themes & Templates</li>
            </ul>
          </div>
          <div>
            <span class="terms__title">Legals</span>
            <ul class="terms__list">
              <li class="terms__item">License</li>
              <li class="terms__item">Refund Policy</li>
              <li class="terms__item">About Us</li>
              <li class="terms__item">Contacts</li>
            </ul>
          </div>
          <div>
            <span class="terms__title">Blog</span>
            <ul class="terms__list">
              <li class="terms__item">Business Stories</li>
              <li class="terms__item">Digital Store</li>
              <li class="terms__item">Social Media</li>
              <li class="terms__item">Learning</li>
            </ul>
          </div>
        </div>
        <div class="newsletter">
          <span class="newsletter__title">Stay in Touch</span>
          <form class="newsletter__form">
            <input
              class="newsletter__input"
              type="text"
              placeholder="Type your email"
            />
            <button class="newsletter__btn">Sign up</button>
          </form>
        </div>
      </div>
      <div class="footer-secondary">
        <span class="footer-secondary__copy"
          >&copy; Copyright 2024. All Rights Reserved</span
        >
      </div>
    </div>
  </footer>
</template>
<style scoped>
@import "../assets/sass/components/the-footer.scss";
</style>
