import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getPokemons() );
    }, [])
    

    return (
        <>
            <h1>Pokemon</h1>
            <hr />

            <ul>
                <li>H</li>
                <li>H</li>
                <li>H</li>
            </ul>
        </>
    )
}


