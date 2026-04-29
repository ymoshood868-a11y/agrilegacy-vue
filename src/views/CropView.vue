<template>
  <div>
    <div class="page-banner" style="background-image: url('https://i.pinimg.com/736x/0a/ad/28/0aad2811cb03d6da79e3239c6daadcc3.jpg');">
      <div class="overlay"></div>
      <div class="content">
        <h1>Smart Crop Planning</h1>
        <p>Data-Driven Agricultural Intelligence</p>
      </div>
    </div>

    <section class="section">
      <div style="text-align: center; max-width: 800px; margin: 0 auto;">
        <h2 class="section-title">🌾 <span>Smart</span> Crop Planning</h2>
        <p style="font-size: 1.2rem; color: var(--text-secondary); line-height: 1.8;">
          Leverage AI, satellite imagery, and IoT sensors to optimize your crop production, reduce waste, and maximize yields sustainably.
        </p>
      </div>
    </section>

    <section class="section section-alt">
      <h2 class="section-title">Our <span>Solutions</span></h2>
      <div class="cards-grid">
        <div v-for="solution in solutions" :key="solution.title" class="card">
          <img :src="solution.image" :alt="solution.title" class="card-img" loading="lazy">
          <div class="card-content">
            <h3>{{ solution.title }}</h3>
            <p>{{ solution.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const solutions = [
  { title: 'Seasonal Rotation', image: 'https://i.pinimg.com/736x/0a/ad/28/0aad2811cb03d6da79e3239c6daadcc3.jpg', description: 'AI-powered crop rotation schedules that maximize soil health, reduce pest cycles, and increase yields by up to 40% through intelligent planning.' },
  { title: 'Smart Irrigation', image: 'https://i.pinimg.com/736x/11/31/08/113108415b57c18ce8c4d96209a186d2.jpg', description: 'Precision water management with soil moisture sensors, weather integration, and automated drip systems reducing water usage by 50%.' },
  { title: 'Harvest Forecasting', image: 'https://i.pinimg.com/736x/77/03/5d/77035dced6014f4762682b535ffc528e.jpg', description: 'Machine learning predictions using satellite imagery and weather data for optimal harvest timing with 95% accuracy.' }
]
</script>
