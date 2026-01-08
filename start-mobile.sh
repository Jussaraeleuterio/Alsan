#!/bin/bash

echo "===================================="
echo "  ALSAN - Servidor para Mobile"
echo "===================================="
echo ""

echo "[1/3] Descobrindo seu IP local..."
echo ""

# Tenta encontrar o IP (funciona no Mac e Linux)
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -1)
else
    # Linux
    IP=$(hostname -I | awk '{print $1}')
fi

if [ -z "$IP" ]; then
    IP=$(ip route get 1 | awk '{print $NF;exit}')
fi

echo "Seu IP Local: $IP"
echo ""
echo "[2/3] Iniciando servidor..."
echo ""
echo "[3/3] Acesse no seu celular:"
echo ""
echo "    http://$IP:3000"
echo ""
echo "===================================="
echo "  IMPORTANTE:"
echo "  - Celular e PC na mesma Wi-Fi"
echo "  - Pressione Ctrl+C para parar"
echo "===================================="
echo ""

npm run dev


