import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import prettier from 'prettier/standalone'
import htmlParser from 'prettier/parser-html'
import { update } from '../../features/editor'
import style from './index.module.css'

interface PropsType {
  code: string
}

const Display = ({ code }: PropsType) => {
  const ref = useRef(null)
  const dispatch = useDispatch()
  const observer = new MutationObserver((mutationsList, observer) => {
    dispatch(
      update(
        prettier.format(
          document.getElementById(style.display)?.innerHTML || '',
          { parser: 'html', plugins: [htmlParser] },
        ),
      ),
    )
  })

  React.useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current, {
        subtree: true,
        childList: true,
        attributes: true,
        characterData: true,
      })
    }
    return () => {
      observer.disconnect()
    }
  })
  return (
    <div
      ref={ref}
      id={style.display}
      dangerouslySetInnerHTML={{ __html: code }}
    />
  )
}

export default React.memo(Display)
