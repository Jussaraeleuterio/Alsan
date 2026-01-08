@echo off
echo ====================================
echo   ALSAN - Servidor para Mobile
echo ====================================
echo.

echo [1/3] Descobrindo seu IP local...
echo.

for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4"') do (
    set IP=%%a
    set IP=!IP: =!
    echo Seu IP Local: !IP!
    echo.
    goto :found
)

:found
echo [2/3] Iniciando servidor...
echo.
echo [3/3] Acesse no seu celular:
echo.
echo     http://%IP%:3000
echo.
echo ====================================
echo   IMPORTANTE:
echo   - Celular e PC na mesma Wi-Fi
echo   - Pressione Ctrl+C para parar
echo ====================================
echo.

npm run dev


