<template>
  <div>
    <div class="page-banner" style="background-image: url('https://i.pinimg.com/736x/4e/1c/c7/4e1cc7391bcdb10ac0dc7bc8c4d0aefe.jpg');">
      <div class="overlay"></div>
      <div class="content">
        <h1>Sustainability Commitment</h1>
        <p>Building a Greener Future for Generations to Come</p>
      </div>
    </div>

    <section class="section">
      <div style="text-align: center; max-width: 800px; margin: 0 auto;">
        <h2 class="section-title">🌍 <span>Sustainability</span> Commitment</h2>
        <p style="font-size: 1.2rem; color: var(--text-secondary); line-height: 1.8;">
          At AgriLegacy, we believe that profitable farming and environmental stewardship go hand in hand. 
          Our sustainability initiatives help farmers reduce their environmental impact while improving profitability.
        </p>
      </div>
    </section>

    <section class="section section-alt">
      <h2 class="section-title">Our <span>Initiatives</span></h2>
      <div class="cards-grid">
        <div v-for="initiative in initiatives" :key="initiative.title" class="card">
          <img :src="initiative.image" :alt="initiative.title" class="card-img" loading="lazy">
          <div class="card-content">
            <h3>{{ initiative.title }}</h3>
            <p>{{ initiative.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="stats">
      <div class="stats-grid">
        <div class="stat-item"><h3>50%</h3><p>Water Reduction</p></div>
        <div class="stat-item"><h3>40%</h3><p>Less Waste</p></div>
        <div class="stat-item"><h3>30%</h3><p>Lower Carbon</p></div>
        <div class="stat-item"><h3>100%</h3><p>Renewable Options</p></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const initiatives = [
  { title: 'Renewable Energy', image: 'https://i.pinimg.com/736x/4e/1c/c7/4e1cc7391bcdb10ac0dc7bc8c4d0aefe.jpg', description: 'Solar-powered farm solutions, biogas conversion systems, and energy efficiency audits to reduce operational costs and carbon footprint.' },
  { title: 'Water Conservation', image: 'https://i.pinimg.com/1200x/97/03/68/970368e75e276369894021d43ff20218.jpg', description: 'Rainwater harvesting systems, drip irrigation technology, greywater recycling, and watershed management programs.' },
  { title: 'Waste Management', image: 'https://i.pinimg.com/1200x/9d/29/fe/9d29feb61932dff212d87c4ef9ee7116.jpg', description: 'Crop residue utilization, composting solutions, packaging reduction strategies, and circular economy implementation.' }
]
</script>
