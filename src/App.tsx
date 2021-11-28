import React from 'react'
import style from './App.module.css'

const App = () => {
  return (
    <div className={style.App}>
      <div className={style.container}>
        <textarea id={style.html} />
        <button id={style.convert}>Convert</button>
        <div id={style.dom} />
      </div>
    </div>
  )
}

export default React.memo(App)
