import React, { SelectHTMLAttributes } from 'react'

import './style.scss'

/* 
	src/components/select/index.tsx, 11/18/2020
	Author: Weslley Borges dos Santos
	Este arquivo é o HTML do componente select
*/

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	name: string; 
	label: string, 
	options: Array<{ 
		value: string, 
		label: string 
	}>
}
export const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
	return (
		<div className="select-block">
			<label htmlFor={name}>{label}</label>
			<select value="" id={name} {...rest}>
				<option value="" disabled hidden>Selecione uma opção</option>
				{/* 
					Cada objeto do array 'options' será convertido 
					em um option select, com os seus valores preenchidos
				*/}
				{options.map(option => {
					return <option key={option.value} value={option.value}>{option.label}</option>
				})}
			</select>
		</div>
)}