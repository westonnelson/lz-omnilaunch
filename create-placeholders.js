const fs = require('fs');
const path = require('path');

const images = [
  'btc.png', 'eth.png', 'sol.png', 'avax.png', 'ton.png', 'zro.png',
  'omnilaunch-icon.png', 'layerzero-icon.png',
  'background.png', 'favicon.ico'
];

images.forEach(image => {
  const filePath = path.join(__dirname, 'public', image);
  fs.writeFileSync(filePath, `Placeholder for ${image}`);
});

console.log('Placeholder files created successfully.');