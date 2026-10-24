import assert from 'node:assert/strict';
import {existsSync, readFileSync} from 'node:fs';
import {resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const src=(path)=>readFileSync(resolve(root,path),'utf8');
const required=[
 'index.html','styles.css','app.js','sw.js','manifest.webmanifest',
 'icons/logo.svg','icons/icon-192.png','icons/icon-512.png',
 'apps/shared.css','apps/prompt-vault/index.html','apps/prompt-vault/app.js',
 'apps/idea-canvas/index.html','apps/idea-canvas/app.js',
 'apps/priority-coach/index.html','apps/priority-coach/app.js',
 'apps/study-cards/index.html','apps/study-cards/app.js',
 'apps/content-planner/index.html','apps/content-planner/app.js',
 'apps/reading-tracker/index.html','apps/reading-tracker/app.js',
 'apps/github-hub/index.html','apps/github-hub/app.js',
 'apps/workflow-lab/index.html','apps/workflow-lab/app.js'
];
for(const file of required)assert.ok(existsSync(resolve(root,file)),`Missing ${file}`);
for(const file of required.filter(x=>x.endsWith('.js'))){
 const result=spawnSync(process.execPath,['--check',resolve(root,file)],{encoding:'utf8'});
 assert.equal(result.status,0,`Syntax error in ${file}: ${result.stderr}`);
}
for(const file of required.filter(x=>x.endsWith('index.html'))){
 const html=src(file);
 assert.match(html,/<html lang="en">/i,`Missing language in ${file}`);
 const refs=[...html.matchAll(/<(?:script|link)\b[^>]+(?:src|href)="([^"]+)"/gi)].map(m=>m[1]);
 for(const url of refs){
  if(!url.startsWith('.')||url.startsWith('//'))continue;
  const local=resolve(dirname(resolve(root,file)),url);
  assert.ok(existsSync(local),`Broken resource ${url} in ${file}`);
 }
}
const assets=[...src('sw.js').matchAll(/'((?:\.\/|\.\.\/)[^']+)'/g)].map(m=>m[1]);
for(const path of assets)assert.ok(existsSync(resolve(root,path)),`Offline asset missing: ${path}`);
const manifest=JSON.parse(src('manifest.webmanifest'));
for(const icon of manifest.icons||[])assert.ok(existsSync(resolve(root,icon.src)),`Manifest icon missing: ${icon.src}`);
const app=src('app.js');
for(const requiredName of ['renderStarterApps','renderResources','renderConnections','filteredProjects','validateBackup','savedCsv','stage-picker'])
 assert.ok(app.includes(requiredName),`Missing app feature: ${requiredName}`);
console.log('ProjectForge static checks passed: 25 required files, JS syntax, local assets, manifest, connection tools.');
