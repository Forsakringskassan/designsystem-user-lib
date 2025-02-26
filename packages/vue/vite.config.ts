import { defineConfig } from "@forsakringskassan/vite-lib-config/vite";

export default defineConfig({
    fk: {
        enableBanner: false,
    },
    resolve: {
        alias: {
            "@fkui/user-lib-vue": "src/index.ts",
            "~@fkui/design": "@fkui/design",
            "~@fkui/theme-default": "@fkui/theme-default",
        },
    },
});
