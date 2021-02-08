import React, { InputHTMLAttributes } from 'react'
import './style.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string,
  label: string,
  typing: string
}
export const InputAnimated: React.FC<InputProps> = ({name,label,typing,...rest}) => {
  return(
	<div className="inputAnimated-block"> 
    <input className="AnimatedInput" type={typing} placeholder=" "id={name}{...rest}/>
		<label className="AnimatedInput-label" htmlFor={name}>{label}</label>
	</div>
)}