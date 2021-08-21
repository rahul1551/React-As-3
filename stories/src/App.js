import React from 'react';
import './App.css';
import Cards from './Component/Cards';
import Filter from './Component/Filter';
import Topbar from './Component/Topbar';
import { CardData } from './utils/mockdata'




function App() {

  const cardStyle = {
    display: "flex",
    width: "65%",
    margin: "0 auto",
    paddingBottom:"20.313px",
    flexWrap: "wrap"
  }


  return (
    <>
      <Topbar />
      <Filter />
      <div style={cardStyle}>
      {CardData.map((item, index) => (
        <Cards {...item} />
      ))}

    </div>




    </>
  )
}


export default App;
