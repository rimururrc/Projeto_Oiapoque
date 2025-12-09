import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <h2>Visão Geral</h2>
      <p>Bem-vindo ao painel do Projeto Oiapoque.</p>
      <div className="cards-grid">
        <div className="card">
          <h3>Notícias</h3>
          <p>Resumo de notícias e OSINT (futuro).</p>
        </div>
        <div className="card">
          <h3>Mapas</h3>
          <p>Visualização de rotas e áreas de interesse (futuro).</p>
        </div>
        <div className="card">
          <h3>Comissões</h3>
          <p>Gerenciamento de NE Brasil, GUINEX, UNITAS, etc. (futuro).</p>
        </div>
      </div>
    </div>
  )
}

