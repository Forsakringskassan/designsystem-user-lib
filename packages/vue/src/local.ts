import { createApp } from "vue";
import { type SetupOptions } from "@forsakringskassan/vite-lib-config";
import "@fkui/icon-lib-default/dist/f";

/**
 * Workaround for issue https://github.com/Forsakringskassan/vite-lib-config/issues/23
 */
import "../../design";

import {
    TestPlugin,
    TranslationPlugin,
    ValidationPlugin,
    setRunningContext,
} from "@fkui/vue";

export function setup(options: SetupOptions): void {
    const { rootComponent, selector } = options;
    const app = createApp(rootComponent);
    setRunningContext(app);
    app.use(TestPlugin);
    app.use(TranslationPlugin);
    app.use(ValidationPlugin);
    app.mount(selector);
}
