import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/configuracoes">
              Configurações
            </NavLink>
          </li>
          {/* depois: Notícias, Mapas, Comissões, etc */}
        </ul>
      </nav>
    </aside>
  )
}

