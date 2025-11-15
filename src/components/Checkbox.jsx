import React, { useState } from 'react'
import './checkbox.css'

export default function Checkbox({ checked = false, onChange }) {
  const [pressed, setPressed] = useState(false)
  const toggle = () => onChange && onChange(!checked)
  return (
    <button
      type="button"
      className={`checkbox ${checked ? 'checked' : ''} ${pressed ? 'pressed' : ''}`}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onClick={toggle}
      aria-pressed={checked}
    >
      {checked && (
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  )
}