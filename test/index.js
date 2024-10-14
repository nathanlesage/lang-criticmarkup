import { parser } from "../dist/critic.js"
import { fileTests } from "@lezer/generator/test"
import { readdirSync, readFileSync } from "fs"
import { join } from "path"

const TESTDIR = './test'

const allTests = readdirSync(TESTDIR).filter(f => f.endsWith(".test.txt"))

for (const file of allTests) {
  describe(file, () => {
    const tests = fileTests(readFileSync(join(TESTDIR, file), "utf8"), file)
    for (const { name, run } of tests) {
      it(name, () => run(parser))
    }
  })
}
