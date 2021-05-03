import React, { useRef, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { CardStyled, StatsBar } from '../../styles/card.styled';

const Card = ({ cardID, pokemon: { types, name, id, stats_, specy } }) => {
	const [expanded, setExpanded] = useState(false);
	const _el = useRef();

	const pokemonTypes = types.map((type) => {
		if (type instanceof Array) return type.map((t) => t);
		else return type;
	});

	const pokemonStats = stats_.nodes.map((stat) => ({
		key: stat.stats.name,
		value: stat.base_stat,
	}));

	const handleExpanded = () => {
		setExpanded(!expanded);
	};

	return (
		<Tilt
			glareEnable={false}
			key={cardID}
			perspective={1000}
			style={{
				transformStyle: 'preserve-3d',
				margin: 20,
			}}
		>
			<CardStyled
				ref={_el}
				types={pokemonTypes}
				specy={specy}
				expanded={expanded}
				onClick={handleExpanded}
			>
				<div className='content'>
					<h2>{id}</h2>
					<h3>{name}</h3>
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
					/>
				</div>
				<div className='content_back'>
					<h3>Attributes</h3>
					{pokemonStats.map((stats, index) => (
						<>
							<StatsBar stat={stats.value} key={index}>
								<h4>
									{stats.key}: {stats.value}
								</h4>
							</StatsBar>
						</>
					))}
				</div>
			</CardStyled>
		</Tilt>
	);
};

export default Card;
