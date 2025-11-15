import React from 'react'
import './btn.css'

export default function Btn({ label = 'Done', width = 140, height = 40, full = false, variant = 'primary', onClick }) {
  const style = { width: full ? '100%' : width + 'px', height: height + 'px' }
  return (
    <button className={`btn ${variant}`} style={style} onClick={onClick}>
      {label}
    </button>
  )
}
