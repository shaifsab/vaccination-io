import React from 'react'
import style from './ButtonICon.module.css'




const ButtonIcon = (props) => {
  return (
    <>
      <div className={`${style.icon}`}>{props.icon}</div>
    </>
  )
}

export default ButtonIcon
