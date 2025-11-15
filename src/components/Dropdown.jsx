import React, { useState } from 'react'
import Checkbox from './Checkbox.jsx'
import Btn from './Btn.jsx'
import Modal from './Modal.jsx'
import './dropdown.css'

export default function Dropdown() {
  const [pages, setPages] = useState([false, false, false, false])
  const all = pages.every(Boolean)
  const setPage = (i, v) => setPages(p => p.map((b, idx) => (idx === i ? v : b)))
  const toggleAll = () => setPages(p => (p.every(Boolean) ? [false, false, false, false] : [true, true, true, true]))
  const [open, setOpen] = useState(false)
  const [summary, setSummary] = useState([])
  const done = () => {
    const list = pages.map((b, i) => (b ? `Page ${i + 1}` : null)).filter(Boolean)
    setSummary(list)
    setOpen(true)
  }
  const reset = () => setPages([false, false, false, false])
  return (
    <div className="dropdown">
      <div className="item header">
        <div className="label">All pages</div>
        <Checkbox checked={all} onChange={toggleAll} />
      </div>
      {[0, 1, 2, 3].map(i => (
        <div className="item" key={i}>
          <div className="label">{`Page ${i + 1}`}</div>
          <Checkbox checked={pages[i]} onChange={v => setPage(i, v)} />
        </div>
      ))}
      <div className="footer">
        <Btn label="Done" full height={40} onClick={done} />
      </div>
      <Modal
        open={open}
        title="Selection"
        onClose={() => setOpen(false)}
        actions={
          <>
            <Btn label="Reset" variant="outline" width={90} height={36} onClick={reset} />
            <Btn label="Close" width={90} height={36} onClick={() => setOpen(false)} />
          </>
        }
      >
        {summary.length === 0 ? (
          <div className="label">No pages selected</div>
        ) : (
          <div className="chips">
            {summary.map(s => (
              <div className="chip" key={s}>{s}</div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}