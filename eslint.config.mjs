import defaultConfig, {
    docsConfig,
    examplesConfig,
    sandboxConfig,
} from "@forsakringskassan/eslint-config";
import cliConfig from "@forsakringskassan/eslint-config-cli";
import jestConfig from "@forsakringskassan/eslint-config-jest";
import typescriptConfig from "@forsakringskassan/eslint-config-typescript";
import typeinfoConfig from "@forsakringskassan/eslint-config-typescript-typeinfo";
import vueConfig from "@forsakringskassan/eslint-config-vue";

export default [
    {
        name: "Ignored files",
        ignores: [
            "**/assets/**",
            "**/coverage/**",
            "**/dist/**",
            "**/node_modules/**",
            "**/public/**",
            "**/temp/**",
            "**/typedoc/**",
            "docs/examples/**/*-nolint*",
            "packages/date/lib/**",
            "packages/logic/lib/**",
        ],
    },

    ...defaultConfig,

    cliConfig({
        files: [
            "*.{js,mjs}",
            "{examples,packages,internal}/*/*.{js,ts,cjs,mjs}",
            "{examples,packages,internal}/*/{htmlvalidate,scripts,stylelint}/**/*.{js,ts,cjs,mjs}",
            "scripts/*.{js,ts,cjs,mjs}",
        ],
    }),
    typescriptConfig(),
    typeinfoConfig(import.meta.dirname, {
        files: ["{examples,internal,packages}/**/*.{ts,vue}"],
        ignores: [
            "**/*.d.ts",
            "**/*.cy.ts",
            "**/*.spec.ts",
            "**/jest.setup.ts",
            "**/vite.config.ts",
            "**/docs/**",
        ],
    }),
    vueConfig(),
    jestConfig(),
    docsConfig(),
    examplesConfig(),
    sandboxConfig(),
];
