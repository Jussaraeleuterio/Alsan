<template>
  <footer>
    <div class="foot">
      <div><strong>ALSAN</strong> — Engenharia & Construção</div>
      <div class="small">© {{ currentYear }} • Todos os direitos reservados</div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
