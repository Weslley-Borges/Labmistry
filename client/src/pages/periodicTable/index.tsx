import React from 'react'
import elements from '../../utils/JSON/elements.json'
import './styles.scss'

interface Element {
	id: number,
	symbol: string,
	name: string,
	atomicMass: number
	atomicWeight: Array<number>,
	family: string,
	position: Array<number>,
	formula: Array<string>
}

function getatomic(weigth: Array<number>): HTMLUListElement | any{
	return (
		weigth.forEach(weigth => {
			return <li>{weigth}</li> 
		})
	)
}

function getOrbits(orbits: Array<number>): HTMLDivElement | any{
	orbits.forEach(orbit => {
		return(
			<div className="orbital">
				{getElectrons(orbit)}
			</div>
		)
	})
}
function getElectrons(orbit: number){
	var rows = [];
	for (var i = 0; i < orbit; i++) {
			rows.push(<div className="electron"></div>);
	}
	return (rows);
}

export const PeriodicTable = () => {
	const families = [
		{tag:"Metal_Alcalino", name: "Metais Alcalinos"},
		{tag:"Metal_Alcalino-terroso", name: "Metais Alcalino-terrosos"},
		{tag:"Lantanídeos", name: "Lantanídeos"},
		{tag:"Actinídeos", name: "Actinídeos"},
		{tag:"Metal_de_Transição", name: "Metais de Transição"},
		{tag:"Semimetal", name: "Semimetais"},
		{tag:"Outros_Metais", name: "Outros Metais"},
		{tag:"Gás_Nobre", name: "Gases Nobre"},
		{tag:"Halogênio", name: "Halogênios"},
		{tag:"Não_Metal", name: "Não Metais"},
	]

	return (
		<div className="page-periodicTable">
			<div className="wrapper">
				<div className="periodic-table">

					{elements.map((element: Element) => {
						return (
							<div className={`element ${element.family} c${element.position[0]} r${element.position[1]}`}>
								<input className="activate" type="radio" name="elements" />
								<input className="deactivate" type="radio" name="elements" />
								<div className="overlay"></div>
								<div className="square">
									<div className="model">
										{getOrbits(element.atomicWeight)}
									</div>
									<div className="atomic-number">{element.id}</div>
									<div className="label">
										<div className="symbol">{element.symbol}</div>
										<div className="name">{element.name}</div>
									</div>
									<div className="atomic-mass">{element.atomicMass}</div>
									<ul className="atomic-weight">
										{getatomic(element.atomicWeight)}
									</ul>
								</div>
							</div>
						)
					})}

					<div className="placeholder lanthanoid c3 r6">
							<div className="square">57-71</div>
					</div>
					<div className="placeholder actinoid c3 r7">
							<div className="square">89-103</div>
					</div>
					<div className="gap c3 r8"></div>
					<div className="key">
						{families.map( (family) => {
							return(
								<div className="row">
									<label className={family.tag} htmlFor={family.tag}>{family.name}</label>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}