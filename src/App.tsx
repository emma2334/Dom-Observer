import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectEditor } from './features/editor'
import { update, selectDom } from './features/dom'
import Editor from './components/Editor'
import Display from './components/Display'

import style from './App.module.css'

const App = () => {
  const editor = useSelector(selectEditor)
  const dom = useSelector(selectDom)
  const dispatch = useDispatch()

  const convertToDom = () => {
    dispatch(update(editor.code))
  }

  return (
    <div className={style.container}>
      <Editor code={editor.code} />
      <button id={style.convert} onClick={convertToDom}>
        Convert
      </button>
      <Display code={dom.code} />
    </div>
  )
}

export default React.memo(App)
