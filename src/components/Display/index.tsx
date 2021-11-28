import React from 'react'
import style from './index.module.css'

interface PropsType {
  code: string
}

const Display = ({ code }: PropsType) => {
  return <div id={style.display} dangerouslySetInnerHTML={{ __html: code }} />
}

export default React.memo(Display)
