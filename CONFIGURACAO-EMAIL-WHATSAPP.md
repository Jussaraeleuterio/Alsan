# 📧 Configuração de E-mail e WhatsApp

## Como funciona:

1. **Usuário preenche o formulário** e clica em "Solicitar orçamento"
2. **Sistema envia e-mail** para o proprietário com os dados do formulário
3. **Usuário é redirecionado** para WhatsApp com mensagem pré-formatada

---

## ⚙️ Configuração Necessária

### 1. **EmailJS (Gratuito até 200 e-mails/mês)**

1. Acesse: https://www.emailjs.com/
2. Crie uma conta gratuita
3. Vá em **Email Services** → **Add New Service**
4. Escolha seu provedor (Gmail, Outlook, etc.)
5. Configure e anote:
   - **Service ID** (ex: `service_xxxxx`)
   - **Template ID** (criar template depois)
6. Vá em **Integration** → anote seu **Public Key** (ex: `xxxxxxxxxxxxx`)

### 2. **Criar Template de E-mail no EmailJS**

1. Vá em **Email Templates** → **Create New Template**
2. Use este conteúdo:

**Subject:**
```
Novo contato do site ALSAN - Solicitação de Orçamento
```

**To Email (E-mail de Destino):**
```
{{to_email}}
```

**Body (HTML):**
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

⚠️ **IMPORTANTE:** No campo "To Email", use `{{to_email}}` para que o e-mail seja enviado para `comercial@alsanconstrucao.com.br`

3. Anote o **Template ID** (ex: `template_xxxxx`)

### 3. **Configurar WhatsApp Business**

1. Tenha um número do WhatsApp Business
2. Use o formato: `5511999999999` (código do país + DDD + número, sem espaços ou caracteres especiais)

---

## 📝 Variáveis de Ambiente

Após configurar, adicione as variáveis no arquivo `.env`:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
VITE_EMAIL_TO=comercial@alsanconstrucao.com.br
VITE_WHATSAPP_NUMBER=5511999999999
```

---

## ✅ Após Configurar

Reinicie o servidor:
```bash
npm run dev
```

O formulário estará funcional e:
- ✅ Enviará e-mail para você
- ✅ Redirecionará usuário para WhatsApp


