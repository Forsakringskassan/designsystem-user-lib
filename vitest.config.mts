import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        reporters: ["default", ["junit", { suiteName: "UI tests" }]],
        outputFile: "test-results/vitest-junit.xml",
        projects: ["packages/*"],
    },
});
