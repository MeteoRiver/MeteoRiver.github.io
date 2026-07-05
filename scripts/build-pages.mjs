import { copyFileSync, cpSync, existsSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const indexPath = join(root, 'index.html');
const sourceIndexPath = join(root, 'index.vite.html');
const backupIndexPath = join(root, '.index.deploy.backup.html');
const distPath = join(root, 'dist');
const assetsPath = join(root, 'assets');
const node = process.execPath;
const tscPath = join(root, 'node_modules', 'typescript', 'bin', 'tsc');
const vitePath = join(root, 'node_modules', 'vite', 'bin', 'vite.js');

if (existsSync(indexPath)) {
  copyFileSync(indexPath, backupIndexPath);
}

try {
  copyFileSync(sourceIndexPath, indexPath);
  execFileSync(node, [tscPath, '-b'], { stdio: 'inherit' });
  execFileSync(node, [vitePath, 'build', '--configLoader', 'runner'], { stdio: 'inherit' });

  if (existsSync(assetsPath)) {
    rmSync(assetsPath, { recursive: true, force: true });
  }

  cpSync(join(distPath, 'index.html'), indexPath);
  cpSync(join(distPath, 'assets'), assetsPath, { recursive: true });

  for (const file of ['404.html', 'favicon.svg', 'robots.txt', 'site.webmanifest', 'sitemap.xml']) {
    const source = join(distPath, file);
    if (existsSync(source)) {
      cpSync(source, join(root, file));
    }
  }

  if (!existsSync(join(root, '.nojekyll'))) {
    writeFileSync(join(root, '.nojekyll'), '');
  }
} catch (error) {
  if (existsSync(backupIndexPath)) {
    copyFileSync(backupIndexPath, indexPath);
  }
  throw error;
} finally {
  if (existsSync(backupIndexPath)) {
    rmSync(backupIndexPath, { force: true });
  }
}
