<template>
  <div>
    <div class="page-banner" style="background-image: url('https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=1600');">
      <div class="overlay"></div>
      <div class="content">
        <h1>Get In Touch</h1>
        <p>Let's Start Your Agricultural Journey</p>
      </div>
    </div>

    <section class="section">
      <div style="text-align: center; max-width: 800px; margin: 0 auto;">
        <h2 class="section-title">Contact <span>Us</span></h2>
        <p style="font-size: 1.2rem; color: var(--text-secondary); line-height: 1.8;">
          Have questions? Ready to transform your farm? Our team of agricultural experts is here to help you every step of the way.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="contact-container">
        <div class="contact-form">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <input v-model="form.name" type="text" placeholder="Full Name" required>
            </div>
            <div class="form-group">
              <input v-model="form.email" type="email" placeholder="Email Address" required>
            </div>
            <div class="form-group">
              <input v-model="form.phone" type="tel" placeholder="Phone Number">
            </div>
            <div class="form-group">
              <select v-model="form.interest">
                <option>I'm interested in...</option>
                <option>Livestock Management</option>
                <option>Crop Planning</option>
                <option>Aquaculture/Fish Farming</option>
                <option>Full Farm Suite</option>
              </select>
            </div>
            <div class="form-group">
              <textarea v-model="form.message" rows="5" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" class="submit-btn">Send Message <i class="fas fa-paper-plane"></i></button>
          </form>
        </div>
        <div class="contact-info">
          <h3 style="margin-bottom: 1.5rem;">Contact Information</h3>
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <div>123 AgriLegacy Boulevard, Farm Valley, CA 90210, USA</div>
          </div>
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <div>091 1732 1160</div>
          </div>
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <div>ymoshood868@gmail.com</div>
          </div>
          <div class="info-item">
            <i class="fas fa-clock"></i>
            <div>Monday - Friday: 9am - 6pm PST<br>24/7 Emergency Support</div>
          </div>
          <a href="https://wa.me/15551234567" class="whatsapp-btn" target="_blank">
            <i class="fab fa-whatsapp"></i> Chat on WhatsApp
          </a>
          <div style="margin-top: 2rem;">
            <h4 style="margin-bottom: 1rem;">Follow Us</h4>
            <div class="social-links">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-linkedin"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  interest: 'I\'m interested in...',
  message: ''
})

const handleSubmit = () => {
  alert('Thank you for your message! A AgriLegacy specialist will contact you within 24 hours.')
  form.name = ''
  form.email = ''
  form.phone = ''
  form.interest = 'I\'m interested in...'
  form.message = ''
}
</script>
