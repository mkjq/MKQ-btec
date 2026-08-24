const fs = require('fs');
const path = require('path');

const reportPath = path.join(__dirname, 'downloaded_resources', 'full_download_report.json');
let report;
try {
  report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
} catch (e) {
  console.log("Error reading report");
  process.exit(1);
}

const nameToUrl = new Map();
const list = report.successes || [];
for (const item of list) {
  if (item.name && item.path) {
    const match = item.path.match(/downloaded_resources[\\/](.+)$/);
    if (match) {
      const relPath = match[1].replace(/\\/g, '/');
      const encodedPath = encodeURI(relPath).replace(/#/g, '%23').replace(/\?/g, '%3F');
      nameToUrl.set(item.name.trim(), `/resources/${encodedPath}`);
    }
  }
}

const dataDir = path.join(__dirname, 'src', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts') || f.endsWith('.tsx'));

let totalReplaced = 0;

for (const file of files) {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let replacedCount = 0;

  // regex to match f("NAME", "URL", "TYPE") or f("NAME", "URL")
  const regex = /f\(\s*(["'])(.+?)\1\s*,\s*(["'])(https?:\/\/(?:drive|docs)\.google\.com\/.*?)\3/g;
  
  content = content.replace(regex, (match, q1, name, q2, url) => {
    const trimmedName = name.trim();
    if (nameToUrl.has(trimmedName)) {
      replacedCount++;
      return `f(${q1}${name}${q1}, ${q2}${nameToUrl.get(trimmedName)}${q2}`;
    }
    return match;
  });

  const regexObj = /name:\s*(["'])(.+?)\1\s*,\s*url:\s*(["'])(https?:\/\/(?:drive|docs)\.google\.com\/.*?)\3/g;
  content = content.replace(regexObj, (match, q1, name, q2, url) => {
    const trimmedName = name.trim();
    if (nameToUrl.has(trimmedName)) {
      replacedCount++;
      return `name: ${q1}${name}${q1}, url: ${q2}${nameToUrl.get(trimmedName)}${q2}`;
    }
    return match;
  });

  if (replacedCount > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Replaced ${replacedCount} links in ${file}`);
    totalReplaced += replacedCount;
  }
}
console.log(`Total replaced: ${totalReplaced}`);
