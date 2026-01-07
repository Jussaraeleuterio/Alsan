// ===================
// UTILITIES
// ===================

// Debounce function para performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===================
// INITIALIZATION
// ===================

// Ano dinâmico
document.getElementById('year').textContent = new Date().getFullYear();

// ===================
// LOADER ANIMATION
// ===================

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('hide');
    
    // Frase aparece primeiro, depois o texto
    setTimeout(() => {
      const phrase = document.getElementById('phrase');
      if (phrase) phrase.classList.add('show');
    }, 250);
    
    setTimeout(() => {
      const intro = document.getElementById('intro');
      if (intro) intro.classList.add('show');
    }, 650);
  }
});

// ===================
// SCROLL REVEAL ANIMATION
// ===================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      // Opcional: desobservar após revelar (performance)
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar todos os elementos com classe scroll-reveal
document.querySelectorAll('.scroll-reveal').forEach(el => {
  observer.observe(el);
});

// ===================
// SMOOTH SCROLL
// ===================

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    
    const el = document.querySelector(id);
    if (!el) return;
    
    e.preventDefault();
    const offset = 80;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Atualizar URL sem recarregar
    if (history.pushState) {
      history.pushState(null, null, id);
    }
  });
});

// ===================
// GALLERY INTERACTIONS
// ===================

document.querySelectorAll('.shot').forEach(shot => {
  shot.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-4px)';
  });
  
  shot.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
  
  // Acessibilidade: teclado
  shot.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
});

// ===================
// FORM VALIDATION & SUBMISSION
// ===================

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const formGroups = contactForm.querySelectorAll('.form-group');
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const successMsg = contactForm.querySelector('.form-success');
  
  // Validação em tempo real
  formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    const errorMsg = group.querySelector('.error-message');
    
    if (input && errorMsg) {
      // Validação ao sair do campo
      input.addEventListener('blur', () => validateField(input, errorMsg));
      
      // Limpar erro ao começar a digitar
      input.addEventListener('input', () => {
        if (errorMsg.classList.contains('show')) {
          errorMsg.classList.remove('show');
          input.setCustomValidity('');
        }
      });
    }
  });
  
  // Validação do campo
  function validateField(input, errorMsg) {
    let isValid = true;
    let message = '';
    
    if (input.hasAttribute('required') && !input.value.trim()) {
      isValid = false;
      message = 'Este campo é obrigatório';
    } else if (input.type === 'email' && input.value && !isValidEmail(input.value)) {
      isValid = false;
      message = 'E-mail inválido';
    } else if (input.type === 'tel' && input.value && !isValidPhone(input.value)) {
      isValid = false;
      message = 'Número inválido (10 ou 11 dígitos)';
    }
    
    if (!isValid) {
      errorMsg.textContent = message;
      errorMsg.classList.add('show');
      input.setCustomValidity(message);
      input.style.borderColor = 'rgba(220,38,38,.5)';
    } else {
      errorMsg.classList.remove('show');
      input.setCustomValidity('');
      input.style.borderColor = '';
    }
    
    return isValid;
  }
  
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function isValidPhone(phone) {
    return /^\d{10,11}$/.test(phone.replace(/\D/g, ''));
  }
  
  // Submissão do formulário
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validar todos os campos
    let isFormValid = true;
    formGroups.forEach(group => {
      const input = group.querySelector('input, textarea');
      const errorMsg = group.querySelector('.error-message');
      if (input && errorMsg && input.hasAttribute('required')) {
        if (!validateField(input, errorMsg)) {
          isFormValid = false;
        }
      }
    });
    
    if (!isFormValid) {
      // Focar no primeiro campo inválido
      const firstInvalid = contactForm.querySelector('input:invalid, textarea:invalid');
      if (firstInvalid) {
        firstInvalid.focus();
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    // Mostrar loading
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Simular envio (substituir por API real)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Sucesso
      successMsg.textContent = '✓ Mensagem enviada com sucesso! Entraremos em contato em breve.';
      successMsg.classList.add('show');
      contactForm.reset();
      
      // Scroll para mensagem de sucesso
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Remover mensagem após 5 segundos
      setTimeout(() => {
        successMsg.classList.remove('show');
      }, 5000);
      
    } catch (error) {
      successMsg.textContent = 'Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.';
      successMsg.style.background = 'rgba(220,38,38,.1)';
      successMsg.style.borderColor = 'rgba(220,38,38,.2)';
      successMsg.style.color = 'rgba(220,38,38,.9)';
      successMsg.classList.add('show');
    } finally {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    }
  });
}

// ===================
// PERFORMANCE: LAZY LOADING IMAGES
// ===================

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===================
// SCROLL TO TOP BUTTON (opcional)
// ===================

// Adicionar botão de scroll to top quando scrollar para baixo
let scrollToTopBtn = null;
const createScrollToTopBtn = () => {
  if (scrollToTopBtn) return;
  
  scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.className = 'scroll-to-top';
  scrollToTopBtn.setAttribute('aria-label', 'Voltar ao topo');
  scrollToTopBtn.innerHTML = '↑';
  scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--terracotta);
    color: white;
    border: none;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: all .3s ease;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(184,92,56,.3);
  `;
  
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  document.body.appendChild(scrollToTopBtn);
  
  const handleScroll = debounce(() => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.opacity = '1';
      scrollToTopBtn.style.visibility = 'visible';
      scrollToTopBtn.style.transform = 'translateY(0)';
    } else {
      scrollToTopBtn.style.opacity = '0';
      scrollToTopBtn.style.visibility = 'hidden';
      scrollToTopBtn.style.transform = 'translateY(20px)';
    }
  }, 100);
  
  window.addEventListener('scroll', handleScroll);
};

// Criar botão após carregamento
setTimeout(createScrollToTopBtn, 1000);

// ===================
// KEYBOARD NAVIGATION ENHANCEMENTS
// ===================

// Melhorar navegação por teclado em cards
document.querySelectorAll('.card, .dark-card').forEach(card => {
  card.setAttribute('tabindex', '0');
  
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const link = card.querySelector('a');
      if (link) link.click();
    }
  });
});

// ===================
// PREVENT FOUC (Flash of Unstyled Content)
// ===================

document.documentElement.classList.add('js-enabled');
