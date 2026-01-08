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
  padding: 48px 40px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(18, 18, 18, 0.08);
  box-shadow: 
    0 0 0 1px rgba(255, 255, 255, 0.6),
    0 8px 32px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  position: relative;
}

.contact-form::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(184, 92, 56, 0.3) 20%, 
    rgba(184, 92, 56, 0.3) 80%, 
    transparent
  );
}

@media (max-width: 640px) {
  .contact-form {
    padding: 36px 28px;
  }
}

.form-group {
  margin-bottom: 32px;
  position: relative;
}

.form-group input,
.form-group textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(18, 18, 18, 0.12);
  border-radius: 0;
  padding: 18px 20px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #1a1a1a;
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 0 0 1px rgba(255, 255, 255, 0.5),
    0 2px 8px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  /* Evita zoom automático no iOS */
  -webkit-appearance: none;
  appearance: none;
  /* Melhora área de toque */
  min-height: 48px;
  position: relative;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #999;
  font-weight: 300;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #B85C38;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 
    0 0 0 1px rgba(184, 92, 56, 0.2),
    0 0 0 4px rgba(184, 92, 56, 0.1),
    0 4px 16px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  outline: none;
  transform: translateY(-1px);
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
  padding: 18px 24px;
  background: linear-gradient(135deg, #B85C38 0%, #C86B3C 100%);
  border: 2px solid rgba(184, 92, 56, 0.3);
  border-radius: 0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 12px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 0 0 1px rgba(184, 92, 56, 0.2),
    0 4px 16px rgba(184, 92, 56, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  /* Touch target mínimo recomendado */
  min-height: 52px;
  /* Remove highlight azul no mobile */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

.submit-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.2), 
    transparent
  );
  transition: left 0.5s ease;
}

.submit-btn:hover::before {
  left: 100%;
}

.submit-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #A04D2E 0%, #B85C38 100%);
  border-color: rgba(184, 92, 56, 0.5);
  color: white;
  transform: translateY(-3px);
  box-shadow: 
    0 0 0 1px rgba(184, 92, 56, 0.3),
    0 8px 24px rgba(184, 92, 56, 0.4),
    0 0 32px rgba(184, 92, 56, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
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