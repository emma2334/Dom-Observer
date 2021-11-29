import React from 'react'
import { useDispatch } from 'react-redux'
import { edit } from '../../features/editor'

import CodeEditor from 'react-simple-code-editor'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

import style from './index.module.css'

interface PropsType {
  code: string
}

const Editor = ({ code }: PropsType) => {
  const dispatch = useDispatch()
  return (
    <CodeEditor
      id={style.editor}
      value={code}
      onValueChange={code => dispatch(edit(code))}
      highlight={code => Prism.highlight(code, Prism.languages.html, 'html')}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  )
}

export default React.memo(Editor)
