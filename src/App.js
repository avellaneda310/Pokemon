import React from 'react';
import Pokemones from './components/Pokemones';
//import Poke from './components/Poke'
import Buscador from './components/Buscador'

function App() {
  return (
    <>

      <div className="row mt-5 justify-content-center">
        <Buscador />
        <Pokemones />

      </div>
    </>
  );

}




export default App;
