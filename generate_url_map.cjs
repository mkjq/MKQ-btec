const fs = require('fs');
const path = require('path');

const srcDir = path.resolve('m:/ma-btec-all.github.io-main/ma-btec-all.github.io-main.bak/src');
const baseDir = path.resolve('m:/ma-btec-all.github.io-main/ma-btec-all.github.io-main.bak/public/resources');

function sanitizeFilename(name) {
  return name.replace(/[\\/:*?"<>|]/g, '_').replace(/\s+/g, ' ').trim();
}

function extractDriveId(url) {
  if (!url) return null;
  const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch) return { id: fileMatch[1], type: 'drive_file' };
  
  const docMatch = url.match(/\/document\/d\/([a-zA-Z0-9_-]+)/);
  if (docMatch) return { id: docMatch[1], type: 'google_doc' };
  
  const presMatch = url.match(/\/presentation\/d\/([a-zA-Z0-9_-]+)/);
  if (presMatch) return { id: presMatch[1], type: 'google_slide' };
  
  const sheetMatch = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/);
  if (sheetMatch) return { id: sheetMatch[1], type: 'google_sheet' };

  const folderMatch = url.match(/\/drive\/folders\/([a-zA-Z0-9_-]+)/);
  if (folderMatch) return { id: folderMatch[1], type: 'drive_folder' };

  const idMatch = url.match(/id=([a-zA-Z0-9_-]+)/);
  if (idMatch) return { id: idMatch[1], type: 'drive_file' };

  return null;
}

function getExtension(info, explicitType) {
  if (info.type === 'google_doc') return '.docx';
  if (info.type === 'google_slide') return '.pptx';
  if (info.type === 'google_sheet') return '.xlsx';
  if (explicitType === 'pdf') return '.pdf';
  if (explicitType === 'doc') return '.docx';
  if (explicitType === 'presentation') return '.pptx';
  return '.pdf';
}

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (/\.(ts|tsx|js|jsx)$/.test(file)) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

function extractAllResourcesExhaustive() {
  const allFiles = getAllFiles(srcDir);
  const items = [];

  allFiles.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    const relFile = path.relative(srcDir, filePath);
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('drive.google.com') || line.includes('docs.google.com')) {
        const urlMatch = line.match(/https?:\/\/(?:drive|docs)\.google\.com\/[^\s"'`\)]+/);
        if (!urlMatch) continue;
        const url = urlMatch[0].replace(/[,\);]+$/, '');

        let name = '';
        const nameMatch = line.match(/name:\s*["'`](.*?)["'`]/) || line.match(/title:\s*["'`](.*?)["'`]/) || line.match(/label:\s*["'`](.*?)["'`]/);
        if (nameMatch) {
          name = nameMatch[1];
        } else {
          for (let j = Math.max(0, i - 3); j < i; j++) {
            const prevName = lines[j].match(/name:\s*["'`](.*?)["'`]/) || lines[j].match(/title:\s*["'`](.*?)["'`]/) || lines[j].match(/label:\s*["'`](.*?)["'`]/);
            if (prevName) {
              name = prevName[1];
              break;
            }
          }
        }

        let type = '';
        const typeMatch = line.match(/type:\s*["'`](.*?)["'`]/);
        if (typeMatch) type = typeMatch[1];

        let folder = 'General';
        if (relFile.includes('engineering')) folder = 'Engineering';
        else if (relFile.includes('beauty')) folder = 'Beauty';
        else if (relFile.includes('healthcare')) folder = 'Healthcare';
        else if (relFile.includes('sports')) folder = 'Sports';
        else if (relFile.includes('assistance')) folder = 'IT_and_General';
        else if (relFile.includes('CulturesPage')) folder = 'Cultures';

        items.push({
          sourceFile: relFile,
          folder,
          name: name || `resource_${items.length + 1}`,
          url,
          type
        });
      }
    }
  });

  return items;
}

function buildMap() {
  const rawItems = extractAllResourcesExhaustive();
  const uniqueMap = new Map();
  rawItems.forEach(it => {
    if (!uniqueMap.has(it.url)) {
      uniqueMap.set(it.url, it);
    } else {
      const existing = uniqueMap.get(it.url);
      if (existing.name.startsWith('resource_') && !it.name.startsWith('resource_')) {
        uniqueMap.set(it.url, it);
      }
    }
  });

  const urlToLocal = {};
  for (const item of uniqueMap.values()) {
    const info = extractDriveId(item.url);
    if (!info || info.type === 'drive_folder') continue;

    const ext = getExtension(info, item.type);
    let cleanName = sanitizeFilename(item.name);
    if (!cleanName || cleanName.length < 2) {
      cleanName = `resource_${info.id}`;
    }
    const fileName = `${cleanName}${ext}`;
    
    // Check if the file exists in public/resources, or if it was renamed/exists
    const encodedPath = encodeURI(`${item.folder}/${fileName}`).replace(/#/g, '%23').replace(/\?/g, '%3F');
    urlToLocal[item.url] = `/resources/${encodedPath}`;
  }
  
  fs.writeFileSync('url_map.json', JSON.stringify(urlToLocal, null, 2));
  console.log('Done!');
}
buildMap();
