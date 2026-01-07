# 🚀 Setup Rápido - E-mail e WhatsApp

## ✅ Implementação Completa

O código já está pronto! Agora você só precisa configurar:

---

## 📋 Passo a Passo

### 1️⃣ Instalar dependências (já feito)
```bash
npm install
```

### 2️⃣ Configurar EmailJS

1. **Criar conta gratuita:** https://www.emailjs.com/
2. **Adicionar serviço de e-mail:**
   - Vá em **Email Services** → **Add New Service**
   - Escolha Gmail, Outlook, ou outro
   - Siga as instruções para conectar

3. **Criar Template:**
   - Vá em **Email Templates** → **Create New Template**
   - **Subject:** `Novo contato do site ALSAN - Solicitação de Orçamento`
   - **Body (HTML):**
   ```html
   <p><strong>Novo contato recebido do site ALSAN</strong></p>
   
   <p><strong>Nome:</strong> {{nome}}</p>
   <p><strong>E-mail:</strong> {{email}}</p>
   <p><strong>WhatsApp:</strong> {{whatsapp}}</p>
   <p><strong>Mensagem:</strong></p>
   <p>{{mensagem}}</p>
   
   <hr>
   <p style="color: #999; font-size: 12px;">Enviado automaticamente pelo site ALSAN</p>
   ```

4. **Copiar IDs:**
   - **Service ID** (ex: `service_abc123`)
   - **Template ID** (ex: `template_xyz789`)
   - **Public Key** (em **Integration**, ex: `abcdefghijklmnop`)

### 3️⃣ Configurar WhatsApp

- Anote o número do WhatsApp Business
- Formato: `5511999999999` (código país + DDD + número)

### 4️⃣ Criar arquivo .env

Na raiz do projeto, crie um arquivo `.env` com:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
VITE_WHATSAPP_NUMBER=5511999999999
```

⚠️ **IMPORTANTE:** Substitua pelos seus valores reais!

### 5️⃣ Reiniciar o servidor

```bash
npm run dev
```

---

## 🎯 Como Funciona

1. **Usuário preenche o formulário**
2. **Clica em "Solicitar Orçamento"**
3. **Sistema envia e-mail** para você (propriedade) com os dados
4. **Usuário é redirecionado** para WhatsApp com mensagem pré-formatada

---

## ✅ Teste

1. Preencha o formulário no site
2. Clique em "Solicitar Orçamento"
3. Verifique seu e-mail (pode demorar alguns segundos)
4. Verifique se abriu o WhatsApp com a mensagem

---

## 🆘 Problemas?

- **E-mail não chega?** Verifique as configurações do EmailJS
- **WhatsApp não abre?** Verifique o número no `.env`
- **Erro no console?** Verifique se todas as variáveis estão no `.env`

---

## 📧 Suporte EmailJS

- Documentação: https://www.emailjs.com/docs/
- Limite gratuito: 200 e-mails/mês

