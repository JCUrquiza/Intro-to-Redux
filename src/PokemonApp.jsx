import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';
import { useState } from 'react';

export const PokemonApp = () => {
    
    const dispatch = useDispatch();
    // Acceder al store de redux:
    const { isLoading, pokemons, page } = useSelector(state => state.pokemons);

    useEffect(() => {
        dispatch( getPokemons() );
    }, []);

    return (
        <>
            <h1>Pokemon</h1>
            <hr />
            <span>Loading: { isLoading ? 'True' : 'False' }</span>

            <ul>
                {
                    pokemons.map( ({ name }) => (
                        <li key={name} >{ name }</li>
                    ))
                }
            </ul>

            <button
                disabled={ isLoading }
                onClick={ () => dispatch( getPokemons( page ) ) } >
                Next
            </button>

        </>
    )
}


