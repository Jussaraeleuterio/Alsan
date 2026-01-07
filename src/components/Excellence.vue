<template>
  <section class="section excellence" id="excelencia">
    <div class="container">
      <div class="excellence-header scroll-reveal">
        <div class="section-kicker">DESTAQUES DE EXCELÊNCIA</div>
        <div class="accent-line"></div>
        <h2 class="section-title-serif">A DIFERENÇA ESTÁ NOS DETALHES</h2>
      </div>

      <div class="excellence-grid">
        <div 
          v-for="(item, index) in destaques" 
          :key="index"
          class="excellence-card scroll-reveal"
        >
          <div class="card-icon" v-html="item.icon"></div>
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-description">{{ item.description }}</p>
        </div>
      </div>

      <div class="excellence-grid-additional">
        <div class="excellence-card scroll-reveal">
          <div class="card-icon" v-html="excellenceIcon"></div>
          <h3 class="card-title">PADRÃO DE EXECUÇÃO</h3>
          <p class="card-description">
            Planejamento rigoroso, obra limpa e atenção absoluta aos detalhes — um nível de acabamento pensado para permanecer relevante por muitos anos.
          </p>
        </div>
      </div>

      <div class="automation-section scroll-reveal">
        <div class="automation-icon" v-html="automationIcon"></div>
        <h2 class="section-title-serif">AUTOMAÇÃO INVISÍVEL</h2>
        <p class="automation-description">
          Tecnologia de ponta completamente integrada às reformas. Controle total sem interferir 
          na estética impecável.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const destaques = [
  {
    icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="32" height="32" stroke="#B85C38" stroke-width="2"/>
      <path d="M24 16 L20 24 L28 24 Z" stroke="#B85C38" stroke-width="2" fill="none"/>
    </svg>`,
    title: 'CURADORIA DE MATERIAIS',
    description: 'Selecionamos pessoalmente pedras naturais, madeiras certificadas e acabamentos de alto padrão, priorizando procedência, estética e desempenho ao longo do tempo.'
  },
  {
    icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="32" height="32" stroke="#B85C38" stroke-width="2"/>
      <path d="M24 16 Q20 20 24 24 Q28 20 24 16" stroke="#B85C38" stroke-width="2" fill="none"/>
    </svg>`,
    title: 'REFORMAS QUE RESPIRAM',
    description: 'Projetos que equilibram forma, função e natureza, com iluminação natural, vegetação integrada e soluções que valorizam o conforto sensorial.'
  }
]

const excellenceIcon = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="32" height="32" stroke="#B85C38" stroke-width="2"/>
  <circle cx="24" cy="24" r="8" stroke="#B85C38" stroke-width="2" fill="none"/>
  <path d="M 20 24 L 22 26 L 28 20" stroke="#B85C38" stroke-width="2" stroke-linecap="round"/>
</svg>`

const automationIcon = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="32" height="32" stroke="#B85C38" stroke-width="2"/>
  <rect x="14" y="14" width="6" height="6" stroke="#B85C38" stroke-width="1.5" fill="none"/>
  <rect x="22" y="14" width="6" height="6" stroke="#B85C38" stroke-width="1.5" fill="none"/>
  <rect x="14" y="22" width="6" height="6" stroke="#B85C38" stroke-width="1.5" fill="none"/>
  <rect x="22" y="22" width="6" height="6" stroke="#B85C38" stroke-width="1.5" fill="none"/>
</svg>`

useScrollReveal()
</script>

<style scoped>
.section.excellence {
  background: #1a1a1a;
  color: white;
  padding: 80px 24px;
}

.excellence-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-kicker {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 12px;
}

.accent-line {
  width: 60px;
  height: 1px;
  background: #B85C38;
  margin: 0 auto 24px;
}

.section-title-serif {
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 1px;
  color: white;
  margin: 0;
}

.excellence-grid {
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-bottom: 64px;
}

.excellence-grid-additional {
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-bottom: 80px;
}

.excellence-card {
  text-align: center;
}

.card-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.card-title {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin: 0 0 16px;
  letter-spacing: 2px;
}

.card-description {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 1.8;
  color: #ccc;
  max-width: 600px;
  margin: 0 auto;
}

.automation-section {
  text-align: center;
  margin-bottom: 80px;
}

.automation-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.automation-description {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 1.8;
  color: #ccc;
  max-width: 600px;
  margin: 24px auto 0;
}

@media (min-width: 768px) {
  .section-title-serif {
    font-size: 42px;
  }
  
  .excellence-grid {
    flex-direction: row;
    gap: 80px;
  }
  
  .excellence-card {
    flex: 1;
  }
}
</style>
