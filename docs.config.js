const path = require("node:path");
const {
    frontMatterFileReader,
    navigationFileReader,
    vueFileReader,
} = require("@forsakringskassan/docs-generator");

module.exports = {
    site: {
        name: "Custom partner Designsystem",
        lang: "sv",
    },
    outputFolder: "./public",
    cacheFolder: "./temp/docs",
    exampleFolders: ["./packages/vue/src", "./docs"],
    templateFolders: ["./docs/templates"],
    setupPath: path.resolve("docs/src/setup.ts"),
    sourceFiles: [
        {
            include: "docs/**/*.md",
            exclude: "docs/node_modules/**",
            basePath: "docs",
            fileReader: frontMatterFileReader,
        },
        {
            include: "docs/*/**/*.json",
            exclude: "docs/node_modules/**",
            basePath: "docs",
            fileReader: navigationFileReader,
        },
        {
            include: ["./packages/vue/src/components/**/*.vue"],
            exclude: ["./packages/vue/src/**/examples/*.vue"],
            fileReader: vueFileReader,
        },
    ],
};
