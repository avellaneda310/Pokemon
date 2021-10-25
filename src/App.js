import React from 'react';
import Pokemones from './components/Pokemones';
import Poke from './components/Poke'

function App() {
  return (
    <>

      <div className="row mt-5 justify-content-center">
      <img className="pokeapi"  src="/pokeApi.webp" alt="" />
        <Pokemones />
        <Poke />
      </div>
    </>
  );

  }




export default App;
