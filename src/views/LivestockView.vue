<template>
  <div>
    <div class="page-banner" style="background-image: url('https://i.pinimg.com/736x/dc/83/16/dc8316964e1130601604ab117ddbddad.jpg');">
      <div class="overlay"></div>
      <div class="content">
        <h1>Premium Livestock Management</h1>
        <p>Complete Herd Management Solutions for Modern Farmers</p>
      </div>
    </div>

    <section class="section">
      <div style="text-align: center; max-width: 800px; margin: 0 auto;">
        <h2 class="section-title">Elite <span>Livestock</span> Solutions</h2>
        <p style="font-size: 1.2rem; color: var(--text-secondary); line-height: 1.8;">
          Our comprehensive livestock management system combines cutting-edge technology with traditional farming wisdom 
          to help you maximize productivity, ensure animal welfare, and optimize your operations.
        </p>
      </div>
    </section>

    <section class="section section-alt">
      <h2 class="section-title">Our <span>Services</span></h2>
      <div class="cards-grid">
        <div v-for="service in services" :key="service.title" class="card">
          <img :src="service.image" :alt="service.title" class="card-img">
          <div class="card-content">
            <h3>{{ service.icon }} {{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul style="margin-top: 1rem; color: var(--text-secondary);">
              <li v-for="feature in service.features" :key="feature">✓ {{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">Key <span>Benefits</span></h2>
      <div class="cards-grid cards-grid-4">
        <div v-for="benefit in benefits" :key="benefit.title" class="card">
          <div class="card-content">
            <i :class="`${benefit.icon} card-icon`"></i>
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="section" style="text-align: center;">
      <div class="newsletter">
        <h3 style="font-size: 2rem; margin-bottom: 1rem;">Ready to Transform Your Livestock Farm?</h3>
        <p>Schedule a free consultation with our livestock experts today</p>
        <router-link to="/contact" class="cta-button" style="margin-top: 2rem; display: inline-block;">Get Started Now →</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    icon: '🐄',
    title: 'Elite Cattle Management',
    image: 'https://cdn.prod.website-files.com/64247ee2293b8621e454f004/68ef431ce6c24318dde140be_Herd%20of%20cows.jpg',
    description: 'Advanced herd tracking with RFID technology, AI-powered health monitoring systems, automated feeding schedules, genetic lineage tracking for premium breeding programs, and real-time weight gain analytics.',
    features: ['RFID Ear Tag Tracking', 'Automated Weighing Systems', 'Health Alert Notifications', 'Breeding Cycle Optimization']
  },
  {
    icon: '🐔',
    title: 'Smart Poultry Solutions',
    image: 'https://i.pinimg.com/736x/23/ae/e2/23aee299f71be1cbaadb614939f9cf85.jpg',
    description: 'Real-time egg production analytics with 99% accuracy, climate-controlled coops with automated ventilation, disease prediction algorithms, automated collection systems, and feed optimization.',
    features: ['Automated Egg Collection', 'Climate Control Systems', 'Disease Prediction AI', 'Feed Conversion Tracking']
  },
  {
    icon: '🐑',
    title: 'Premium Sheep & Goats',
    image: 'https://i.pinimg.com/1200x/ca/f5/89/caf5897b245fd875895da6bd31c83670.jpg',
    description: 'Wool quality analysis using AI vision, rotational grazing optimization, breeding cycle tracking with fertility predictions, premium fleece management, and health monitoring wearables.',
    features: ['Wool Quality Analysis', 'Rotational Grazing Maps', 'Fertility Predictions', 'Health Wearables']
  }
]

const benefits = [
  { icon: 'fas fa-chart-line', title: '40% Productivity Increase', description: 'Farmers using our system report significant improvements in overall herd productivity.' },
  { icon: 'fas fa-heartbeat', title: 'Reduced Mortality', description: 'Early disease detection reduces livestock mortality by up to 60%.' },
  { icon: 'fas fa-dollar-sign', title: '30% Cost Savings', description: 'Optimized feeding and healthcare reduce operational expenses significantly.' },
  { icon: 'fas fa-clock', title: '50% Time Saved', description: 'Automated systems free up your time for strategic decision making.' }
]
</script>
