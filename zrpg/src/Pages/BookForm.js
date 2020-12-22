import React from 'react'

export default function BookForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Book-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}