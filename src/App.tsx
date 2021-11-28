import React from 'react'
import style from './App.module.css'
import demo from './demo'

const App = () => {
  return (
    <div className={style.App}>
      <div className={style.container}>
        <div id={style.html} contentEditable={true}>
          {demo}
        </div>
        <button id={style.convert}>Convert</button>
        <div id={style.dom} dangerouslySetInnerHTML={{ __html: demo }} />
      </div>
    </div>
  )
}

export default React.memo(App)
