import React from 'react'
import './buttonIndex.css'

export default function ButtonIndex(props) {
  //console.log(props)
  //console.log(props.text)
  //console.log(props.style)
  console.log(props.children)
  return (
    <button className={props.style}>{props.text || props.children}</button>
  )
}
