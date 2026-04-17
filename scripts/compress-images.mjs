import { existsSync, readdirSync, statSync } from "node:fs";
import { join, parse } from "node:path";
import sharp from "sharp";

const DIR = "public/images";
const MAX_EDGE = 2000;
const QUALITY = 85;

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

const files = readdirSync(DIR).filter((f) => f.toLowerCase().endsWith(".png"));

if (files.length === 0) {
  console.log(`No .png files found in ${DIR}`);
  process.exit(0);
}

console.log(
  `Compressing ${files.length} image(s) from ${DIR} (max ${MAX_EDGE}px, JPEG q=${QUALITY}, mozjpeg, progressive)\n`,
);

let totalIn = 0;
let totalOut = 0;
let skipped = 0;
let processed = 0;

for (const file of files) {
  const input = join(DIR, file);
  const output = join(DIR, `${parse(file).name}.jpg`);
  const inStat = statSync(input);

  if (existsSync(output) && statSync(output).mtimeMs > inStat.mtimeMs) {
    console.log(`  skip  ${file}  (jpg already up to date)`);
    skipped += 1;
    continue;
  }

  await sharp(input)
    .rotate()
    .resize(MAX_EDGE, MAX_EDGE, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
    .toFile(output);

  const outStat = statSync(output);
  totalIn += inStat.size;
  totalOut += outStat.size;
  processed += 1;

  const saved = ((1 - outStat.size / inStat.size) * 100).toFixed(1);
  console.log(
    `  ok    ${file}  ${formatBytes(inStat.size)} -> ${formatBytes(outStat.size)}  (-${saved}%)`,
  );
}

console.log("");
if (processed > 0) {
  const totalSaved = ((1 - totalOut / totalIn) * 100).toFixed(1);
  console.log(
    `Processed ${processed} file(s): ${formatBytes(totalIn)} -> ${formatBytes(totalOut)} (-${totalSaved}%)`,
  );
}
if (skipped > 0) console.log(`Skipped ${skipped} file(s) already up to date`);
