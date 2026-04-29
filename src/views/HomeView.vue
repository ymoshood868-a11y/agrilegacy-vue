<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="carousel-container">
        <div 
          v-for="(slide, index) in slides" 
          :key="index"
          class="carousel-slide" 
          :class="{ active: currentSlide === index }"
          :style="{ backgroundImage: `url('${slide}')` }"
        ></div>
        <div class="hero-overlay">
          <div class="hero-content">
            <h1>Agri<span class="gold-text">Legacy</span></h1>
            <p class="hero-tagline">Building Tomorrow's Farms Today — Since 1985</p>
            <p class="hero-subtitle">Trusted by 15,000+ farmers across 45+ countries</p>
            <router-link to="/services" class="cta-button">Explore Solutions</router-link>
            <router-link to="/contact" class="cta-button cta-button-outline">Schedule Consultation</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <div class="stats">
      <div class="stats-grid">
        <div class="stat-item"><h3>15,000+</h3><p>Happy Farmers</p></div>
        <div class="stat-item"><h3>1.2M+</h3><p>Acres Managed</p></div>
        <div class="stat-item"><h3>99%</h3><p>Satisfaction Rate</p></div>
        <div class="stat-item"><h3>24/7</h3><p>Expert Support</p></div>
        <div class="stat-item"><h3>45+</h3><p>Countries Served</p></div>
      </div>
    </div>

    <!-- About Intro -->
    <section class="section">
      <div class="about-intro-container">
        <div class="about-intro-image">
          <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80&auto=format" alt="Modern Agriculture" loading="lazy" />
        </div>
        <div class="about-intro-content">
          <h2 class="section-title">Welcome to <span>AgriLegacy</span></h2>
          <p style="font-size: 1.1rem; color: var(--text-secondary); line-height: 1.8;">
            For over three decades, AgriLegacy has been at the forefront of agricultural innovation, 
            helping farmers worldwide achieve sustainable growth, increased productivity, and lasting prosperity. 
            Our integrated approach combines traditional wisdom with cutting-edge technology.
          </p>
        </div>
      </div>
    </section>

    <!-- Quick Links to Other Pages -->
    <section class="section section-alt solutions-section">
      <h2 class="section-title">Explore Our <span>Solutions</span></h2>
      <div class="section-subtitle">Comprehensive Farm Management</div>
      <div class="cards-grid solutions-grid">
        <div class="card">
          <img src="https://cdn.prod.website-files.com/64247ee2293b8621e454f004/68ef431ce6c24318dde140be_Herd%20of%20cows.jpg" alt="Livestock" class="card-img card-img-small" loading="lazy">
          <div class="card-content">
            <h3>🐄 Livestock Management</h3>
            <p>Advanced herd tracking, AI-powered health monitoring, and automated feeding systems for cattle, poultry, and sheep.</p>
            <router-link to="/livestock" style="color: var(--accent-gold); text-decoration: none; display: inline-block; margin-top: 1rem;">Learn More →</router-link>
          </div>
        </div>
        <div class="card">
          <img src="https://i.pinimg.com/736x/1e/69/60/1e696035de8fabfd51c5e53b4181bbb4.jpg" alt="Aquaculture" class="card-img card-img-small" loading="lazy">
          <div class="card-content">
            <h3>🐟 Aquaculture</h3>
            <p>Smart pond management, water quality control, and sustainable fish farming solutions.</p>
            <router-link to="/aquaculture" style="color: var(--accent-gold); text-decoration: none; display: inline-block; margin-top: 1rem;">Learn More →</router-link>
          </div>
        </div>
        <div class="card">
          <img src="https://i.pinimg.com/736x/0a/ad/28/0aad2811cb03d6da79e3239c6daadcc3.jpg" alt="Crops" class="card-img card-img-small" loading="lazy">
          <div class="card-content">
            <h3>🌾 Crop Planning</h3>
            <p>AI-powered crop rotation, smart irrigation, and harvest forecasting for maximum yields.</p>
            <router-link to="/crop" style="color: var(--accent-gold); text-decoration: none; display: inline-block; margin-top: 1rem;">Learn More →</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="section">
      <h2 class="section-title">Our <span>Legacy</span></h2>
      <div class="section-subtitle">Four Decades of Agricultural Excellence</div>
      <div class="timeline">
        <div v-for="(item, index) in timeline" :key="index" class="timeline-item" :class="index % 2 === 0 ? 'left' : 'right'">
          <div class="timeline-content">
            <h3>{{ item.year }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <div class="section">
      <div class="newsletter">
        <h3 style="font-size: 2rem; margin-bottom: 1rem;">Stay Updated</h3>
        <p>Subscribe to our newsletter for farming tips, industry news, and exclusive offers</p>
        <div class="newsletter-input">
          <input v-model="newsletterEmail" type="email" placeholder="Your email address">
          <button @click="subscribeNewsletter">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&auto=format',
  'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=1600&q=80&auto=format',
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1600&q=80&auto=format'
]

