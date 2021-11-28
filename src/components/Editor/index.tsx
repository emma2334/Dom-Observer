import React, { useState } from 'react'
import CodeEditor from 'react-simple-code-editor'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import style from './index.module.css'

interface PropsType {
  example: string
}

const Editor = ({ example }: PropsType) => {
  const [code, setCode] = useState(example)
  return (
    <CodeEditor
      id={style.editor}
      value={code}
      onValueChange={code => setCode(code)}
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
