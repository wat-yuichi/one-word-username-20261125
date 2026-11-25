import { mkdir, writeFile } from "node:fs/promises";

const username = "lively-wren-72-3037";
const outputDirectory = process.env.OUTPUT_DIR ?? "/output";

await mkdir(outputDirectory, { recursive: true });
await writeFile(`${outputDirectory}/entry.txt`, username, "utf8");
