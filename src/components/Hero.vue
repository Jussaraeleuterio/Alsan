<template>
  <header class="hero" id="topo">
      <div class="hero-header">
        <div class="logo-box">
          <svg class="logo-svg" viewBox="0 5 180 135" xmlns="http://www.w3.org/2000/svg" aria-label="ALSAN" preserveAspectRatio="xMidYMid meet">
            <!-- Letra A estilizada -->
            <path d="M 90 15 L 50 115 L 65 115 L 75 85 L 105 85 L 115 115 L 130 115 L 90 15 Z" fill="white"/>
            <!-- Barra horizontal quebrada - parte esquerda (desce levemente) -->
            <path d="M 70 70 L 88 73 L 88 80 L 70 77 Z" fill="white"/>
            <!-- Barra horizontal quebrada - parte direita (sobe levemente) - criando pico no meio -->
            <path d="M 92 67 L 110 70 L 110 77 L 92 74 Z" fill="white"/>
            <!-- Texto ALSAN -->
            <text x="90" y="135" font-family="Inter, sans-serif" font-size="32" font-weight="800" fill="white" text-anchor="middle" dominant-baseline="central" letter-spacing="4">ALSAN</text>
          </svg>
        </div>
        <button class="menu-toggle" @click="toggleMenu" aria-label="Abrir menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div class="hero-content">
        <div class="hero-text-wrapper">
          <div class="hero-kicker">Reformas e obras de alto padrão</div>
          <h1 class="hero-title">Precisão que transforma espaços</h1>
          <div class="hero-cta">
            <div class="cta-line"></div>
            <a href="#contato" class="cta-link">Conheça a ALSAN</a>
            <div class="cta-line"></div>
          </div>
        </div>
      </div>

    <Teleport to="body">
      <div v-if="menuOpen" class="menu-overlay" @click="toggleMenu">
        <nav class="mobile-menu" @click.stop>
          <button class="menu-close" @click="toggleMenu" aria-label="Fechar menu">×</button>
          <a href="#assinatura" @click="toggleMenu">A ASSINATURA</a>
          <a href="#projetos" @click="toggleMenu">PROJETOS</a>
          <a href="#excelencia" @click="toggleMenu">EXCELÊNCIA</a>
          <a href="#contato" @click="toggleMenu">CONTATO</a>
        </nav>
      </div>
    </Teleport>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  background: 
    linear-gradient(rgba(184,92,56,.1), rgba(184,92,56,.15)),
    linear-gradient(135deg, #B85C38 0%, #C86B3C 50%, #B85C38 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255, 255, 255, 0.15);
  pointer-events: none;
  z-index: 1;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  pointer-events: none;
  z-index: 1;
}

.hero-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 28px 24px 32px;
  position: relative;
  z-index: 10;
  min-height: 90px;
  overflow: visible;
}

.logo-box {
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  padding-top: 4px;
  overflow: visible;
}

.logo-svg {
  height: 52px;
  width: auto;
  max-width: 130px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,.2));
  display: block;
  overflow: visible;
}

.menu-toggle {
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 12px;
  flex-shrink: 0;
  /* Touch target mínimo recomendado */
  min-width: 44px;
  min-height: 44px;
  /* Remove highlight azul no mobile */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

.menu-toggle span {
  width: 24px;
  height: 2px;
  background: white;
  transition: all 0.3s ease;
  display: block;
}

.hero-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 24px;
  gap: 32px;
}

.hero-text-wrapper {
  position: relative;
  padding: 56px 40px;
  max-width: 700px;
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 0;
  box-shadow: 
    0 0 0 1px rgba(255, 255, 255, 0.1),
    0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.hero-text-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.4) 20%, 
    rgba(255, 255, 255, 0.4) 80%, 
    transparent
  );
}

.hero-text-wrapper::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.4) 20%, 
    rgba(255, 255, 255, 0.4) 80%, 
    transparent
  );
}

@media (max-width: 640px) {
  .hero-text-wrapper {
    padding: 40px 28px;
  }
}

.hero-kicker {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: none;
  opacity: 0.9;
}

.hero-title {
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 1px;
  text-transform: none;
  max-width: 600px;
  margin: 0;
}

.hero-cta {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
}

.cta-line {
  width: 40px;
  height: 1px;
  background: white;
  opacity: 0.6;
}

.cta-link {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: none;
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.cta-link:hover {
  opacity: 0.8;
}

/* Menu Mobile */
.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FAF9F6;
  padding: 60px 24px 40px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  animation: slideIn 0.3s ease;
}

.menu-close {
  position: absolute;
  top: 20px;
  right: 24px;
  font-size: 32px;
  font-weight: 300;
  color: #1a1a1a;
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-menu a {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  text-decoration: none;
  text-align: center;
  letter-spacing: 3px;
  transition: opacity 0.3s ease;
  /* Área de toque adequada */
  padding: 12px 0;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Remove highlight azul no mobile */
  -webkit-tap-highlight-color: transparent;
}

.mobile-menu a:hover {
  opacity: 0.7;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@media (min-width: 768px) {
  .hero-header {
    padding: 32px 32px 36px;
    min-height: 100px;
  }
  
  .logo-box {
    padding-top: 6px;
  }
  
  .logo-svg {
    height: 60px;
    max-width: 150px;
  }
  
  .hero-title {
    font-size: 48px;
  }
  
  .hero-kicker {
    font-size: 14px;
  }
}
</style>