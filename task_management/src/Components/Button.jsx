import React from 'react'

const Button = ({text,style,eventHandling}) => {
  return (
    <div>
      <button onClick={eventHandling} className={style}>{text}</button>
    </div>
  )
}

export default Button
