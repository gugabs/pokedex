import { Link } from 'react-router-dom';

import WhiteBox from './WhiteBox';

export default function PokemonButton(props) {
    const { pokemon } = props;
    const id = pokemon.id;
    const imgSrc = pokemon.image;

    return (
        <Link to={`/pokemon/${id}`} className="pokemon-button">
            <WhiteBox>
                <img src={imgSrc} alt="Pokemon" width="65%" />
                <span className="name">{pokemon.name}</span>
                <span className="id">#{pokemon.number}</span>
            </WhiteBox>
        </Link>
    );
}
