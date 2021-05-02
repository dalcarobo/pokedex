import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


:root {
  --color-grass: #78c850b8;
  --color-poison: #A040A0b8;
  --color-fire: #F08030b8;
  --color-water: #6890F0b8;
  --color-ghost: #705898b8;
  --color-flying: #A890F0b8;
  --color-normal: #A8A878b8;
  --color-electric: #F8D030b8;
  --color-ice: #98D8D8b8;
  --color-ground: #E0C068b8;
  --color-fighting: #C03028b8;
  --color-psychic: #F85888b8;
  --color-dark: #705848b8;
  --color-rock: #B8A038b8;
  --color-bug: #A8B820b8;
  --color-steel: #B8B8D0b8;
  --color-dragon: #7038F8b8;
  --color-fairy: #FFAEC9b8;
}

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #161623;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  
  }
`;
