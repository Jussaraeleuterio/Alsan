# 📱 Como Testar no Celular - Passo a Passo

## 🚀 Método Rápido (Recomendado)

### 1. Descobrir o IP da sua máquina

**Windows:**
```powershell
ipconfig
```
Procure por "Endereço IPv4" (geralmente algo como `192.168.x.x`)

**Mac/Linux:**
```bash
ifconfig | grep "inet "
```

### 2. Iniciar o servidor com acesso na rede

```bash
npm run dev -- --host
```

Ou edite o `vite.config.js` para sempre usar `--host` (já configurado!)

### 3. Acessar no celular

1. **Conecte o celular na MESMA rede Wi-Fi** do computador
2. **Abra o navegador do celular**
3. **Digite o endereço:**
   ```
   http://SEU_IP:3000
   ```
   Exemplo: `http://192.168.1.100:3000`

---

## 📋 Script Automático

Execute o script `start-mobile.bat` (Windows) ou `start-mobile.sh` (Mac/Linux) que:
- ✅ Descobre o IP automaticamente
- ✅ Inicia o servidor
- ✅ Mostra o link para copiar

---

## ⚠️ Importante

1. **Mesma rede Wi-Fi:** Celular e computador devem estar na mesma rede
2. **Firewall:** Pode precisar permitir acesso na porta 3000
3. **IP muda:** Se desconectar/reconectar no Wi-Fi, o IP pode mudar

---

## 🔧 Solução de Problemas

### Não consegue acessar?
- Verifique se está na mesma rede Wi-Fi
- Verifique o firewall do Windows
- Tente desativar temporariamente o antivírus
- Verifique se a porta 3000 está livre

### IP não funciona?
- Execute `ipconfig` novamente
- Tente usar `localhost` ou `127.0.0.1` (só funciona no próprio PC)

---

## 📱 QR Code (Alternativa)

Use uma extensão do VS Code como "Live Server" que gera QR Code automaticamente!


