import React, { InputHTMLAttributes } from 'react'
import './style.scss'


/* MENSAGEM
Weslley do futuro, vê esse troço aqui:
https://github.com/IagoDuque/iGcodes/tree/main/Cards-animates
*/
export const Sidebar = () => {
  return(
	<div className="sidebar"> 
    <p>logo</p>
    <div className="divMenu">
      <a href="">Perfil</a>
      <a href="">Fórum</a>
      <a href="">Vídeos</a>
      <a href="">Jogos</a>
      <a href="">Bate-papo</a>
    </div>
    <div className="divButtons">
      <span>Entrar</span>
      <span>Criar conta</span>
    </div>
	</div>
)}