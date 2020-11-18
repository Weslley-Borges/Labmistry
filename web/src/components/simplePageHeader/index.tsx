import React from 'react'
import { Link } from 'react-router-dom'

import LogoImg from '../../assets/images/logo.svg'
import BackIcon from '../../assets/images/icons/back.svg'

import './style.scss'

{/* 
	src/components/simplePageHeader/index.tsx, 11/18/2020
	Author: Weslley Borges dos Santos
  Este arquivo é o HTML do componente simplePageHeader (uma versão
  simplificada do pageHeader)
*/}

interface  PageHeaderProps{link: string;}
const SimplePageHeader: React.FC<PageHeaderProps> = (props) =>{
  return(
    <header className="simple-page-header">
      <div className="top-bar-container">
        <Link to={props.link}><img src={BackIcon} alt="Voltar"/></Link> 
        <img src={LogoImg} alt="Labmistry"/> 
      </div>
		</header>
)}
export default SimplePageHeader