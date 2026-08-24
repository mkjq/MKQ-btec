const fs = require('fs');
const path = require('path');
const map = require('./url_map.json');

const dataDir = path.join(__dirname, 'src', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));

let total = 0;
for (const file of files) {
  let content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  let matched = 0;
  
  // Sort URLs by length descending to avoid partial replacements if any overlaps exist
  const urls = Object.keys(map).sort((a, b) => b.length - a.length);
  
  for (const url of urls) {
    if (content.includes(url)) {
      content = content.split(url).join(map[url]);
      matched++;
    }
  }

  if (matched > 0) {
    fs.writeFileSync(path.join(dataDir, file), content, 'utf8');
    console.log(`Updated ${file}: replaced ${matched} unique URLs.`);
    total += matched;
  }
}
console.log(`Total replacements: ${total}`);
