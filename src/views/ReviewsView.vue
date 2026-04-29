<template>
  <div>
    <div class="page-banner" style="background-image: url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600');">
      <div class="overlay"></div>
      <div class="content">
        <h1>What Farmers Say</h1>
        <p>Trusted by Agricultural Leaders Worldwide</p>
      </div>
    </div>

    <section class="section">
      <div style="text-align: center; max-width: 800px; margin: 0 auto;">
        <h2 class="section-title">Success <span>Stories</span></h2>
        <p style="font-size: 1.2rem; color: var(--text-secondary); line-height: 1.8;">
          Join thousands of satisfied farmers who have transformed their operations with AgriLegacy.
        </p>
      </div>
    </section>

    <section class="section section-alt">
      <h2 class="section-title">Real <span>Testimonials</span></h2>
      <div class="cards-grid">
        <div v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial-card">
          <i class="fas fa-quote-left"></i>
          <p>{{ testimonial.quote }}</p>
          <h3>{{ testimonial.name }}</h3>
          <p>{{ testimonial.location }}</p>
          <div class="stars">★★★★★</div>
        </div>
      </div>
    </section>

    <div class="section" style="text-align: center;">
      <div class="newsletter">
        <h3 style="font-size: 2rem; margin-bottom: 1rem;">Ready to Join Our Success Stories?</h3>
        <p>Start your journey with AgriLegacy today</p>
        <router-link to="/contact" class="cta-button" style="margin-top: 2rem; display: inline-block;">Get Started →</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const testimonials = [
  { quote: 'AgriLegacy transformed our family farm. The livestock management system saved us countless hours and increased our productivity by 60%. The support team is exceptional!', name: 'John Anderson', location: 'Anderson Family Farms, Iowa' },
  { quote: 'The aquaculture module is revolutionary! Our pond yields have doubled since implementing their smart water management system. ROI achieved in just 6 months.', name: 'Maria Santos', location: 'Santos Aquaculture, Philippines' },
  { quote: 'Best investment we made for our farm. The crop planning AI saved our harvest during drought conditions. Can\'t imagine farming without AgriLegacy now.', name: 'David Chen', location: 'Chen Organics, California' },
  { quote: 'The IoT integration saved us 40% on water bills. The team at AgriLegacy really understands modern farming challenges.', name: 'Sarah Johnson', location: 'Johnson Farms, Texas' },
  { quote: 'From traditional to tech-driven farming in 3 months. AgriLegacy made the transition seamless and profitable.', name: 'Michael Okafor', location: 'Okafor Agribusiness, Nigeria' },
  { quote: 'The blockchain traceability feature helped us get premium prices for our organic produce. Highly recommended!', name: 'Emma Watson', location: 'Watson Organics, New Zealand' }
]
</script>
