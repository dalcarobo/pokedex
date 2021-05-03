import styled from 'styled-components';
import foil from '../assets/foil.gif';
import shimmer from '../assets/shimmer.gif';

export const CardStyled = styled.div`
	position: relative;
	width: 280px;
	height: 400px;
	margin: 0;
	box-shadow: 20px 20px 50px rgb(0, 0, 0, 0.5);
	border-radius: 15px;

	background: ${(props) => {
		return `linear-gradient(to bottom right, var(--color-${
			props.types[0].type.name
		}) 50%, var(--color-${
			props.types[1]?.type?.name ?? props.types[0].type.name
		}) 50%)`;
	}};
	background-blend-mode: normal;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	border-left: 1px solid rgba(255, 255, 255, 0.5);
	cursor: pointer;
	z-index: 1;
	transition: all 0.5s ease;
	transform: ${(props) => (props.expanded ? 'rotateY(180deg)' : '')};
	transform-style: preserve-3d;
	box-sizing: border-box;

	border: ${(props) => {
		if (props.specy.is_baby === true) {
			return '5px solid pink';
		}
		if (props.specy.is_legendary === true) {
			return '5px solid #ada328';
		}
		if (props.specy.is_mythical === true) {
			return '5px solid #A6A6A6';
		}
	}};

	&:after {
		${(props) => {
			if (
				props.specy.is_baby === true ||
				props.specy.is_legendary === true ||
				props.specy.is_mythical === true
			) {
				return `
          position: absolute;
        content: '';
        opacity: 0.2;
        border-radius: 15px;
        top: 0;
        left: 0;
        width: 275px;
        height: 395px;
        background: url('${shimmer}');
        background-size: cover;
        box-sizing: border-box;`;
			}
		}}
	}

	&:before {
		${(props) => {
			if (
				props.specy.is_baby === true ||
				props.specy.is_legendary === true ||
				props.specy.is_mythical === true
			) {
				return `
		content: '';
		opacity: 0.1;
		border-radius: 15px;
		position: absolute;
		top: 0;
		left: 0;
		width: 275px;
		height: 395px;
		background: url('${foil}');
		box-sizing: border-box;`;
			}
		}}
	}

	.content {
		padding: 20px;
		text-align: center;
		display: ${(props) => (props.expanded ? 'none' : 'block')};
		transition: all 1s ease;
	}

	.content_back {
		padding: 20px;
		text-align: center;
		position: absolute;
		transform: rotateY(180deg);
		display: ${(props) => (props.expanded ? 'block' : 'none')};
		transition: all 1s ease;
	}

	h2 {
		position: absolute;
		top: -140px;
		right: 5px;
		font-size: 8em;
		color: rgba(255, 255, 255, 0.09);
		pointer-events: none;
	}

	h3 {
		font-size: 1.8em;
		color: #fff;
		z-index: 1;
		transform: translateZ(30px);
		line-height: 0px;
		text-transform: capitalize;
	}

	img {
		width: 180px;
		transform: translateZ(40px);
	}

	p {
		font-size: 1em;
		color: #fff;
		font-weight: 300;
		transform: translateZ(30px);
	}

	a {
		position: relative;
		display: inline-block;
		padding: 8px 20px;
		margin-top: 15px;
		background: #fff;
		color: #000;
		text-decoration: none;
		border-radius: 4px;
		font-weight: 500;
		box-shadow: 0 5px 15px rgb(0, 0, 0, 0.2);
		transform: translateZ(30px);
	}
`;

export const StatsBar = styled.div`
	height: 25px;
	width: 255px;
	margin-top: 20px;
	text-align: left;
	border-radius: 4px;
	background: ${(props) => {
		const total = (props.stat * 100) / 255;
		return `linear-gradient(to right, #348721 ${total.toFixed(
			1
		)}%, #dedede 0%)`;
	}};

	h4 {
		padding: 2px 0 0 8px;
	}
`;
