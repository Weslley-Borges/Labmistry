import React from 'react'
import { Link } from 'react-router-dom'

import LogoImg from '../../assets/images/logo.svg'
import BackIcon from '../../assets/images/icons/back.svg'

import './style.scss'

/* 
	src/components/pageHeader/index.tsx, 11/18/2020
	Author: Weslley Borges dos Santos
	Este arquivo é o HTML do componente pageHeader
*/

interface  PageHeaderProps{link: string; title?: string; description?: string}
const PageHeader: React.FC<PageHeaderProps> = (props) =>{
  return(
    <header className="page-header" id='pageHeader'>
      <div className="top-bar-container">
        <Link to={props.link}><img src={BackIcon} alt="Voltar"/></Link> 
        <img src={LogoImg} alt="Labmistry"/>
      </div>
      <div className="header-content"> 
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}
        {props.children}
      </div>
    </header>
)}
export default PageHeader