import React from 'react';
import useGet from '../utils/useHttp';
import Poke from './Poke';
import Loading from './Loading/Loading';

const Pokemones = () => {
    const [pokemones, cargando] = useGet({ url: "https://pokeapi.co/api/v2/pokemon" });
    return (

        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center text-info">Personajes:</h1>
                    </div>
                    {cargando ? (
                        <Loading />
                    ) : (
                        pokemones.map(pokemon => (
                            <Poke key={pokemon.id} {...pokemon} />
                        )
                        )
                    )
                    }
                </div>
            </div>
        </>
    );
}

export default Pokemones;
