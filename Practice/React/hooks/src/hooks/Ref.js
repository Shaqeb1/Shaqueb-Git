import React, { useRef } from 'react'

export default function Ref() {
  const count = useRef(0)
  return <button onClick={() => count.current++}>{count.current}</button>
}
