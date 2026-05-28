import { writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

function getCommitSha() {
  if (process.env.VERCEL_GIT_COMMIT_SHA) {
    return process.env.VERCEL_GIT_COMMIT_SHA;
  }

  try {
    return execSync("git rev-parse HEAD", { encoding: "utf8" }).trim();
  } catch {
    return "unknown";
  }
}

const commit = getCommitSha();
const version = {
  commit,
  shortCommit: commit === "unknown" ? "unknown" : commit.slice(0, 7),
  generatedAt: new Date().toISOString()
};

writeFileSync("version.json", `${JSON.stringify(version, null, 2)}\n`);
