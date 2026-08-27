const fs = require('node:fs');
const path = require('node:path');

const robotsPath = path.join(__dirname, '..', 'out', 'robots.txt');

if (!fs.existsSync(robotsPath)) {
  console.warn('robots.txt not found — skipping fix');
  process.exit(0);
}

const before = fs.readFileSync(robotsPath, 'utf8');
const after = before.replace(/# Host\nHost:.*\n\n?/g, '');

if (before === after) {
  console.log('robots.txt: no Host directive to remove');
  process.exit(0);
}

fs.writeFileSync(robotsPath, after);
console.log('robots.txt: removed deprecated Host directive');
