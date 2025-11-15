import React, { useEffect, useState } from 'react'
import Btn from './components/Btn.jsx'
import Dropdown from './components/Dropdown.jsx'

export default function App() {
  const [theme, setTheme] = useState('light')
  useEffect(() => { document.documentElement.setAttribute('data-theme', theme) }, [theme])
  return (
    <div className="page">
      <div className="app">
        <div className="shell">
          <h1 className="page-title">Frontend Components</h1>
          <div className="grid">
            <div className="panel">
              <div className="panel-title">Buttons</div>
              <div className="section">
                <div className="label">Default width</div>
                <Btn label="Done" />
              </div>
              <div className="section">
                <div className="label">Full width</div>
                <div className="full-row">
                  <Btn label="Done" full height={40} />
                </div>
              </div>
            </div>
            <div className="panel">
              <div className="panel-title">Dropdown</div>
              <Dropdown />
            </div>
          </div>
          <div className="panel">
            <div className="panel-title">Theme</div>
            <div className="theme-actions">
              <Btn label="🌞 Light" width={100} height={40} variant={theme === 'light' ? 'primary' : 'outline'} onClick={() => setTheme('light')} />
              <Btn label="🌙 Dark" width={100} height={40} variant={theme === 'dark' ? 'primary' : 'outline'} onClick={() => setTheme('dark')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}