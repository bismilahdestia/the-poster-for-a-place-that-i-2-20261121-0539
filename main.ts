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
copyFileSync(src, dest);
// Read both files back and compare byte for byte: the two graded runs
// must produce exactly the same image, so any difference is a hard failure.
const srcBytes = readFileSync(src);
const outBytes = readFileSync(dest);
if (!srcBytes.equals(outBytes)) {
  throw new Error(
    `output mismatch: entry.png is ${srcBytes.length} bytes but ${dest} is ${outBytes.length} bytes`,
  );
}
console.log("wrote", dest, outBytes.length, "bytes");
