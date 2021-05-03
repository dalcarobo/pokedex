import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import pokedexLogo from '../assets/logo.png';
import Card from '../components/Card/card.component';
import { Container } from '../styles/container.styled';

const getPokemonListQuery = `
query GetPokemonList($offset: Int!) {
  pokemon_v2_pokemon(limit: 20, offset: $offset, where: {is_default: {_eq: true}}) {
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
	const [loading, setLoading] = useState(true);
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
				setLoading(false);
			});
		setOffset(Number(offset) + 20);
	};

	useEffect(() => {
		getPokemonList();
	}, []);

	return (
		<>
			<div
				style={{
					display: 'flex',
					color: 'white',
					alignItems: 'baseline',
					width: '99vw',
					justifyContent: 'center',
				}}
			>
				<img
					src={pokedexLogo}
					style={{
						width: 290,
						marginTop: 20,
					}}
				/>
				<span style={{ fontSize: 12 }}>v1.0.0</span>
			</div>
			{!loading && (
				<InfiniteScroll
					pageStart={0}
					hasMore={hasMore}
					loadMore={getPokemonList}
					loader={null}
					initialLoad={false}
					threshold={300}
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Container>
						{pokemonList &&
							pokemonList.map((pokemon, index) => (
								<Card pokemon={pokemon} key={index} cardID={index} />
							))}
					</Container>
				</InfiniteScroll>
			)}

			{loading && (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Container>
						{[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
							<div
								style={{
									height: 400,
									width: 280,
									background: '#292942',
									borderRadius: '15px',
									margin: 20,
								}}
								key={item}
							></div>
						))}
					</Container>
				</div>
			)}
			<footer>
				<p>
					Developed by{' '}
					<a href='https://github.com/dalcarobo' target='_blank'>
						Gabriel Dal Carobo
					</a>
				</p>
			</footer>
		</>
	);
};

export default Pokedex;
