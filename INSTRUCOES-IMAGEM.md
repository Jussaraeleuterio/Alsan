# 📸 Instruções para Adicionar a Imagem do Portfólio

## ⚠️ A imagem não está aparecendo?

A imagem precisa ser colocada na pasta correta para funcionar no Vue 3 com Vite.

## 📁 Onde colocar a imagem:

1. **Caminho correto:**
   ```
   public/assets/portfolio-alsan.jpg
   ```

2. **Como fazer:**
   - Copie a imagem do portfólio
   - Cole na pasta: `public/assets/`
   - Renomeie para: `portfolio-alsan.jpg`
   - **OU** mantenha o nome original e atualize o código

## 🔧 Alternativas:

### Opção 1: Usar nome personalizado
Se sua imagem tem outro nome (ex: `portfolio.jpg`), atualize o componente:

**Arquivo:** `src/components/Gallery.vue`

```javascript
const projetos = [
  { 
    image: '/assets/SEU-NOME-DA-IMAGEM.jpg', // Altere aqui
    ...
  }
]
```

### Opção 2: Verificar estrutura
Certifique-se de que a estrutura está assim:
```
projeto/
├── public/
│   └── assets/
│       └── portfolio-alsan.jpg  ← A imagem aqui
├── src/
│   └── components/
│       └── Gallery.vue
```

## ✅ Verificação:

Depois de colocar a imagem:
1. Reinicie o servidor: `npm run dev`
2. A imagem deve aparecer automaticamente
3. Se não aparecer, verifique o console do navegador (F12) para ver erros

## 💡 Dica:

No Vite, arquivos em `public/` são servidos na raiz. Então:
- Arquivo em: `public/assets/portfolio-alsan.jpg`
- Referência no código: `/assets/portfolio-alsan.jpg`
- Caminho final no navegador: `http://localhost:3000/assets/portfolio-alsan.jpg`


