<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <router-link to="/" class="logo">Agri<span>Legacy</span></router-link>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/livestock">Livestock</router-link></li>
        <li><router-link to="/aquaculture">Aquaculture</router-link></li>
        <li><router-link to="/crop">Crops</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/sustainability">Sustainability</router-link></li>
        <li><router-link to="/reviews">Reviews</router-link></li>
        <li><router-link to="/insights">Insights</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
      <div style="display: flex; gap: 1rem; align-items: center;">
        <button class="theme-toggle" @click="themeStore.toggleTheme()">
          <i :class="themeStore.isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
        <button class="mobile-menu-btn" @click="openMobileMenu">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </nav>

  <div class="mobile-nav-overlay" :class="{ active: isMobileMenuOpen }" @click="closeMobileMenu"></div>
  <div class="mobile-nav" :class="{ active: isMobileMenuOpen }">
    <button class="close-menu" @click="closeMobileMenu">
      <i class="fas fa-times"></i>
    </button>
    <ul class="mobile-nav-links">
      <li><router-link to="/" @click="closeMobileMenu">🏠 Home</router-link></li>
      <li><router-link to="/livestock" @click="closeMobileMenu">🐄 Livestock Management</router-link></li>
      <li><router-link to="/aquaculture" @click="closeMobileMenu">🐟 Aquaculture / Fish Farming</router-link></li>
      <li><router-link to="/crop" @click="closeMobileMenu">🌾 Crop Planning</router-link></li>
      <li><router-link to="/services" @click="closeMobileMenu">⚙️ Services</router-link></li>
      <li><router-link to="/sustainability" @click="closeMobileMenu">🌍 Sustainability</router-link></li>
      <li><router-link to="/reviews" @click="closeMobileMenu">⭐ Reviews</router-link></li>
      <li><router-link to="/insights" @click="closeMobileMenu">📝 Insights / Blog</router-link></li>
      <li><router-link to="/contact" @click="closeMobileMenu">📞 Contact</router-link></li>
    </ul>
    <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--border);">
      <p style="color: var(--accent-gold); margin-bottom: 0.5rem;">Connect With Us</p>
      <div class="social-links">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
        <a href="https://wa.me/15551234567" target="_blank"><i class="fab fa-whatsapp"></i></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const openMobileMenu = () => {
  isMobileMenuOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
