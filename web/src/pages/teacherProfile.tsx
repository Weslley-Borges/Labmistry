import React from 'react'
import teacherPlaceholder from '../assets/images/teacherPlaceholder.svg'
import '../assets/styles/pages/profile.scss'

/* 
  src/pages/profileTeacher.tsx, 11/18/2020
	Author: Weslley Borges dos Santos
  Este arquivo é o frontend do perfil de um professor
  na visão dele.
*/

export default function TeacherProfile() {
	return (
    <div className="page-teacheProfile">

      {/*Cabeçalho do perfil*/}
      <div className="profile-header">
        <div className="profile-img">
          <img src={teacherPlaceholder} width="200" alt="Juliana Alves"/>
        </div>
        <div className="profile-nav-info">
          <h3 className="userName">Julia Alves</h3>
          <div className="address">

          </div>
        </div>
      </div>
      {/*A fazer...*/}
      
    </div>
  )
}