import React from 'react'

import Editor from './components/Editor'
import Display from './components/Display'

import style from './App.module.css'
import demo from './demo'

const App = () => {
  return (
    <div className={style.container}>
      <Editor code={demo} />
      <button id={style.convert}>Convert</button>
      <Display code={demo} />
    </div>
  )
}

export default React.memo(App)
