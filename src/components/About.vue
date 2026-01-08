<template>
  <section class="section intro" id="sobre">
    <div class="container">
      <div class="intro-text scroll-reveal">
        <p>
          Na ALSAN, cada obra nasce do rigor técnico e se revela nos detalhes: processos ágeis, 
          qualidade absoluta e soluções práticas que transformam projetos em espaços únicos, pensados 
          para durar e fazer sentido no dia a dia.
        </p>
      </div>

      <a href="#projetos" class="intro-cta scroll-reveal">
        CONHEÇA NOSSAS OBRAS
      </a>

      <div class="curation-section scroll-reveal">
        <div class="section-kicker">PORTFÓLIO</div>
        <div class="accent-line"></div>
        <h2 class="section-title-serif">OBRAS SELECIONADAS</h2>
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
.section.intro {
  background: #FAF9F6;
  padding: 100px 24px;
  position: relative;
}

.section.intro::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(18,18,18,.1) 20%, 
    rgba(18,18,18,.1) 80%, 
    transparent
  );
}

.section.intro::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(18,18,18,.1) 20%, 
    rgba(18,18,18,.1) 80%, 
    transparent
  );
}

.intro-text {
  max-width: 700px;
  margin: 0 auto 48px;
  padding: 40px 32px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(18, 18, 18, 0.08);
  box-shadow: 
    0 0 0 1px rgba(255, 255, 255, 0.8),
    0 4px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  position: relative;
}

.intro-text::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(184, 92, 56, 0.2) 20%, 
    rgba(184, 92, 56, 0.2) 80%, 
    transparent
  );
}

@media (max-width: 640px) {
  .intro-text {
    padding: 32px 24px;
  }
}

.intro-text p {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 1.8;
  color: #1a1a1a;
  text-align: center;
}

.intro-cta {
  display: block;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  color: #1a1a1a;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 auto 80px;
  padding: 12px 0;
  border-bottom: 1px solid #1a1a1a;
  max-width: fit-content;
  transition: opacity 0.3s ease;
}

.intro-cta:hover {
  opacity: 0.7;
}

.curation-section {
  text-align: center;
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

@media (min-width: 768px) {
  .section-title-serif {
    font-size: 42px;
  }
  
  .intro-text p {
    font-size: 20px;
  }
}
</style>