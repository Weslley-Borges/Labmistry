import React, { InputHTMLAttributes } from 'react'
import './style.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string; 
  label: string,
  example?: string; 
  typing: string
}
const InputAnimated: React.FC<InputProps> = ({name,label,example,typing,...rest}) => {
  return(
	<div className="input-block"> 
		<label htmlFor={name}>{label}</label>  <input type={typing} id={name} placeholder={example}{...rest}/>
	</div>
)}
export default InputAnimated