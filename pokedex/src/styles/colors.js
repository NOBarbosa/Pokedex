// SETUP COLORS
const PRIMARY = {
  grass: '#e2f9e1',
  fire: '#fbe3df',
  water: '#e0f1fd',
  fairy: '#ffc0cbdc',
  normal: '#f4f4f4',
  bug: '#f6d6a7',
  poison: '#e0a7f6',
  electric: '#ffffa1',
  ghost: '#f7f7f7',
  rock: '#945151',
  ice: '#26dbeb',
  fighting: '#eb6826',
  psychic: '#db4dcf',
  ground: '#b5835c',
  dragon: '#3218d9',
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
};

const palette = {
  ...COMMON,
};

export default palette;
