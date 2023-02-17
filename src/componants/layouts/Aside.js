import React from 'react'

export default function Aside(props) {
  return (
    <aside className={`${props.cls} col-2 tbdr`}> {props.children}</aside>
  )
}
