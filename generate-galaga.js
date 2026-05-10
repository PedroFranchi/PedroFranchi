import { GalagaRenderer } from 'pacman-contribution-graph';
import fs from 'fs';

if (!fs.existsSync('dist')) fs.mkdirSync('dist');

const renderer = new GalagaRenderer({
  username: 'PedroFranchi',
  platform: 'github',
  gameTheme: 'github-dark',
  svgCallback: (svg) => {
    fs.writeFileSync('dist/galaga.svg', svg);
    console.log('SVG gerado com sucesso!');
  },
  gameOverCallback: () => console.log('Game over!'),
  pointsIncreasedCallback: (points) => console.log('Score:', points)
});

renderer.start();