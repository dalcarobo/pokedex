import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Card from '../components/Card/card.component';
import { Container } from '../styles/container.styled';

const getPokemonListQuery = `
query GetPokemonList($offset: Int!) {
  pokemon_v2_pokemon(limit: 21, offset: $offset, where: {is_default: {_eq: true}}) {
    name
    id: pokemon_species_id
    is_default
    types: pokemon_v2_pokemontypes {
      type: pokemon_v2_type {
        name
      }
    }
    stats_: pokemon_v2_pokemonstats_aggregate {
      nodes {
        base_stat
        stats: pokemon_v2_stat {
          name
        }
      }
    }
    specy: pokemon_v2_pokemonspecy {
      is_legendary
      is_mythical
      is_baby
    }
  }
}`;

const Pokedex = () => {
	const [pokemonList, setPokemonList] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const [offset, setOffset] = useState(0);

	const getPokemonList = async () => {
		await fetch('https://beta.pokeapi.co/graphql/v1beta', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				query: getPokemonListQuery,
				variables: { offset },
			}),
		})
			.then((result) => result.json())
			.then(({ data }) => {
				setPokemonList([...pokemonList, ...data.pokemon_v2_pokemon]);
			});
		setOffset(Number(offset) + 21);
	};

	useEffect(() => {
		getPokemonList();
	}, []);

	return (
		<InfiniteScroll
			pageStart={0}
			hasMore={hasMore}
			loadMore={getPokemonList}
			loader={null}
			initialLoad={false}
			threshold={100}
		>
			<Container>
				{pokemonList &&
					pokemonList.map((pokemon, index) => (
						<Card pokemon={pokemon} key={index} />
					))}
			</Container>
		</InfiniteScroll>
	);
};

export default Pokedex;
