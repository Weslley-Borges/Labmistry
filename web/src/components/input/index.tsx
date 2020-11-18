import React, { InputHTMLAttributes } from 'react'
import './style.scss'

{/* 
	src/components/input/index.tsx, 11/18/2020
	Author: Weslley Borges dos Santos
	Este arquivo é o HTML do componente input
*/}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
	name: string
	label: string
	example?: string
	typing: string
}
const Input: React.FC<InputProps> = ({name,label,example,typing,...rest}) => {
  return(
	<div className="input-block"> 
		<label htmlFor={name}>{label}</label>
		<input type={typing} id={name} placeholder={example}{...rest}/>
	</div>
)}
export default Input