<template>
  <section class="section dark" id="diferenciais">
    <div class="container">
      <div class="section-title scroll-reveal">
        <h2>Nossos diferenciais</h2>
        <p>
          Alto padrão não é só estética: é origem dos materiais, coerência de design e tecnologia
          integrada sem comprometer a beleza.
        </p>
      </div>

      <div class="grid three">
        <div 
          v-for="(item, index) in diferenciais" 
          :key="index"
          class="dark-card scroll-reveal"
        >
          <div class="kicker"><span class="pill"></span> {{ item.kicker }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const diferenciais = [
  {
    kicker: 'Materiais Selecionados',
    title: 'Curadoria de alto nível',
    description: 'Mármore italiano, madeiras certificadas e acabamentos escolhidos pessoalmente em viagens aos principais lugares do mundo — sempre com padrão consistente e procedência.'
  },
  {
    kicker: 'Design Biofílico',
    title: 'Reformas + natureza',
    description: 'Integração orgânica entre ambientes e elementos naturais: jardins verticais, iluminação natural e espaços que "respiram", promovendo conforto e bem-estar.'
  },
  {
    kicker: 'Automação Invisível',
    title: 'Tecnologia sem ruído visual',
      description: 'Controle total integrado às reformas — iluminação, som, climatização e rotinas inteligentes, mantendo uma estética impecável e discreta.'
  }
]

useScrollReveal()
</script>
