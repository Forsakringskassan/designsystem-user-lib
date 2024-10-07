import path from "node:path";
import module from "node:module";
import {
    Generator,
    searchProcessor,
    topnavProcessor,
    versionProcessor,
} from "@forsakringskassan/docs-generator";
import config from "./docs.config.js";

const require = module.createRequire(import.meta.url);

const pkg = require("./package.json");

const docs = new Generator({
    site: {
        name: "Användaranpassat DS",
        lang: "sv",
    },
    outputFolder: "./public",
    cacheFolder: "./temp/docs",
    exampleFolders: ["./packages/vue/src", "./docs", "./from-fkui"],
    templateFolders: ["./docs/templates"],
    vendor: [
        {
            package: "vue",
            expose: "named",
            alias: "vue/dist/vue.esm-bundler.js",
        },
        "@fkui/logic",
        "@fkui/date",
        "@fkui/vue",
        "@forsakringskassan/docs-live-example",
    ],
    processors: [
        searchProcessor(),
        versionProcessor(pkg, "footer:right", {
            scm: {
                commitUrlFormat: "{{ homepage }}/commits/{{ hash }}",
                prUrlFormat: "{{ homepage }}/pull-requests/{{ pr }}/overview",
            },
        }),

        topnavProcessor("docs/topmenu.json", "Användaranpassat DS"),
    ],
    setupPath: path.resolve("docs/src/setup.ts"),
});

docs.compileScript("main", "./docs/src/main.js", {
    appendTo: "body",
});

docs.compileStyle("docs", "./docs/src/docs-theme.scss", {
    appendTo: "head",
});

try {
    await docs.build(config.sourceFiles);
} catch (err) {
    console.error(err.prettyError ? err.prettyError() : err);
    process.exitCode = 1;
}
