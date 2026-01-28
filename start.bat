@echo off
echo ====================================
echo Spirit Island Reference App Launcher
echo ====================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo Installing dependencies...
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo ERROR: npm install failed!
        pause
        exit /b 1
    )
    echo.
    echo Dependencies installed successfully!
    echo.
) else (
    echo Dependencies already installed, skipping npm install...
    echo.
)

echo Starting development server...
echo.
echo The server will open in a new window.
echo Press Ctrl+C in that window to stop the server.
echo.

REM Start the dev server in a new window
start "Spirit Island Dev Server" cmd /k "npm run dev"

echo Waiting for server to start...
timeout /t 5 /nobreak > nul

echo Opening browser...
start http://localhost:5173

echo.
echo ====================================
echo App should now be running!
echo Browser opened at http://localhost:5173
echo.
echo To stop the server, close the
echo "Spirit Island Dev Server" window
echo or press Ctrl+C in that window.
echo ====================================
echo.
pause
