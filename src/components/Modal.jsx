import React, { useEffect } from 'react'
import './modal.css'

export default function Modal({ open, title, children, onClose, actions }) {
  useEffect(() => {
    const h = e => { if (e.key === 'Escape') onClose && onClose() }
    if (open) window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [open, onClose])
  if (!open) return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {title && <div className="modal-header">{title}</div>}
        <div className="modal-body">{children}</div>
        {actions && <div className="modal-actions">{actions}</div>}
      </div>
    </div>
  )
}