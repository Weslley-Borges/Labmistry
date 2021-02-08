import React from 'react'
import elements from '../../utils/JSON/elements.json'
import './styles.scss'


export const PeriodicTable = () => {

	const families = [
		"Metais Alcalinos","Metais Alcalino-terrosos","Lantanóides","Actnóides","Metais de Transição","Metais de Pós-transição","Metalóides","Outros Metais","Gases Nobres",
	]
	return (
		<div className="page-periodicTable">
			<div className="wrapper">
				<div className="periodic-table">

				
					{/* A criação das células da tabela será +/- assim

						elements.forEach(element => {
							return (
								<div className="element other-nonmetal c1 r1">
									<input className="activate" type="radio" name="elements" />
									<input className="deactivate" type="radio" name="elements" />
										<div className="overlay"></div>
										<div className="square">
											<div className="model">
												<div className="orbital">
													<div className="electron"></div>
												</div>
											</div>
											<div className="atomic-number">1</div>
												<div className="label">
													<div className="symbol">H</div>
												</div>
											<div className="atomic-mass">1.008</div>
										<ul className="atomic-weight">
											<li>1</li>
										</ul>
									</div>'
								</div>
							)
						})
					*/}
		

					<div className="element other-nonmetal c1 r1">
						<input className="activate" type="radio" name="elements" />
						<input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
								<div className="model">
									<div className="orbital">
										<div className="electron"></div>
									</div>
								</div>
								<div className="atomic-number">1</div>
									<div className="label">
										<div className="symbol">H</div>
									</div>
								<div className="atomic-mass">1.008</div>
							<ul className="atomic-weight">
								<li>1</li>
							</ul>
						</div>
					</div>


					<div className="element noble-gas c18 r1">
						<input className="activate" type="radio" name="elements" />
						<input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">2</div>
									<div className="label">
											<div className="symbol">He</div>
									</div>
									<div className="atomic-mass">4.0026</div>
									<ul className="atomic-weight">
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element alkali-metal c1 r2"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">3</div>
									<div className="label">
											<div className="symbol">Li</div>
									</div>
									<div className="atomic-mass">6.94</div>
									<ul className="atomic-weight">
											<li>3</li>
									</ul>
							</div>
					</div>
					<div className="element alkaline-earth-metal c2 r2"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">4</div>
									<div className="label">
											<div className="symbol">Be</div>
									</div>
									<div className="atomic-mass">9.0122</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element metalloid c13 r2"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">5</div>
									<div className="label">
											<div className="symbol">B</div>
									</div>
									<div className="atomic-mass">10.81</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>3</li>
									</ul>
							</div>
					</div>
					<div className="element other-nonmetal c14 r2"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">6</div>
									<div className="label">
											<div className="symbol">C</div>
									</div>
									<div className="atomic-mass">12.011</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>4</li>
									</ul>
							</div>
					</div>
					<div className="element other-nonmetal c15 r2"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">7</div>
									<div className="label">
											<div className="symbol">N</div>
									</div>
									<div className="atomic-mass">14.007</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>5</li>
									</ul>
							</div>
					</div>
					<div className="element other-nonmetal c16 r2"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">8</div>
									<div className="label">
											<div className="symbol">O</div>
									</div>
									<div className="atomic-mass">15.999</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>6</li>
									</ul>
							</div>
					</div>
					<div className="element other-nonmetal c17 r2"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">9</div>
									<div className="label">
											<div className="symbol">F</div>
									</div>
									<div className="atomic-mass">18.998</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>7</li>
									</ul>
							</div>
					</div>
					<div className="element noble-gas c18 r2"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">10</div>
									<div className="label">
											<div className="symbol">Ne</div>
									</div>
									<div className="atomic-mass">20.18</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
									</ul>
							</div>
					</div>
					<div className="element alkali-metal c1 r3"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">11</div>
									<div className="label">
											<div className="symbol">Na</div>
									</div>
									<div className="atomic-mass">22.99</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>1</li>
									</ul>
							</div>
					</div>
					<div className="element alkaline-earth-metal c2 r3"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">12</div>
									<div className="label">
											<div className="symbol">Mg</div>
									</div>
									<div className="atomic-mass">24.305</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element post-transition-metal c13 r3"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">13</div>
									<div className="label">
											<div className="symbol">Al</div>
									</div>
									<div className="atomic-mass">26.982</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>3</li>
									</ul>
							</div>
					</div>
					<div className="element metalloid c14 r3"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">14</div>
									<div className="label">
											<div className="symbol">Si</div>
									</div>
									<div className="atomic-mass">28.085</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>4</li>
									</ul>
							</div>
					</div>
					<div className="element other-nonmetal c15 r3"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">15</div>
									<div className="label">
											<div className="symbol">P</div>
									</div>
									<div className="atomic-mass">30.974</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>5</li>
									</ul>
							</div>
					</div>
					<div className="element other-nonmetal c16 r3"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">16</div>
									<div className="label">
											<div className="symbol">S</div>
									</div>
									<div className="atomic-mass">32.06</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>6</li>
									</ul>
							</div>
					</div>
					<div className="element other-nonmetal c17 r3"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">17</div>
									<div className="label">
											<div className="symbol">Cl</div>
									</div>
									<div className="atomic-mass">35.45</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>7</li>
									</ul>
							</div>
					</div>
					<div className="element noble-gas c18 r3"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">18</div>
									<div className="label">
											<div className="symbol">Ar</div>
									</div>
									<div className="atomic-mass">39.948</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>8</li>
									</ul>
							</div>
					</div>
					<div className="element alkali-metal c1 r4"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">19</div>
									<div className="label">
											<div className="symbol">K</div>
									</div>
									<div className="atomic-mass">39.098</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>8</li>
											<li>1</li>
									</ul>
							</div>
					</div>
					<div className="element alkaline-earth-metal c2 r4"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">20</div>
									<div className="label">
											<div className="symbol">Ca</div>
									</div>
									<div className="atomic-mass">40.078</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c3 r4"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">21</div>
									<div className="label">
											<div className="symbol">Sc</div>
									</div>
									<div className="atomic-mass">44.956</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>9</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c4 r4"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">22</div>
									<div className="label">
											<div className="symbol">Ti</div>
									</div>
									<div className="atomic-mass">47.867</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>10</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c5 r4"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">23</div>
									<div className="label">
											<div className="symbol">V</div>
									</div>
									<div className="atomic-mass">50.942</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>11</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c6 r4"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">24</div>
									<div className="label">
											<div className="symbol">Cr</div>
									</div>
									<div className="atomic-mass">51.996</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>13</li>
											<li>1</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c7 r4"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">25</div>
									<div className="label">
											<div className="symbol">Mn</div>
									</div>
									<div className="atomic-mass">54.938</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>13</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c8 r4"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									
									<div className="atomic-number" draggable="true">26</div>
									<div className="label">
											<div className="symbol">Fe</div>
									</div>
									<div className="atomic-mass">55.845</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>14</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c9 r4"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">27</div>
									<div className="label">
											<div className="symbol">Co</div>
									</div>
									<div className="atomic-mass">58.933</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>15</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c10 r4"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">28</div>
									<div className="label">
											<div className="symbol">Ni</div>
									</div>
									<div className="atomic-mass">58.693</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>16</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c11 r4"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">29</div>
									<div className="label">
											<div className="symbol">Cu</div>
									</div>
									<div className="atomic-mass">63.546</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>1</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c12 r4"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">30</div>
									<div className="label">
											<div className="symbol">Zn</div>
									</div>
									<div className="atomic-mass">65.38</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element post-transition-metal c13 r4"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">31</div>
									<div className="label">
											<div className="symbol">Ga</div>
									</div>
									<div className="atomic-mass">69.723</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>3</li>
									</ul>
							</div>
					</div>
					<div className="element metalloid c14 r4"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">32</div>
									<div className="label">
											<div className="symbol">Ge</div>
									</div>
									<div className="atomic-mass">72.63</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>4</li>
									</ul>
							</div>
					</div>
					<div className="element metalloid c15 r4"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">33</div>
									<div className="label">
											<div className="symbol">As</div>
									</div>
									<div className="atomic-mass">74.922</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>5</li>
									</ul>
							</div>
					</div>
					<div className="element other-nonmetal c16 r4"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">34</div>
									<div className="label">
											<div className="symbol">Se</div>
									</div>
									<div className="atomic-mass">78.971</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>6</li>
									</ul>
							</div>
					</div>
					<div className="element other-nonmetal c17 r4"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">35</div>
									<div className="label">
											<div className="symbol">Br</div>
									</div>
									<div className="atomic-mass">79.904</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>7</li>
									</ul>
							</div>
					</div>
					<div className="element noble-gas c18 r4"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">36</div>
									<div className="label">
											<div className="symbol">Kr</div>
									</div>
									<div className="atomic-mass">83.798</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>8</li>
									</ul>
							</div>
					</div>
					<div className="element alkali-metal c1 r5"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">37</div>
									<div className="label">
											<div className="symbol">Rb</div>
									</div>
									<div className="atomic-mass">85.468</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>8</li>
											<li>1</li>
									</ul>
							</div>
					</div>
					<div className="element alkaline-earth-metal c2 r5"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">38</div>
									<div className="label">
											<div className="symbol">Sr</div>
									</div>
									<div className="atomic-mass">87.62</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c3 r5"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">39</div>
									<div className="label">
											<div className="symbol">Y</div>
									</div>
									<div className="atomic-mass">88.906</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>9</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c4 r5"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">40</div>
									<div className="label">
											<div className="symbol">Zr</div>
									</div>
									<div className="atomic-mass">91.224</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>10</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c5 r5"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">41</div>
									<div className="label">
											<div className="symbol">Nb</div>
									</div>
									<div className="atomic-mass">92.906</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>12</li>
											<li>1</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c6 r5"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">42</div>
									<div className="label">
											<div className="symbol">Mo</div>
									</div>
									<div className="atomic-mass">95.95</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>13</li>
											<li>1</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c7 r5"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">43</div>
									<div className="label">
											<div className="symbol">Tc</div>
									</div>
									<div className="atomic-mass">(98)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>13</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c8 r5"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">44</div>
									<div className="label">
											<div className="symbol">Ru</div>
									</div>
									<div className="atomic-mass">101.07</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>15</li>
											<li>1</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c9 r5"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">45</div>
									<div className="label">
											<div className="symbol">Rh</div>
									</div>
									<div className="atomic-mass">102.91</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>16</li>
											<li>1</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c10 r5"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">46</div>
									<div className="label">
											<div className="symbol">Pd</div>
									</div>
									<div className="atomic-mass">106.42</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>18</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c11 r5"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">47</div>
									<div className="label">
											<div className="symbol">Ag</div>
									</div>
									<div className="atomic-mass">107.87</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>18</li>
											<li>1</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c12 r5"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">48</div>
									<div className="label">
											<div className="symbol">Cd</div>
									</div>
									<div className="atomic-mass">112.41</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>18</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element post-transition-metal c13 r5"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">49</div>
									<div className="label">
											<div className="symbol">In</div>
									</div>
									<div className="atomic-mass">114.82</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>18</li>
											<li>3</li>
									</ul>
							</div>
					</div>
					<div className="element post-transition-metal c14 r5"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">50</div>
									<div className="label">
											<div className="symbol">Sn</div>
									</div>
									<div className="atomic-mass">204.38</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>18</li>
											<li>4</li>
									</ul>
							</div>
					</div>
					<div className="element metalloid c15 r5"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">51</div>
									<div className="label">
											<div className="symbol">Sb</div>
									</div>
									<div className="atomic-mass">121.76</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>18</li>
											<li>5</li>
									</ul>
							</div>
					</div>
					<div className="element metalloid c16 r5"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">52</div>
									<div className="label">
											<div className="symbol">Te</div>
									</div>
									<div className="atomic-mass">127.6</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>18</li>
											<li>6</li>
									</ul>
							</div>
					</div>
					<div className="element other-nonmetal c17 r5"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">53</div>
									<div className="label">
											<div className="symbol">I</div>
									</div>
									<div className="atomic-mass">126.9</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>18</li>
											<li>7</li>
									</ul>
							</div>
					</div>
					<div className="element noble-gas c18 r5"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">54</div>
									<div className="label">
											<div className="symbol">Xe</div>
									</div>
									<div className="atomic-mass">131.29</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>18</li>
											<li>8</li>
									</ul>
							</div>
					</div>
					<div className="element alkali-metal c1 r6"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">55</div>
									<div className="label">
											<div className="symbol">Cs</div>
									</div>
									<div className="atomic-mass">132.91</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>18</li>
											<li>8</li>
											<li>1</li>
									</ul>
							</div>
					</div>
					<div className="element alkaline-earth-metal c2 r6"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">56</div>
									<div className="label">
											<div className="symbol">Ba</div>
									</div>
									<div className="atomic-mass">137.33</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>18</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element lanthanoid c4 r9"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">57</div>
									<div className="label">
											<div className="symbol">La</div>
									</div>
									<div className="atomic-mass">138.91</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>18</li>
											<li>9</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element lanthanoid c5 r9"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">58</div>
									<div className="label">
											<div className="symbol">Ce</div>
									</div>
									<div className="atomic-mass">140.12</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>19</li>
											<li>9</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element lanthanoid c6 r9"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">59</div>
									<div className="label">
											<div className="symbol">Pr</div>
									</div>
									<div className="atomic-mass">140.91</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>21</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element lanthanoid c7 r9"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">60</div>
									<div className="label">
											<div className="symbol">Nd</div>
									</div>
									<div className="atomic-mass">144.24</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>22</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element lanthanoid c8 r9"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">61</div>
									<div className="label">
											<div className="symbol">Pm</div>
									</div>
									<div className="atomic-mass">144.24</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>23</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element lanthanoid c9 r9"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">62</div>
									<div className="label">
											<div className="symbol">Sm</div>
									</div>
									<div className="atomic-mass">150.36</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>24</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element lanthanoid c10 r9"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">63</div>
									<div className="label">
											<div className="symbol">Eu</div>
									</div>
									<div className="atomic-mass">151.96</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>25</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element lanthanoid c11 r9"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">64</div>
									<div className="label">
											<div className="symbol">Gd</div>
									</div>
									<div className="atomic-mass">157.25</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>25</li>
											<li>9</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element lanthanoid c12 r9"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">65</div>
									<div className="label">
											<div className="symbol">Tb</div>
									</div>
									<div className="atomic-mass">158.93</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>27</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element lanthanoid c13 r9"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">66</div>
									<div className="label">
											<div className="symbol">Dy</div>
									</div>
									<div className="atomic-mass">162.5</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>28</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element lanthanoid c14 r9"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">67</div>
									<div className="label">
											<div className="symbol">Ho</div>
									</div>
									<div className="atomic-mass">164.93</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>29</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element lanthanoid c15 r9"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">68</div>
									<div className="label">
											<div className="symbol">Er</div>
									</div>
									<div className="atomic-mass">167.26</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>30</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element lanthanoid c16 r9"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">69</div>
									<div className="label">
											<div className="symbol">Tm</div>
									</div>
									<div className="atomic-mass">168.93</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>31</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element lanthanoid c17 r9"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">70</div>
									<div className="label">
											<div className="symbol">Yb</div>
									</div>
									<div className="atomic-mass">173.05</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element lanthanoid c18 r9"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">71</div>
									<div className="label">
											<div className="symbol">Lu</div>
									</div>
									<div className="atomic-mass">174.97</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>9</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c4 r6"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">72</div>
									<div className="label">
											<div className="symbol">Hf</div>
									</div>
									<div className="atomic-mass">178.49</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>10</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c5 r6"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">73</div>
									<div className="label">
											<div className="symbol">Ta</div>
									</div>
									<div className="atomic-mass">180.95</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>11</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c6 r6"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">74</div>
									<div className="label">
											<div className="symbol">W</div>
									</div>
									<div className="atomic-mass">183.84</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>12</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c7 r6"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">75</div>
									<div className="label">
											<div className="symbol">Re</div>
									</div>
									<div className="atomic-mass">186.21</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>13</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c8 r6"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">76</div>
									<div className="label">
											<div className="symbol">Os</div>
									</div>
									<div className="atomic-mass">190.23</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>14</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c9 r6"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">77</div>
									<div className="label">
											<div className="symbol">Ir</div>
									</div>
									<div className="atomic-mass">192.22</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>15</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c10 r6"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">78</div>
									<div className="label">
											<div className="symbol">Pt</div>
									</div>
									<div className="atomic-mass">195.08</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>17</li>
											<li>1</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c11 r6"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">79</div>
									<div className="label">
											<div className="symbol">Au</div>
									</div>
									<div className="atomic-mass">196.97</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>18</li>
											<li>1</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c12 r6"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">80</div>
									<div className="label">
											<div className="symbol">Hg</div>
									</div>
									<div className="atomic-mass">200.59</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>18</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element post-transition-metal c13 r6"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">81</div>
									<div className="label">
											<div className="symbol">Tl</div>
									</div>
									<div className="atomic-mass">204.38</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>18</li>
											<li>3</li>
									</ul>
							</div>
					</div>
					<div className="element post-transition-metal c14 r6"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">82</div>
									<div className="label">
											<div className="symbol">Pb</div>
									</div>
									<div className="atomic-mass">207.2</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>18</li>
											<li>4</li>
									</ul>
							</div>
					</div>
					<div className="element post-transition-metal c15 r6"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">83</div>
									<div className="label">
											<div className="symbol">Bi</div>
									</div>
									<div className="atomic-mass">208.98</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>18</li>
											<li>5</li>
									</ul>
							</div>
					</div>
					<div className="element post-transition-metal c16 r6"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">84</div>
									<div className="label">
											<div className="symbol">Po</div>
									</div>
									<div className="atomic-mass">(209)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>18</li>
											<li>6</li>
									</ul>
							</div>
					</div>
					<div className="element metalloid c17 r6"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">85</div>
									<div className="label">
											<div className="symbol">At</div>
									</div>
									<div className="atomic-mass">(210)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>18</li>
											<li>7</li>
									</ul>
							</div>
					</div>
					<div className="element noble-gas c18 r6"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">86</div>
									<div className="label">
											<div className="symbol">Rn</div>
									</div>
									<div className="atomic-mass">(222)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>18</li>
											<li>8</li>
									</ul>
							</div>
					</div>
					<div className="element alkali-metal c1 r7"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">87</div>
									<div className="label">
											<div className="symbol">Fr</div>
									</div>
									<div className="atomic-mass">(223)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>18</li>
											<li>8</li>
											<li>1</li>
									</ul>
							</div>
					</div>
					<div className="element alkaline-earth-metal c2 r7"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">88</div>
									<div className="label">
											<div className="symbol">Ra</div>
									</div>
									<div className="atomic-mass">(226)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>18</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element actinoid c4 r10"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">89</div>
									<div className="label">
											<div className="symbol">Ac</div>
									</div>
									<div className="atomic-mass">(227)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>18</li>
											<li>9</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element actinoid c5 r10"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">90</div>
									<div className="label">
											<div className="symbol">Th</div>
									</div>
									<div className="atomic-mass">232.04</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>18</li>
											<li>10</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element actinoid c6 r10"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">91</div>
									<div className="label">
											<div className="symbol">Pa</div>
									</div>
									<div className="atomic-mass">231.04</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>20</li>
											<li>9</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element actinoid c7 r10"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">92</div>
									<div className="label">
											<div className="symbol">U</div>
									</div>
									<div className="atomic-mass">238.03</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>21</li>
											<li>9</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element actinoid c8 r10"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">93</div>
									<div className="label">
											<div className="symbol">Np</div>
									</div>
									<div className="atomic-mass">(237)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>22</li>
											<li>9</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element actinoid c9 r10"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">94</div>
									<div className="label">
											<div className="symbol">Pu</div>
									</div>
									<div className="atomic-mass">(244)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>24</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element actinoid c10 r10"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">95</div>
									<div className="label">
											<div className="symbol">Am</div>
									</div>
									<div className="atomic-mass">(243)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>25</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element actinoid c11 r10"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">96</div>
									<div className="label">
											<div className="symbol">Cm</div>
									</div>
									<div className="atomic-mass">(247)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>25</li>
											<li>9</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element actinoid c12 r10"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">97</div>
									<div className="label">
											<div className="symbol">Bk</div>
									</div>
									<div className="atomic-mass">(247)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>27</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element actinoid c13 r10"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">98</div>
									<div className="label">
											<div className="symbol">Cf</div>
									</div>
									<div className="atomic-mass">(251)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>28</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element actinoid c14 r10"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">99</div>
									<div className="label">
											<div className="symbol">Es</div>
									</div>
									<div className="atomic-mass">(252)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>29</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element actinoid c15 r10"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">100</div>
									<div className="label">
											<div className="symbol">Fm</div>
									</div>
									<div className="atomic-mass">(257)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>30</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element actinoid c16 r10"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">101</div>
									<div className="label">
											<div className="symbol">Md</div>
									</div>
									<div className="atomic-mass">(258)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>31</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element actinoid c17 r10"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">102</div>
									<div className="label">
											<div className="symbol">No</div>
									</div>
									<div className="atomic-mass">(259)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>32</li>
											<li>8</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element actinoid c18 r10"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">103</div>
									<div className="label">
											<div className="symbol">Lr</div>
									</div>
									<div className="atomic-mass">(266)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>32</li>
											<li>8</li>
											<li>3</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c4 r7"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">104</div>
									<div className="label">
											<div className="symbol">Rf</div>
									</div>
									<div className="atomic-mass">(267)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>32</li>
											<li>10</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c5 r7"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">105</div>
									<div className="label">
											<div className="symbol">Db</div>
									</div>
									<div className="atomic-mass">(268)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>32</li>
											<li>11</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c6 r7"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">106</div>
									<div className="label">
											<div className="symbol">Sg</div>
									</div>
									<div className="atomic-mass">(269)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>32</li>
											<li>12</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c7 r7"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">107</div>
									<div className="label">
											<div className="symbol">Bh</div>
									</div>
									<div className="atomic-mass">(270)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>32</li>
											<li>13</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c8 r7"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">108</div>
									<div className="label">
											<div className="symbol">Hs</div>
									</div>
									<div className="atomic-mass">(277)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>32</li>
											<li>14</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element unknown c9 r7"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">109</div>
									<div className="label">
											<div className="symbol">Mt</div>
									</div>
									<div className="atomic-mass">(278)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>32</li>
											<li>15</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element unknown c10 r7"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">110</div>
									<div className="label">
											<div className="symbol">Ds</div>
									</div>
									<div className="atomic-mass">(281)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>32</li>
											<li>17</li>
											<li>1</li>
									</ul>
							</div>
					</div>
					<div className="element unknown c11 r7"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">111</div>
									<div className="label">
											<div className="symbol">Rg</div>
									</div>
									<div className="atomic-mass">(282)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>32</li>
											<li>17</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element transition-metal c12 r7"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">112</div>
									<div className="label">
											<div className="symbol">Cn</div>
									</div>
									<div className="atomic-mass">(282)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>32</li>
											<li>18</li>
											<li>2</li>
									</ul>
							</div>
					</div>
					<div className="element unknown c13 r7"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">113</div>
									<div className="label">
											<div className="symbol">Nh</div>
									</div>
									<div className="atomic-mass">(286)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>32</li>
											<li>18</li>
											<li>3</li>
									</ul>
							</div>
					</div>
					<div className="element post-transition-metal c14 r7"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">114</div>
									<div className="label">
											<div className="symbol">Fl</div>
									</div>
									<div className="atomic-mass">(289)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>32</li>
											<li>18</li>
											<li>4</li>
									</ul>
							</div>
					</div>
					<div className="element unknown c15 r7"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">115</div>
									<div className="label">
											<div className="symbol">Mc</div>
									</div>
									<div className="atomic-mass">(290)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>32</li>
											<li>18</li>
											<li>5</li>
									</ul>
							</div>
					</div>
					<div className="element unknown c16 r7"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">116</div>
									<div className="label">
											<div className="symbol">Lv</div>
									</div>
									<div className="atomic-mass">(293)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>32</li>
											<li>18</li>
											<li>6</li>
									</ul>
							</div>
					</div>
					<div className="element unknown c17 r7"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">117</div>
									<div className="label">
											<div className="symbol">Ts</div>
									</div>
									<div className="atomic-mass">(294)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>32</li>
											<li>18</li>
											<li>7</li>
									</ul>
							</div>
					</div>
					<div className="element unknown c18 r7"><input className="activate" type="radio" name="elements" /><input className="deactivate" type="radio" name="elements" />
							<div className="overlay"></div>
							<div className="square">
									<div className="model">
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
											<div className="orbital">
													<div className="electron"></div>
													<div className="electron"></div>
											</div>
									</div>
									<div className="atomic-number">118</div>
									<div className="label">
											<div className="symbol">Og</div>
									</div>
									<div className="atomic-mass">(294)</div>
									<ul className="atomic-weight">
											<li>2</li>
											<li>8</li>
											<li>18</li>
											<li>32</li>
											<li>32</li>
											<li>18</li>
											<li>8</li>
									</ul>
							</div>
					</div>
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
									<label className={family} htmlFor={family}>{family}</label>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}