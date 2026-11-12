import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const source = resolve(root, "public/logo-dark.png");
const outDir = resolve(root, "src/app");

await mkdir(outDir, { recursive: true });

const raw = await sharp(source).ensureAlpha().toBuffer({ resolveWithObject: true });
const { width, height } = raw.info;
const size = Math.min(width, height);
const left = Math.round((width - size) / 2);
const top = Math.round((height - size) / 2);

const squared = sharp(source)
  .extract({ left, top, width: size, height: size })
  .flatten({ background: "#ffffff" });

const icon512 = await squared.clone().resize(512, 512, { fit: "contain", background: "#ffffff" }).png().toBuffer();
await writeFile(resolve(outDir, "icon.png"), icon512);

const appleInner = await squared
  .clone()
  .resize(150, 150, { fit: "contain", background: "#ffffff" })
  .png()
  .toBuffer();

const apple = await sharp({
  create: { width: 180, height: 180, channels: 4, background: "#ffffff" },
})
  .composite([{ input: appleInner, gravity: "center" }])
  .png()
  .toBuffer();
await writeFile(resolve(outDir, "apple-icon.png"), apple);

const png32 = await squared.clone().resize(32, 32, { fit: "contain", background: "#ffffff" }).png().toBuffer();
const png16 = await squared.clone().resize(16, 16, { fit: "contain", background: "#ffffff" }).png().toBuffer();
const ico = await pngToIco([png32, png16]);
await writeFile(resolve(outDir, "favicon.ico"), ico);

console.log("icons generated:", {
  "src/app/icon.png": `${icon512.length} bytes`,
  "src/app/apple-icon.png": `${apple.length} bytes`,
  "src/app/favicon.ico": `${ico.length} bytes`,
});
