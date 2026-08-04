'use client';

import {
    createContext,
    type ReactNode,
    useCallback,
    useContext,
    useEffect,
    useSyncExternalStore,
    useState,
} from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextValue {
    readonly theme: Theme;
    readonly setTheme: (theme: Theme) => void;
    readonly toggleTheme: () => void;
    readonly systemPrefersDark: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export interface ThemeProviderProps {
    readonly children: ReactNode;
    readonly storageKey?: string;
}

function getSystemTheme(): 'light' | 'dark' {
    if (
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        return 'dark';
    }
    return 'light';
}

const systemPrefersDarkMediaQuery = '(prefers-color-scheme: dark)';

function subscribeToSystemTheme(onStoreChange: () => void): () => void {
    const mq = window.matchMedia(systemPrefersDarkMediaQuery);
    mq.addEventListener('change', onStoreChange);
    return () => mq.removeEventListener('change', onStoreChange);
}

function getSystemPrefersDark(): boolean {
    return window.matchMedia(systemPrefersDarkMediaQuery).matches;
}

function getStoredOrSystemTheme(storageKey: string): Theme {
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(storageKey);
        if (stored === 'dark' || stored === 'light') return stored;
    }
    return getSystemTheme();
}

export function ThemeProvider({
    children,
    storageKey = 'serva-theme',
}: ThemeProviderProps) {
    const systemPrefersDark = useSyncExternalStore(
        subscribeToSystemTheme,
        getSystemPrefersDark,
        getSystemPrefersDark
    );
    const [theme, setThemeState] = useState<Theme>(() =>
        getStoredOrSystemTheme(storageKey)
    );

    // Apply theme class and persist
    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem(storageKey, theme);
    }, [theme, storageKey]);

    const setTheme = useCallback((newTheme: Theme) => {
        setThemeState(newTheme);
    }, []);

    const toggleTheme = useCallback(() => {
        setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
    }, []);

    return (
        <ThemeContext.Provider
            value={{ theme, setTheme, toggleTheme, systemPrefersDark }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextValue {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
    return ctx;
}
