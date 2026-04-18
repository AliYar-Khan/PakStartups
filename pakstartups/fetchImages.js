const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const axios = require('axios');

const htmlDir = path.join(__dirname, '..', 'stitch_pakstartups');
const publicImagesDir = path.join(__dirname, 'public', 'images');
const mappingFile = path.join(__dirname, 'image-mapping.json');

// Ensure image directory exists
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

async function downloadImage(url, filepath) {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    });
    return new Promise((resolve, reject) => {
      const writer = fs.createWriteStream(filepath);
      response.data.pipe(writer);
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Failed to download ${url}: ${error.message}`);
  }
}

async function processHtmlFiles() {
  const dirs = fs.readdirSync(htmlDir);
  const imageMapping = {};
  let imageCounter = 1;

  for (const dir of dirs) {
    const dirPath = path.join(htmlDir, dir);
    if (!fs.statSync(dirPath).isDirectory()) continue;

    const htmlFile = path.join(dirPath, 'code.html');
    if (!fs.existsSync(htmlFile)) continue;

    const htmlContent = fs.readFileSync(htmlFile, 'utf8');
    const $ = cheerio.load(htmlContent);
    const images = [];

    // Find <img> and background-image urls
    $('img').each((i, el) => {
      const src = $(el).attr('src');
      if (src && src.includes('googleusercontent.com')) {
        images.push(src);
      }
    });

    $('*[style*="background-image: url"]').each((i, el) => {
      const style = $(el).attr('style');
      const match = style.match(/url\(['"]?(https:\/\/lh3\.googleusercontent\.com[^'"]+)['"]?\)/);
      if (match && match[1]) {
        images.push(match[1]);
      }
    });

    if (images.length > 0) {
      for (const url of images) {
        // Find existing mapping or create new
        let filename;
        const existingKey = Object.keys(imageMapping).find(k => imageMapping[k].originalUrl === url);
        
        if (existingKey) {
          filename = existingKey;
        } else {
          filename = `image-${imageCounter.toString().padStart(3, '0')}.jpg`;
          const filepath = path.join(publicImagesDir, filename);
          console.log(`Downloading ${filename} from ${dir}...`);
          await downloadImage(url, filepath);
          imageMapping[filename] = {
            originalUrl: url,
            sourceDir: dir
          };
          imageCounter++;
        }
      }
    }
  }

  // Create mappings by page
  const pagesMapping = {};
  for (const filename of Object.keys(imageMapping)) {
    const { sourceDir, originalUrl } = imageMapping[filename];
    if (!pagesMapping[sourceDir]) pagesMapping[sourceDir] = [];
    pagesMapping[sourceDir].push(filename);
  }

  fs.writeFileSync(mappingFile, JSON.stringify(pagesMapping, null, 2));
  console.log('All images downloaded and mapping file created!');
}

processHtmlFiles().catch(console.error);
