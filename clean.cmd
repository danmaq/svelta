@ECHO OFF

ECHO Clean up temporary files.
FOR /F %%a IN ('DIR /AD /B %TEMP%\react-*') DO RMDIR /S /Q %TEMP%\%%a 
RMDIR /S /Q node_modules
RMDIR /S /Q .wercker
DEL /F /Q package-lock.json
CALL npm cache clean --force
