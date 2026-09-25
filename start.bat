@echo off
cd /d "%~dp0"
echo Sayt: http://localhost:5173  (to'xtatish: Ctrl+C)
start "" http://localhost:5173
node tools\serve.mjs 5173
