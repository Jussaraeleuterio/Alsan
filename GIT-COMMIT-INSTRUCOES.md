# 🚀 Instruções para Fazer Push no GitHub

## ✅ Commit Criado!

O primeiro commit foi criado com sucesso.

## 📤 Próximo Passo: Push para o GitHub

Execute o comando abaixo no terminal:

```bash
git push -u origin main
```

### ⚠️ Autenticação Necessária

Você precisará autenticar no GitHub. Opções:

#### **Opção 1: Token de Acesso Pessoal (Recomendado)**

1. Vá em: https://github.com/settings/tokens
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. Dê um nome (ex: "ALSAN Site")
4. Marque a opção **"repo"** (acesso completo aos repositórios)
5. Clique em **"Generate token"**
6. **COPIE O TOKEN** (você só verá uma vez!)
7. Quando o Git pedir senha, use o token no lugar da senha

#### **Opção 2: GitHub CLI**

```bash
# Instalar GitHub CLI (se não tiver)
# Windows: winget install GitHub.cli

# Autenticar
gh auth login
```

#### **Opção 3: Credential Manager**

O Windows pode pedir suas credenciais. Use:
- **Usuário:** seu username do GitHub
- **Senha:** token de acesso pessoal (não sua senha normal)

---

## 🔄 Comandos Úteis

```bash
# Ver status
git status

# Ver histórico de commits
git log --oneline

# Fazer push
git push -u origin main

# Se precisar forçar (cuidado!)
git push -u origin main --force
```

---

## 📝 Próximos Commits

Depois do primeiro push, para fazer novos commits:

```bash
git add .
git commit -m "sua mensagem de commit"
git push
```

---

**Boa sorte! 🎉**

