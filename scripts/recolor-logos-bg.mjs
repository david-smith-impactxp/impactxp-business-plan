import { copyFileSync, existsSync, statSync } from "node:fs";
import sharp from "sharp";

const INPUT = "public/images/logos_v2.png";
const BACKUP = "public/images/logos_v2.original.png";
const TARGET = { r: 1, g: 25, b: 53 };
const TOLERANCE = 45;

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

if (!existsSync(INPUT)) {
  console.error(`Input not found: ${INPUT}`);
  process.exit(1);
}

if (!existsSync(BACKUP)) {
  copyFileSync(INPUT, BACKUP);
  console.log(`Backed up original -> ${BACKUP}`);
} else {
  console.log(`Using existing backup as source -> ${BACKUP}`);
}

const inSize = statSync(BACKUP).size;

const { data, info } = await sharp(BACKUP)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

const bg = {
  r: data[0],
  g: data[1],
  b: data[2],
};

console.log(
  `Source size: ${width}x${height} (${channels} channels) — sampled bg rgb(${bg.r}, ${bg.g}, ${bg.b})`,
);
console.log(
  `Replacing pixels within tolerance ${TOLERANCE} with rgb(${TARGET.r}, ${TARGET.g}, ${TARGET.b})`,
);

let replaced = 0;
const tolSq = TOLERANCE * TOLERANCE;

for (let i = 0; i < data.length; i += channels) {
  const dr = data[i] - bg.r;
  const dg = data[i + 1] - bg.g;
  const db = data[i + 2] - bg.b;
  if (dr * dr + dg * dg + db * db <= tolSq) {
    data[i] = TARGET.r;
    data[i + 1] = TARGET.g;
    data[i + 2] = TARGET.b;
    if (channels === 4) data[i + 3] = 255;
    replaced += 1;
  }
}

await sharp(data, { raw: { width, height, channels } })
  .png({ compressionLevel: 9 })
  .toFile(INPUT);

const outSize = statSync(INPUT).size;
const totalPixels = width * height;
const pct = ((replaced / totalPixels) * 100).toFixed(1);

console.log(
  `Recoloured ${replaced.toLocaleString()} / ${totalPixels.toLocaleString()} pixels (${pct}%)`,
);
console.log(`Wrote ${INPUT}  ${formatBytes(inSize)} -> ${formatBytes(outSize)}`);
