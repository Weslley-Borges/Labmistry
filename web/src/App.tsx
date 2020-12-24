import React from 'react';
import "./assets/styles/global.scss"
import Routes from './routes';

/* 
	18/11/2020 - Author: Weslley Borges dos Santos
	Recebe a rota a ser renderizada
*/

class App extends React.Component{
  render() {
    return (
      <Routes/>
    )
  }
}
export default App;