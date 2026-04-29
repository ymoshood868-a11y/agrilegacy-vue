<template>
  <div>
    <div class="page-banner" style="background-image: url('https://i.pinimg.com/1200x/50/fb/f7/50fbf7c7a1e1314cf2d878e944d58e36.jpg');">
      <div class="overlay"></div>
      <div class="content">
        <h1>Farm Insights</h1>
        <p>Latest News, Tips & Expert Articles</p>
      </div>
    </div>

    <section class="section">
      <div style="text-align: center; max-width: 800px; margin: 0 auto;">
        <h2 class="section-title">Latest <span>Articles</span></h2>
        <p style="font-size: 1.2rem; color: var(--text-secondary); line-height: 1.8;">
          Stay updated with the latest trends, tips, and innovations in modern agriculture.
        </p>
      </div>
    </section>

    <section class="section section-alt">
      <h2 class="section-title">Featured <span>Posts</span></h2>
      <div class="cards-grid">
        <div v-for="post in posts" :key="post.title" class="blog-card">
          <img :src="post.image" alt="Blog" class="blog-img">
          <div class="blog-content">
            <div class="blog-date"><i class="far fa-calendar"></i> {{ post.date }}</div>
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
            <a href="#" style="color: var(--accent-gold); text-decoration: none; display: inline-block; margin-top: 1rem;">Read More →</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const posts = [
  { title: '10 Sustainable Farming Practices for 2024', image: 'https://i.pinimg.com/1200x/a3/9c/c0/a39cc0d28fed85a1f511473615803b53.jpg', date: 'March 15, 2024', excerpt: 'Discover the latest eco-friendly techniques that are transforming modern agriculture and helping farmers reduce their environmental impact while increasing profitability.' },
  { title: 'The Future of Aquaculture: Trends to Watch', image: 'https://i.pinimg.com/736x/5e/82/a0/5e82a0adf6049ba9a5aab42d7c390906.jpg', date: 'March 10, 2024', excerpt: 'Exploring innovations in fish farming that are revolutionizing the industry, from AI monitoring to sustainable feed alternatives.' },
  { title: 'AI in Livestock Management: A Complete Guide', image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=400', date: 'March 5, 2024', excerpt: 'How artificial intelligence is changing the way we care for farm animals, from health monitoring to breeding optimization.' }
]
</script>
