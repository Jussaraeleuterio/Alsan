<template>
  <section class="section signature" id="assinatura">
    <div class="container">
      <div class="signature-header scroll-reveal">
        <div class="section-kicker">SOBRE A ALSAN</div>
        <div class="accent-line"></div>
        <h2 class="section-title-serif">LEGADO EM CONSTRUIR</h2>
      </div>

      <div class="signature-content scroll-reveal">
        <p>
          Construímos o futuro cuidando do presente, garantindo agilidade, qualidade e praticidade 
          na realização de sonhos. Cada projeto ALSAN é pensado para elevar o padrão, com atenção 
          aos detalhes que realmente fazem diferença.
        </p>
        <p>
          Agilidade com método, qualidade que aparece nos detalhes e execução impecável — é assim 
          que transformamos visões em realidade, criando espaços que encantam e duram.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()
</script>

<style scoped>
.section.signature {
  background: #FAF9F6;
  padding: 80px 24px;
}

.signature-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-kicker {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #666;
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
  color: #1a1a1a;
  margin: 0;
}

.signature-content {
  max-width: 700px;
  margin: 0 auto;
}

.signature-content p {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #1a1a1a;
  margin-bottom: 24px;
}

.signature-content p:last-child {
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .section-title-serif {
    font-size: 42px;
  }
  
  .signature-content p {
    font-size: 18px;
  }
}
</style>
