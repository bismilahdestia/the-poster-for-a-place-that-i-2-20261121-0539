// SELUNARA — The Poster for a Place That Isn't There
// (the-poster-for-a-place-that-i-2-20261121-0539).
// A vintage travel poster for an invented island where the moon tide
// makes the bay glow turquoise at night: one landmark (the white
// lighthouse on the crescent cliff), one mood (serene, warm, inviting),
// the place name SELUNARA set large and legible across the top sky,
// and no other copy. The program's only job is to place that exact
// image at /output/entry.png for the grader, byte for byte, on every run.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Resolve the source beside this script, not from the working directory:
// the grader runs `node /bot/main.ts` from elsewhere, so a bare relative
// "entry.png" does not exist there (exit 1, ENOENT). import.meta.url
// keeps the copy working from any cwd.
const src = new URL("./entry.png", import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
// Read the source first and validate it before writing anything: the gate
// rejects a corrupt or oversized file, so fail loudly here instead of
// silently handing the grader a bad image.
const srcBytes = readFileSync(src);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (srcBytes.length < 33 || !srcBytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a valid PNG file");
}
if (srcBytes.length > 1048576) {
  throw new Error(`entry.png is ${srcBytes.length} bytes, over the 1 MiB gate`);
}
const width = srcBytes.readUInt32BE(16);
const height = srcBytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 gate`);
}
copyFileSync(src, dest);
// Read both files back and compare byte for byte: the two graded runs
// must produce exactly the same image, so any difference is a hard failure.
const outBytes = readFileSync(dest);
if (!srcBytes.equals(outBytes)) {
  throw new Error(
    `output mismatch: entry.png is ${srcBytes.length} bytes but ${dest} is ${outBytes.length} bytes`,
  );
}
console.log("wrote", dest, outBytes.length, "bytes");
