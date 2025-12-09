import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './layout.css'

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Navbar />
      <div className="layout-body">
        <Sidebar />
        <main className="layout-content">
          {children}
        </main>
      </div>
    </div>
  )
}

