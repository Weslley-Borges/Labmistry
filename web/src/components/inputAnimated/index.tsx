import React, { InputHTMLAttributes } from 'react'
import './style.scss'

/* 
	src/components/inputAnimated/index.tsx, 11/18/2020
	Author: Weslley Borges dos Santos
	Este arquivo é o HTML do componente inputAnimated
*/

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string,
  label: string,
  typing: string
}
const InputAnimated: React.FC<InputProps> = ({name,label,typing,...rest}) => {
  return(
	<div className="inputAnimated-block"> 
    <input className="AnimatedInput" type={typing} placeholder=" "id={name}{...rest}/>
		<label className="AnimatedInput-label" htmlFor={name}>{label}</label>
	</div>
)}
export default InputAnimated