# 📧 Configuração Completa do EmailJS - Passo a Passo

## ⚠️ IMPORTANTE: Siga cada passo cuidadosamente!

---

## 📋 PASSO 1: Criar Conta no EmailJS

1. Acesse: **https://www.emailjs.com/**
2. Clique em **"Sign Up"** (canto superior direito)
3. Use seu e-mail ou conta Google
4. Confirme o e-mail de verificação

✅ **Pronto!** Agora você tem uma conta gratuita (200 e-mails/mês)

---

## 📋 PASSO 2: Conectar Serviço de E-mail

1. **No dashboard do EmailJS**, clique em **"Email Services"** (menu lateral)
2. Clique no botão **"+ Add New Service"**
3. Escolha seu provedor:
   - **Gmail** (mais comum)
   - **Outlook** 
   - **Outros** (Yahoo, SendGrid, etc.)

### Se escolher Gmail:

1. Clique em **"Gmail"**
2. Clique em **"Connect Account"**
3. Faça login com sua conta Google
4. Autorize o EmailJS a enviar e-mails
5. Dê um **nome** para o serviço (ex: "Gmail ALSAN")
6. Clique em **"Create Service"**

### ✅ Copie o Service ID:
- Após criar, você verá algo como: `service_abc123`
- **ANOTE ESSE VALOR!** Você precisará dele.

---

## 📋 PASSO 3: Criar Template de E-mail

1. No menu lateral, clique em **"Email Templates"**
2. Clique em **"+ Create New Template"**

### Configurar o Template:

**Nome do Template:** `Novo Contato ALSAN`

**Subject (Assunto):**
```
Novo contato do site ALSAN - Solicitação de Orçamento
```

**To Email (E-mail de Destino):**
```
{{to_email}}
```

**Content (Conteúdo):**
Cole o seguinte código HTML:

```html
<p style="font-size: 18px; font-weight: bold; color: #B85C38;">Novo contato recebido do site ALSAN</p>

<p style="margin-top: 20px;"><strong>Nome:</strong> {{nome}}</p>
<p><strong>E-mail:</strong> {{email}}</p>
<p><strong>WhatsApp:</strong> {{whatsapp}}</p>

<p style="margin-top: 20px;"><strong>Mensagem:</strong></p>
<p style="background: #f5f5f5; padding: 15px; border-left: 3px solid #B85C38;">{{mensagem}}</p>

<hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">

<p style="color: #999; font-size: 12px;">Enviado automaticamente pelo site ALSAN</p>
```

⚠️ **IMPORTANTE:** No campo "To Email", use `{{to_email}}` para que o e-mail seja enviado para `comercial@alsanconstrucao.com.br`

3. Clique em **"Save"**

### ✅ Copie o Template ID:
- Após salvar, você verá algo como: `template_xyz789`
- **ANOTE ESSE VALOR!** Você precisará dele.

---

## 📋 PASSO 4: Obter Public Key (Chave Pública)

1. No menu lateral, clique em **"Account"** → **"General"**
2. Procure por **"API Keys"** ou **"Public Key"**
3. Você verá algo como: `abcdefghijklmnopqrstuvwxyz`
4. **ANOTE ESSE VALOR!**

---

## 📋 PASSO 5: Configurar o arquivo .env

1. Abra o arquivo `.env` na raiz do projeto
2. Substitua os valores pelos que você anotou:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnopqrstuvwxyz
VITE_EMAIL_TO=comercial@alsanconstrucao.com.br
VITE_WHATSAPP_NUMBER=5511999999999
```

⚠️ **IMPORTANTE:**
- Substitua `service_abc123` pelo seu Service ID real
- Substitua `template_xyz789` pelo seu Template ID real
- Substitua `abcdefghijklmnopqrstuvwxyz` pela sua Public Key real
- `VITE_EMAIL_TO` já está configurado para `comercial@alsanconstrucao.com.br` (não precisa alterar)
- Substitua `5511999999999` pelo número do WhatsApp Business (formato: código país + DDD + número)

### Exemplo de número WhatsApp:
- Brasil: `5511999999999` (55 + 11 + 999999999)
- Sem espaços, sem parênteses, sem hífens!

---

## 📋 PASSO 6: Testar

1. **Reinicie o servidor:**
   ```bash
   npm run dev
   ```

2. **Preencha o formulário** no site
3. **Clique em "Solicitar Orçamento"**
4. **Verifique:**
   - Seu e-mail deve receber a mensagem
   - O WhatsApp deve abrir com a mensagem pré-formatada

---

## 🆘 Problemas Comuns

### ❌ E-mail não chega?
- Verifique se o Service ID está correto no `.env`
- Verifique se conectou corretamente o serviço de e-mail
- Verifique a pasta de spam

### ❌ WhatsApp não abre?
- Verifique o número no `.env` (deve estar no formato correto)
- Teste o link manualmente: `https://wa.me/5511999999999`

### ❌ Erro no console?
- Verifique se todas as variáveis estão no `.env`
- Verifique se reiniciou o servidor após criar o `.env`
- Verifique se os IDs estão corretos (sem espaços extras)

### ❌ Template não funciona?
- Verifique se as variáveis no template estão exatamente: `{{nome}}`, `{{email}}`, `{{whatsapp}}`, `{{mensagem}}`
- Case-sensitive! Deve estar em minúsculas.

---

## ✅ Checklist Final

- [ ] Conta EmailJS criada
- [ ] Serviço de e-mail conectado (Gmail/Outlook)
- [ ] Template criado com as variáveis corretas
- [ ] Service ID copiado
- [ ] Template ID copiado
- [ ] Public Key copiada
- [ ] Número do WhatsApp no formato correto
- [ ] Arquivo `.env` preenchido corretamente
- [ ] Servidor reiniciado
- [ ] Teste realizado com sucesso

---

## 📞 Suporte

- **Documentação EmailJS:** https://www.emailjs.com/docs/
- **Dashboard EmailJS:** https://dashboard.emailjs.com/

---

**Boa sorte! 🚀**


