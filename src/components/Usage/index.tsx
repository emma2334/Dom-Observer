import React from 'react'
import content from './content'

import style from './index.module.css'

const Editor = () => {
  return (
    <div id={style.usage}>
      <h3>Usage</h3>
      <ul>
        {content.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  )
}

export default React.memo(Editor)
