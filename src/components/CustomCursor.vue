<template>
  <div v-if="isDesktop">
    <div class="cursor" :style="cursorStyle"></div>
    <div class="cursor-dot" :style="cursorDotStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isDesktop = ref(window.innerWidth > 768)
const cursorX = ref(0)
const cursorY = ref(0)
const isHovering = ref(false)

const cursorStyle = computed(() => ({
  left: `${cursorX.value}px`,
  top: `${cursorY.value}px`,
  transform: isHovering.value 
    ? 'translate(-50%, -50%) scale(1.5)' 
    : 'translate(-50%, -50%) scale(1)',
  borderColor: isHovering.value ? '#f4c542' : '#d4af37'
}))

const cursorDotStyle = computed(() => ({
  left: `${cursorX.value}px`,
  top: `${cursorY.value}px`
}))

const handleMouseMove = (e: MouseEvent) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
}

const handleMouseEnter = () => {
  isHovering.value = true
}

const handleMouseLeave = () => {
  isHovering.value = false
}

onMounted(() => {
  if (isDesktop.value) {
    document.addEventListener('mousemove', handleMouseMove)
    
    const clickables = document.querySelectorAll('a, button, .card, .cta-button')
    clickables.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })
  }
})

onUnmounted(() => {
  if (isDesktop.value) {
    document.removeEventListener('mousemove', handleMouseMove)
    
    const clickables = document.querySelectorAll('a, button, .card, .cta-button')
    clickables.forEach(el => {
      el.removeEventListener('mouseenter', handleMouseEnter)
      el.removeEventListener('mouseleave', handleMouseLeave)
    })
  }
})
</script>
