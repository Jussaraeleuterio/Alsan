# ALSAN Site - Vue 3

Site institucional da ALSAN convertido para Vue 3 com Composition API.

## 🚀 Tecnologias

- **Vue 3** - Framework JavaScript
- **Vite** - Build tool e dev server
- **Composition API** - Sistema de componentes reativo

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── assets/
│   └── style.css          # Estilos globais
├── components/
│   ├── Hero.vue           # Seção hero (logo e headline)
│   ├── About.vue          # Seção sobre/institucional
│   ├── Gallery.vue        # Galeria de obras
│   ├── Differentiators.vue # Seção diferenciais
│   ├── Contact.vue        # Seção de contato e formulário
│   └── Footer.vue         # Rodapé
├── composables/
│   ├── useScrollReveal.js # Composable para animações scroll
│   ├── useSmoothScroll.js # Composable para scroll suave
│   └── useForm.js         # Composable para formulário
├── App.vue                # Componente principal
└── main.js                # Entry point
```

## ✨ Características

- ✅ Componentes Vue 3 com Composition API
- ✅ Composables reutilizáveis
- ✅ Animações scroll reveal
- ✅ Formulário com validação
- ✅ Totalmente responsivo
- ✅ Acessível (WCAG AA)
- ✅ Performance otimizada

## 🔄 Migração do HTML/CSS/JS puro

O código foi migrado mantendo:
- ✅ Todos os estilos CSS originais
- ✅ Todas as funcionalidades JavaScript
- ✅ Estrutura e conteúdo HTML
- ✅ Animações e interações

## 📝 Próximos Passos

1. **Backend Integration**: Conectar formulário com API
2. **State Management**: Adicionar Pinia se necessário
3. **Router**: Adicionar Vue Router para múltiplas páginas
4. **Testing**: Adicionar testes unitários
5. **PWA**: Transformar em Progressive Web App


