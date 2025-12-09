import React, { useState } from 'react'
import { useTheme } from '@/context/ThemeContext'

export default function Settings() {
  const { theme, setTheme, setBackground, backgrounds } = useTheme()
  const [primaryColor, setPrimaryColor] = useState(theme.primaryColor)
  const [accentColor, setAccentColor] = useState(theme.accentColor)
  const [textColor, setTextColor] = useState(theme.textColor)
  const [fontFamily, setFontFamily] = useState(theme.fontFamily)
  const [backgroundKey, setBackgroundKey] = useState(theme.backgroundImage)

  const handleSave = () => {
    setTheme((prev) => ({
      ...prev,
      primaryColor,
      accentColor,
      textColor,
      fontFamily,
      backgroundImage: backgroundKey
    }))
    setBackground(backgroundKey)
  }

  const backgroundOptions = Object.keys(backgrounds)

  return (
    <div className="settings">
      <h2>Configurações</h2>

      <section className="settings-section">
        <h3>Aparência</h3>
        <div className="settings-grid">
          <div className="settings-field">
            <label>Cor primária</label>
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
            />
          </div>
          <div className="settings-field">
            <label>Cor de destaque</label>
            <input
              type="color"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
            />
          </div>
          <div className="settings-field">
            <label>Cor do texto</label>
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
            />
          </div>
          <div className="settings-field">
            <label>Fonte</label>
            <select
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
            >
              <option value='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'>
                Padrão do sistema
              </option>
              <option value='"Roboto", system-ui, sans-serif'>Roboto</option>
              <option value='"Segoe UI", system-ui, sans-serif'>Segoe UI</option>
              <option value='"Calibri", system-ui, sans-serif'>Calibri-like</option>
            </select>
          </div>
          <div className="settings-field">
            <label>Background</label>
            <select
              value={backgroundKey}
              onChange={(e) => setBackgroundKey(e.target.value)}
            >
              {backgroundOptions.map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="settings-section">
        <h3>Configurações gerais (placeholder)</h3>
        <p>
          Aqui depois entram: caminho padrão de download, comportamento de mapas,
          níveis de log, etc.
        </p>
      </section>

      <button className="btn-primary" onClick={handleSave}>
        Salvar configurações
      </button>
    </div>
  )
}

