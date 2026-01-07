import { ref } from 'vue'
import emailjs from '@emailjs/browser'

export function useForm() {
  const formData = ref({
    nome: '',
    whatsapp: '',
    email: '',
    mensagem: ''
  })

  const errors = ref({})
  const loading = ref(false)
  const success = ref(false)
  const successMessage = ref('')

  // Configurações (você precisa configurar essas variáveis de ambiente)
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
  const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999'

  const validateField = (field, value) => {
    let isValid = true
    let message = ''

    switch (field) {
      case 'nome':
        if (!value.trim()) {
          isValid = false
          message = 'Este campo é obrigatório'
        }
        break
      case 'whatsapp':
        if (!value.trim()) {
          isValid = false
          message = 'Este campo é obrigatório'
        } else if (!/^\d{10,11}$/.test(value.replace(/\D/g, ''))) {
          isValid = false
          message = 'Número inválido (10 ou 11 dígitos)'
        }
        break
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          isValid = false
          message = 'E-mail inválido'
        }
        break
    }

    if (!isValid) {
      errors.value[field] = message
    } else {
      delete errors.value[field]
    }

    return isValid
  }

  const validateForm = () => {
    let isValid = true
    validateField('nome', formData.value.nome)
    validateField('whatsapp', formData.value.whatsapp)
    validateField('email', formData.value.email)

    if (Object.keys(errors.value).length > 0) {
      isValid = false
    }

    return isValid
  }

  const sendEmail = async () => {
    // Verifica se EmailJS está configurado
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn('EmailJS não configurado. Configure as variáveis de ambiente.')
      return false
    }

    try {
      // Inicializa EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY)

      // Prepara os dados do template
      const templateParams = {
        nome: formData.value.nome,
        email: formData.value.email,
        whatsapp: formData.value.whatsapp,
        mensagem: formData.value.mensagem || 'Sem mensagem adicional'
      }

      // Envia o e-mail
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      return true
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error)
      return false
    }
  }

  const redirectToWhatsApp = () => {
    // Formata a mensagem para o WhatsApp
    const message = `Olá! Meu nome é ${formData.value.nome}. ${formData.value.mensagem ? `\n\nMensagem: ${formData.value.mensagem}` : ''}${formData.value.email ? `\n\nE-mail: ${formData.value.email}` : ''}`
    
    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(message)
    
    // Monta o link do WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    
    // Redireciona para o WhatsApp (abre em nova aba)
    window.open(whatsappUrl, '_blank')
  }

  const handleSubmit = async () => {
    if (!validateForm()) {
      return
    }

    loading.value = true
    success.value = false

    try {
      // Envia e-mail para o proprietário
      const emailSent = await sendEmail()
      
      // Redireciona para WhatsApp
      redirectToWhatsApp()

      // Mensagem de sucesso
      successMessage.value = '✓ Redirecionando para WhatsApp...'
      success.value = true

      // Reset form após um pequeno delay
      setTimeout(() => {
        formData.value = {
          nome: '',
          whatsapp: '',
          email: '',
          mensagem: ''
        }
        errors.value = {}
        success.value = false
      }, 3000)

    } catch (error) {
      console.error('Erro:', error)
      // Mesmo com erro, redireciona para WhatsApp
      redirectToWhatsApp()
      successMessage.value = 'Redirecionando para WhatsApp...'
      success.value = true
      
      setTimeout(() => {
        success.value = false
      }, 3000)
    } finally {
      loading.value = false
    }
  }

  return {
    formData,
    errors,
    loading,
    success,
    successMessage,
    validateField,
    handleSubmit
  }
}
