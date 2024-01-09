import React from 'react';
import './App.css';
import {Rating} from "./components/Reting/Rating";
import {Accordion} from "./components/Accordion/Accodion";

function App() {
  return (
    <div className="App">
     <AppTitle/>
     <Rating/>
     <Accordion/>
     <Rating/>

    </div>
  );
}

function AppTitle (){
    return <>This si APP component</>
}







export default App;
