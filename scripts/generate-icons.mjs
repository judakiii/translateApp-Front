import fs from "fs";
import process from "node:process";
import path from "path";

import { $ } from "execa";

const pkgPath = process.cwd();

function renameJsToJsx(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      renameJsToJsx(fullPath);
    } else if (file.endsWith(".js") && file !== "index.js") {
      const newPath = fullPath.replace(/\.js$/, ".jsx");
      fs.renameSync(fullPath, newPath);
      console.log(`Renamed ${fullPath} to ${newPath}`);
    }
  }
}

async function run() {
  console.log(`[generate] Running for ${pkgPath}`);

  const fillTask = $({
    cwd: pkgPath,
    stderr: process.stderr,
    stdout: process.stdout,
  })`svgr --silent src/assets/svg/fill --template scripts/icons/template/react_fill.cjs --config-file scripts/icons/configs/.svgrrc.fill.cjs`;

  const outlineTask = $({
    cwd: pkgPath,
    stderr: process.stderr,
    stdout: process.stdout,
  })`svgr --silent src/assets/svg/outline --template scripts/icons/template/react_outline.cjs --config-file scripts/icons/configs/.svgrrc.outline.cjs`;

  await Promise.all([fillTask, outlineTask]);

  const iconFillPath = path.join(pkgPath, "./src/assets/icons/fill");
  const iconOutlinePath = path.join(pkgPath, "./src/assets/icons/outline");

  renameJsToJsx(iconFillPath);
  renameJsToJsx(iconOutlinePath);

  const buildDir = path.join(pkgPath, "./src/assets/icons");

  const folders = fs
    .readdirSync(buildDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const indexFile = path.join(pkgPath, "./src/assets/icons/index.js");

  fs.writeFileSync(
    indexFile,
    folders.map((folder) => `export * from './${folder}/index';`).join("\n")
  );

  console.log(`[generate] ${pkgPath} built successfully.`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
