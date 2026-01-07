<template>
  <section class="section contact" id="contato">
    <div class="container">
      <div class="contact-header scroll-reveal">
        <h2 class="section-title-serif">VAMOS CONVERSAR</h2>
        <p class="contact-intro">
          Deixe seu contato e conte sobre o seu projeto. Respondemos rapidamente para alinhar expectativas,
          prazos e orçamento.
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="contact-form scroll-reveal">
        <div class="form-group">
          <input 
            v-model="formData.nome"
            type="text" 
            placeholder="Seu nome"
            required
            :class="{ error: errors.nome }"
          />
          <span v-if="errors.nome" class="error-message">{{ errors.nome }}</span>
        </div>

        <div class="form-group">
          <input 
            v-model="formData.email"
            type="email" 
            placeholder="Seu e-mail"
            required
            :class="{ error: errors.email }"
          />
          <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <input 
            v-model="formData.whatsapp"
            type="tel" 
            placeholder="WhatsApp *"
            required
            :class="{ error: errors.whatsapp }"
          />
          <span v-if="errors.whatsapp" class="error-message">{{ errors.whatsapp }}</span>
        </div>

        <div class="form-group">
          <textarea 
            v-model="formData.mensagem"
            placeholder="Conte-nos sobre seu projeto ideal..."
            rows="5"
            :class="{ error: errors.mensagem }"
          ></textarea>
          <span v-if="errors.mensagem" class="error-message">{{ errors.mensagem }}</span>
        </div>

        <button type="submit" class="submit-btn" :disabled="loading" :class="{ loading }">
          <span class="btn-text">SOLICITAR ORÇAMENTO</span>
          <span class="btn-loader" v-if="loading"></span>
        </button>

        <div v-if="success" class="form-success" role="alert">
          {{ successMessage }}
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useForm } from '../composables/useForm'
import { useScrollReveal } from '../composables/useScrollReveal'

const { formData, errors, loading, success, successMessage, handleSubmit } = useForm()

useScrollReveal()
</script>

<style scoped>
.section.contact {
  background: #FAF9F6;
  padding: 80px 24px;
}

.contact-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 64px;
}

.section-title-serif {
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 1px;
  color: #1a1a1a;
  margin: 0 0 24px;
}

.contact-intro {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin: 0;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 32px;
  position: relative;
}

.form-group input,
.form-group textarea {
  width: 100%;
  background: transparent;
  border: 3px solid #ddd; /* Moldura mais espessa */
  border-radius: 0;
  padding: 16px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #1a1a1a;
  outline: none;
  transition: border-color 0.3s ease;
  /* Evita zoom automático no iOS */
  -webkit-appearance: none;
  appearance: none;
  /* Melhora área de toque */
  min-height: 44px;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #999;
  font-weight: 300;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #B85C38; /* Cor terracota no focus */
  outline: none;
}

.form-group input.error,
.form-group textarea.error {
  border-color: #dc2626; /* Borda completa em vermelho quando há erro */
}

.error-message {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #dc2626;
  margin-top: 8px;
}

.submit-btn {
  width: 100%;
  padding: 16px 24px;
  background: #B85C38; /* Cor terracota */
  border: 1px solid #B85C38;
  border-radius: 0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white; /* Texto branco para contraste */
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;
  position: relative;
  /* Touch target mínimo recomendado */
  min-height: 48px;
  /* Remove highlight azul no mobile */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

.submit-btn:hover:not(:disabled) {
  background: #A04D2E; /* Terracota mais escuro no hover */
  border-color: #A04D2E;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(184, 92, 56, 0.3);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-loader {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #666;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  margin-left: 12px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.form-success {
  margin-top: 24px;
  padding: 16px;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.2);
  color: #15803d;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  text-align: center;
}

@media (min-width: 768px) {
  .section-title-serif {
    font-size: 42px;
  }
}
</style>