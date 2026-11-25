import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I cut the Wi-Fi on purpose — you hadn't spoken to each other in two hours, and I was tired of being the only one in this relationship.";

if (ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single line of at most 200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
chmodSync(outDir, 0o755);
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", { encoding: "utf8", mode: 0o644 });
chmodSync(join(outDir, "entry.txt"), 0o644);
