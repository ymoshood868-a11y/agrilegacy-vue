<template>
  <div>
    <div class="page-banner" style="background-image: url('https://i.pinimg.com/736x/d5/71/7b/d5717b81e72ecfb12fcfa950827a4e0d.jpg');">
      <div class="overlay"></div>
      <div class="content">
        <h1>Aquaculture Excellence</h1>
        <p>Sustainable Fish Farming Solutions for the Future</p>
      </div>
    </div>

    <section class="section">
      <div style="text-align: center; max-width: 800px; margin: 0 auto;">
        <h2 class="section-title">🐟 <span>Aquaculture</span> Excellence</h2>
        <p style="font-size: 1.2rem; color: var(--text-secondary); line-height: 1.8;">
          Our aquaculture solutions combine IoT technology, water quality monitoring, and data analytics to help you 
          maximize fish production while maintaining environmental sustainability.
        </p>
      </div>
    </section>

    <section class="section section-alt">
      <h2 class="section-title">Our <span>Solutions</span></h2>
      <div class="cards-grid cards-grid-4">
        <div v-for="solution in solutions" :key="solution.title" class="card">
          <img :src="solution.image" :alt="solution.title" class="card-img">
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
  { title: 'Smart Pond Management', image: 'https://i.pinimg.com/736x/1e/69/60/1e696035de8fabfd51c5e53b4181bbb4.jpg', description: 'IoT-enabled water quality monitoring with real-time alerts, automated feeding systems, oxygen level tracking, and temperature control.' },
  { title: 'Aquaponics Integration', image: 'https://i.pinimg.com/736x/d5/71/7b/d5717b81e72ecfb12fcfa950827a4e0d.jpg', description: 'Symbiotic fish-plant systems, nutrient cycling optimization, sustainable closed-loop farming.' },
  { title: 'Harvest Management', image: 'https://i.pinimg.com/1200x/8e/64/2d/8e642d8a9960d78da6f51a2965cb871b.jpg', description: 'Growth prediction algorithms with 95% accuracy, optimal harvest timing recommendations.' },
  { title: 'Water Quality Control', image: 'https://i.pinimg.com/1200x/11/e5/aa/11e5aa40e086801b2109b5f7ef23d53f.jpg', description: '24/7 pH monitoring, temperature regulation, ammonia level alerts, dissolved oxygen tracking.' },
  { title: 'Breeding Programs', image: 'https://i.pinimg.com/736x/c3/d2/8f/c3d28f315cec62ebd3b96893f3dd29bd.jpg', description: 'Genetic selection algorithms, spawning management, fry rearing optimization.' },
  { title: 'Production Analytics', image: 'https://i.pinimg.com/1200x/0e/ce/b7/0eceb753469b6be202cb167196c5ea76.jpg', description: 'Growth rate tracking dashboards, feed conversion ratio optimization, profitability analysis.' },
  { title: 'Environmental Sustainability', image: 'https://i.pinimg.com/1200x/66/87/d6/6687d665dc0567a854f6cb7ec1b932c6.jpg', description: 'Eco-friendly systems like recirculating water systems and integrated farming.' },
  { title: 'Feed Safety & Quality', image: 'https://i.pinimg.com/736x/c3/d2/d4/c3d2d4481f955241b22412c8c78fe183.jpg', description: 'Premium feed management ensuring optimal nutrition and growth rates.' }
]
</script>
