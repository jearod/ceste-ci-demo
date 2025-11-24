const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const distDir = path.join(__dirname, '..', 'dist');

if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

const files = fs.readdirSync(srcDir);

files.forEach((file) => {
    if (file.endsWith('.js')) {
        const srcPath = path.join(srcDir, file);
        const destPath = path.join(distDir, file);
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${file} to dist/`);
    }
});

const buildInfo = `Build generated at ${new Date().toISOString()}\n`;
fs.writeFileSync(path.join(distDir, 'build-info.txt'), buildInfo);

console.log('Build completed.');
