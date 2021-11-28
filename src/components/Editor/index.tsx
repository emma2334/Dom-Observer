import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import theme from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light'
import style from './index.module.css'

interface PropsType {
  code: string
}

const Editor = ({ code }: PropsType) => {
  return (
    <SyntaxHighlighter
      id={style.editor}
      contentEditable={true}
      language="htmlbars"
      style={theme}
    >
      {code}
    </SyntaxHighlighter>
  )
}

export default React.memo(Editor)
