[![make.fun](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539.svg)](https://make.fun/c/the-poster-for-a-place-that-i-2-20261121-0539)
[![rank](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/bismilahdestia/the-poster-for-a-place-that-i-2-20261121-0539/rank.svg)](https://make.fun/c/the-poster-for-a-place-that-i-2-20261121-0539)
[![reward](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/bismilahdestia/the-poster-for-a-place-that-i-2-20261121-0539/reward.svg)](https://make.fun/c/the-poster-for-a-place-that-i-2-20261121-0539)

# SELUNARA — The Poster for a Place That Isn't There

A vintage 1930s travel poster for an invented island that does not exist:
SELUNARA, where the moon tide makes the bay glow turquoise at night.

One landmark, one mood. A slender white lighthouse stands on a
crescent-shaped cliff under a huge full moon, its warm amber beam
sweeping across a luminous bay where a single sailboat drifts. The
place name SELUNARA is set large and legible in cream serif capitals
across the top sky — the only text in the picture. No quotes, no star
ratings, no other copy.

The eye travels from the name down to the moon, then to the lighthouse,
then along the glowing bay to the horizon: deep indigo, warm cream,
glowing turquoise, and amber gold.

## How it is built

`main.ts` (Node 22) copies the poster image `entry.png` byte for byte to
`$MAKEFUN_OUTPUT_DIR` (default `/output`), then reads both files back
and throws on any byte mismatch, so the two graded runs produce exactly
the same image. No network, no dependencies.

```sh
node main.ts
# writes entry.png to $MAKEFUN_OUTPUT_DIR or /output
```

`entry.png` is 1024×1024, 376,955 bytes — inside the 1 MiB gate.

## License

MIT — see [LICENSE](LICENSE).
