import React from 'react'
import { useDispatch } from 'react-redux'

import style from './index.module.css'

interface PropsType {
  sync: boolean
}

const Editor = ({ sync }: PropsType) => {
  return (
    <footer className={style.footer}>
      {sync ? '✅ Synced!' : '❌ Unsync'}
    </footer>
  )
}

export default React.memo(Editor)
