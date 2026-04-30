'use client'

import * as React from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
}

const ThemeContext = React.createContext<ThemeContextValue>({
  theme: 'system',
  setTheme: () => {},
  resolvedTheme: 'light',
})

export function useTheme() {
  return React.useContext(ThemeContext)
}

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  attribute?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)

  // Read persisted theme from localStorage on first client render only.
  // All localStorage access is inside useEffect so it never runs during SSR,
  // regardless of what Node.js version adds to the server global scope.
  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem('theme') as Theme | null
      if (stored && ['light', 'dark', 'system'].includes(stored)) {
        setThemeState(stored)
      }
    } catch {
      // localStorage unavailable — silently ignore
    }
  }, [])

  // Resolve 'system' to the actual OS preference
  const getResolved = React.useCallback((t: Theme): 'light' | 'dark' => {
    if (t === 'system') {
      if (typeof window === 'undefined') return 'light'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    return t
  }, [])

  const [resolvedTheme, setResolvedTheme] = React.useState<'light' | 'dark'>(
    () => getResolved(defaultTheme)
  )

  // Apply dark/light class to <html> and keep resolvedTheme in sync
  React.useEffect(() => {
    const resolved = getResolved(theme)
    setResolvedTheme(resolved)
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(resolved)
  }, [theme, getResolved])

  // Track OS preference changes when theme is 'system'
  React.useEffect(() => {
    if (theme !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      const resolved = mq.matches ? 'dark' : 'light'
      setResolvedTheme(resolved)
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(resolved)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme])

  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    try {
      window.localStorage.setItem('theme', newTheme)
    } catch {
      // localStorage unavailable — silently ignore
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
