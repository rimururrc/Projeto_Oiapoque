import React, { createContext, useContext, useEffect, useState } from 'react'
import bgLogin from '@/assets/bg/po_imagem_login.png'
import bgBackground1 from '@/assets/bg/po_imagem_background1.png'

const ThemeContext = createContext(null)

const STORAGE_KEY = 'oiapoque_theme'

const defaultTheme = {
  mode: 'dark',
  primaryColor: '#0f172a',   // fundo principal
  accentColor: '#22d3ee',    // detalhes (ciano)
  textColor: '#e5e7eb',
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  backgroundImage: 'login', // 'login' | 'background1' | etc
}

const backgroundMap = {
  login: bgLogin,
  background1: bgBackground1
  // depois você adiciona mais aqui
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setTheme(JSON.parse(stored))
      } catch {
        /* ignore */
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(theme))

    document.documentElement.style.setProperty('--primary-color', theme.primaryColor)
    document.documentElement.style.setProperty('--accent-color', theme.accentColor)
    document.documentElement.style.setProperty('--text-color', theme.textColor)
    document.documentElement.style.setProperty('--font-family', theme.fontFamily)
  }, [theme])

  const setBackground = (key) => {
    if (!backgroundMap[key]) return
    setTheme((prev) => ({ ...prev, backgroundImage: key }))
  }

  const value = {
    theme,
    setTheme,
    setBackground,
    backgrounds: backgroundMap
  }

  return (
    <ThemeContext.Provider value={value}>
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: theme.primaryColor,
          color: theme.textColor,
          fontFamily: theme.fontFamily,
          backgroundImage: backgroundMap[theme.backgroundImage]
            ? `url(${backgroundMap[theme.backgroundImage]})`
            : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="backdrop-layer">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

