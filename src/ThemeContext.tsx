// ThemeContext.tsx

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextProps {
    mode: string;
    setMode: (mode: string) => void;
    toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [mode, setMode] = useState<string>(() => {
        // 初期状態として localStorage から取得
        return localStorage.getItem('mode') || 'dark';
    });

    useEffect(() => {
        // モードが変わるたびに localStorage に保存
        localStorage.setItem('mode', mode);
        document.documentElement.setAttribute('theme', mode);
    }, [mode]);

    const toggleMode = () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
}