const currentSlide = ref(0)
const newsletterEmail = ref('')

const timeline = [
  { year: '1985', description: 'AgriLegacy founded with a vision to transform traditional farming.' },
  { year: '1995', description: 'Launched first livestock management software, serving 500+ farms.' },
  { year: '2005', description: 'Expanded internationally, reaching 10,000 farmers.' },
  { year: '2015', description: 'Introduced AI and IoT solutions for precision agriculture.' },
  { year: '2024', description: 'Serving 15,000+ farmers globally, managing 1.2M+ acres.' }
]

const changeSlide = (direction: number) => {
  currentSlide.value += direction
  if (currentSlide.value >= slides.length) currentSlide.value = 0
  if (currentSlide.value < 0) currentSlide.value = slides.length - 1
}

const subscribeNewsletter = () => {
  if (newsletterEmail.value) {
    alert('Thank you for subscribing to our newsletter!')
    newsletterEmail.value = ''
  } else {
    alert('Please enter a valid email address.')
  }
}

let carouselInterval: number

onMounted(() => {
  carouselInterval = setInterval(() => changeSlide(1), 5000)
})

onUnmounted(() => {
  clearInterval(carouselInterval)
})
</script>

<style scoped>
.about-intro-container {
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 3rem;
  align-items: center;
}

.about-intro-image {
  width: 100%;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.about-intro-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.about-intro-image:hover img {
  transform: scale(1.05);
}

.about-intro-content {
  padding: 2rem;
}

.about-intro-content .section-title {
  text-align: left;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .about-intro-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .about-intro-image {
    height: 300px;
  }
  
  .about-intro-content {
    padding: 1rem;
  }
  
  .about-intro-content .section-title {
    text-align: center;
  }
}

/* Solutions Section - Full Width */
.solutions-section {
  max-width: 100% !important;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 6rem 5%;
  border-radius: 0;
}

.solutions-grid {
  max-width: 1400px;
  margin: 0 auto;
}

.card-img-small {
  height: 180px !important;
}

@media (max-width: 768px) {
  .solutions-section {
    padding: 4rem 5%;
  }
  
  .card-img-small {
    height: 150px !important;
  }
}

/* Timeline Glass Effect */
.timeline-content {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
}

[data-theme="dark"] .timeline-content {
  background: rgba(26, 26, 36, 0.4) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}

/* Image Loading Optimization */
img {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

img[src] {
  animation: none;
  background: none;
}

[data-theme="dark"] img {
  background: linear-gradient(90deg, #2a2a35 25%, #1a1a24 50%, #2a2a35 75%);
  background-size: 200% 100%;
}

/* Hero Text Styling */
.hero-tagline {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.hero-subtitle {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  font-weight: 400;
  animation: fadeInUp 1s ease 0.3s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@media (max-width: 768px) {
  .hero-tagline {
    font-size: 1rem;
  }
  
  .hero-subtitle {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-tagline {
    font-size: 0.95rem;
  }
  
  .hero-subtitle {
    font-size: 0.9rem;
  }
}
</style>

