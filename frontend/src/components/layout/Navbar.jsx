import React from 'react'
import { useAuth } from '@/context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">⚓ Projeto Oiapoque</span>
      </div>
      <div className="navbar-right">
        {user && (
          <>
            <span className="navbar-user">
              {user.email}
            </span>
            <button className="btn-outline" onClick={handleLogout}>
              Sair
            </button>
          </>
        )}
      </div>
    </header>
  )
}

