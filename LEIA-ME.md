# Site ALSAN - Guia de Execução Local

## ✅ Status do Código

O código HTML está **sintaticamente correto** e pode ser executado localmente sem problemas críticos.

## ⚠️ Avisos e Ajustes Necessários

### 1. **Imagens Faltando** (Aviso no Console)
As seguintes imagens são referenciadas mas não existem ainda:
- `assets/logo-alsan.png` (logo principal)
- `assets/obra-01.jpg` (obra grande)
- `assets/obra-02.jpg`, `assets/obra-03.jpg`, `assets/obra-04.jpg` (galeria)

**Impacto:** O navegador mostrará ícones de imagem quebrada, mas o site funcionará normalmente.

**Solução:** Adicione as imagens na pasta `assets/` com os nomes corretos.

### 2. **Google Fonts** (Requer Internet)
O site carrega a fonte Inter do Google Fonts. Se não houver internet:
- O site usará fontes de fallback (system-ui, Arial, sans-serif)
- O visual será ligeiramente diferente, mas funcional

### 3. **Link do WhatsApp**
Na linha 582, o link precisa ser atualizado:
```html
href="https://wa.me/55SEUNUMEROAQUI"
```
Substitua `SEUNUMEROAQUI` pelo número completo (ex: `5511999999999`).

## 🚀 Como Executar

### Método 1: Abrir Diretamente
1. Navegue até a pasta do projeto
2. Clique duas vezes em `index.html`
3. O navegador padrão abrirá o site

### Método 2: Servidor Local (Recomendado)
Para melhor experiência, use um servidor local:

**Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Depois acesse: `http://localhost:8000`

**Node.js (http-server):**
```bash
npx http-server -p 8000
```

**VS Code (Live Server):**
- Instale a extensão "Live Server"
- Clique com botão direito em `index.html` > "Open with Live Server"

## 📋 Checklist de Produção

Antes de publicar, verifique:
- [ ] Todas as imagens adicionadas em `assets/`
- [ ] Link do WhatsApp atualizado
- [ ] Informações de contato atualizadas (e-mail, telefone, cidade)
- [ ] Textos revisados
- [ ] Testado em diferentes navegadores
- [ ] Testado em dispositivos móveis

## 🐛 Problemas Conhecidos

Nenhum erro crítico encontrado. O código está pronto para uso!


