<template>
  <section class="section gallery full-width" id="projetos">
    <div class="gallery-grid">
      <div 
        v-for="(projeto, index) in projetos" 
        :key="index"
        class="gallery-item scroll-reveal"
      >
        <img :src="projeto.image" :alt="projeto.alt" loading="lazy" />
        <div class="gallery-overlay">
          <h3 class="projeto-title">{{ projeto.title }}</h3>
          <p class="projeto-location">{{ projeto.location }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const projetos = [
  { 
    image: '/assets/publicassetsportfolioalsan.png',
    alt: 'Portfólio ALSAN - Sala com parede verde e vista para piscina', 
    title: 'RESIDÊNCIA ALTO PADRÃO',
    location: 'SÃO PAULO, SP'
  }
]

useScrollReveal()
</script>

<style scoped>
.section.gallery.full-width {
  padding: 0 !important;
  margin: 0 !important;
  background: #FAF9F6;
  width: 100vw !important;
  max-width: none !important;
  overflow: hidden;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw !important;
  margin-right: -50vw !important;
  display: block !important;
}

.gallery-grid {
  display: flex !important;
  flex-direction: column !important;
  gap: 0 !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  grid-template-columns: none !important;
}

.gallery-item {
  position: relative;
  width: 100% !important;
  min-height: 60vh;
  height: auto;
  overflow: hidden;
  display: block !important;
  margin: 0 !important;
  padding: 0 !important;
  grid-column: none !important;
}

.gallery-item img {
  width: 100% !important;
  height: 100% !important;
  min-height: 60vh;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.6s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 32px 24px;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: white;
  z-index: 2;
}

.projeto-title {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 4px;
  letter-spacing: 1px;
}

.projeto-location {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  opacity: 0.9;
}

@media (min-width: 768px) {
  .gallery-item {
    min-height: 70vh;
    max-height: 80vh;
  }
  
  .gallery-item img {
    min-height: 70vh;
    max-height: 80vh;
  }
}
</style>