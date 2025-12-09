import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { useTheme } from '@/context/ThemeContext'
import loginImage from '@/assets/bg/po_imagem_login.png'

export default function Login() {
  const { login } = useAuth()
  const { backgrounds, setBackground } = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    // Garante que, se houver background específico de login, ele seja usado
    if (backgrounds.login) {
      setBackground('login')
    }
  }, [backgrounds, setBackground])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await login(email, password)
      navigate(from, { replace: true })
    } catch (err) {
      console.error(err)
      setError('Falha ao entrar. Verifique e-mail/senha.')
    } finally {
      setLoading(false)
    }
  }

  const handleGetStart = () => {
    // Aqui no futuro a gente pode abrir um modal, registrar pedido no Firestore, etc.
    // Por enquanto é só um botão "cenográfico" indicando que o acesso é controlado pelo admin.
    alert('Contate o admin para liberação do acesso: código 1004.')
  }

  return (
    <div className="login-wrapper">
      {/* LADO ESQUERDO - LOGIN + GET START */}
      <div className="login-left">
        <div className="login-card">
          <h1>⚓ Projeto Oiapoque</h1>
          <p className="login-subtitle">
            Ambiente operacional - acesso restrito
          </p>

          {/* BLOCO GET START */}
          <div className="getstart-card">
            <h2>Get Start</h2>
            <p className="getstart-text">
              Para utilizar o sistema, o acesso deve ser liberado pelo administrador.
            </p>
            <button
              type="button"
              className="btn-primary getstart-button"
              onClick={handleGetStart}
            >
              Solicitar acesso
            </button>
            <p className="getstart-warning">
              Contate o admin para liberação do acesso!
            </p>
            <p className="getstart-code">
              1004
            </p>
          </div>

          {/* FORMULÁRIO DE LOGIN */}
          <form onSubmit={handleSubmit} className="login-form">
            <label>
              E-mail

