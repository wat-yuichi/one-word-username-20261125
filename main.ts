import { mkdir, writeFile } from "node:fs/promises";

const username = "lively-wren-72-3037";

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", username, "utf8");
