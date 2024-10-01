require("@forsakringskassan/eslint-config/patch/modern-module-resolution");

module.exports = {
    extends: ["@forsakringskassan"],

    overrides: [
        {
            /* ensure we lint *.cjs and *.mjs files as well */
            files: ["*.cjs", "*.mjs"],
        },
        {
            files: "*.mjs",
            rules: {
                "import/extensions": ["error", "always"],
            },
        },
        {
            files: [
                "./*.{js,mjs}",
                "./packages/*/*.{js,ts,cjs,mjs}",
                "./packages/*/scripts/**/*.{js,ts,cjs,mjs}",
            ],
            extends: ["@forsakringskassan/cli"],
        },

        {
            files: "*.ts",
            extends: ["@forsakringskassan/typescript"],
        },

        {
            files: "*.vue",
            extends: ["@forsakringskassan/vue"],
        },

        {
            files: "**/examples/*.vue",
            rules: {
                "no-console": "off",
                "import/no-extraneous-dependencies": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
            },
        },
        {
            files: "*.spec.[jt]s",
            extends: ["@forsakringskassan/jest"],
        },

        {
            /* These legacy files points to compiled files which may or may not
             * exist yet */
            files: "packages/*/*.d.ts",
            rules: {
                "import/no-unresolved": "off",
            },
        },
    ],
};
