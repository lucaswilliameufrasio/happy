import React, { useContext } from 'react'

import Context from '@/presentation/contexts/form/form-context'

import './form-textarea.css'

interface Props extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  labelContent: string | React.ReactNode
}

function FormTextarea (props: Props) {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]

  const handleChange = (event: React.FocusEvent<HTMLTextAreaElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="form-textarea-block">
      <label htmlFor={props.name}>{props.labelContent}</label>
      <textarea {...props} className={error ? 'form-textarea-highlighted-error' : ''} id={props.name} maxLength={props.maxLength} onChange={handleChange} />
      {error && <span className="form-textarea-span-error">{error}</span>}
    </div>

  )
}

export default FormTextarea