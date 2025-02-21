"use strict";
(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // docs/src/setup.ts
  var import_vue = __require("vue");
  var import_vue2 = __require("@fkui/vue");
  function setup(options) {
    const { rootComponent, selector } = options;
    const app = (0, import_vue.createApp)({
      render() {
        return (0, import_vue.h)(import_vue2.FErrorHandlingApp, { defaultComponent: rootComponent });
      }
    });
    (0, import_vue2.setRunningContext)(app);
    app.use(import_vue2.ErrorPlugin);
    app.use(import_vue2.ValidationPlugin);
    app.use(import_vue2.TestPlugin);
    app.use(import_vue2.TranslationPlugin);
    app.mount(selector);
    app.config.warnHandler = (msg, vm, trace) => {
      console.warn(`Warning:`, msg, trace);
      throw new Error(msg);
    };
  }

  // virtual-entry:./packages/vue/src/components/c-rating/examples/CRatingLiveExample.vue
  var import_vue6 = __require("vue");
  var import_vue7 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");

  // sfc-script:/home/runner/work/designsystem-user-lib/designsystem-user-lib/packages/vue/src/components/c-rating/c-rating.vue?type=script
  var import_vue3 = __require("vue");
  var import_logic = __require("@fkui/logic");
  var import_vue4 = __require("@fkui/vue");
  var c_rating_default = /* @__PURE__ */ (0, import_vue3.defineComponent)({
    __name: "c-rating",
    props: /* @__PURE__ */ (0, import_vue3.mergeModels)({
      id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
      count: { type: Number, required: false, default: 5 }
    }, {
      "modelValue": { type: Number },
      "modelModifiers": {}
    }),
    emits: ["update:modelValue"],
    setup(__props, { expose: __expose }) {
      __expose();
      const selected = (0, import_vue3.useModel)(__props, "modelValue");
      const __returned__ = { selected, get FLabel() {
        return import_vue4.FLabel;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });

  // sfc-template:/home/runner/work/designsystem-user-lib/designsystem-user-lib/packages/vue/src/components/c-rating/c-rating.vue?type=template
  var import_vue5 = __require("vue");
  var _hoisted_1 = ["id"];
  var _hoisted_2 = ["aria-label", "onClick"];
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      import_vue5.Fragment,
      null,
      [
        (0, import_vue5.createVNode)($setup["FLabel"], { for: $props.id }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.renderSlot)(_ctx.$slots, "default")
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["for"]),
        (0, import_vue5.createElementVNode)("div", {
          id: $props.id,
          class: "rating"
        }, [
          ((0, import_vue5.openBlock)(true), (0, import_vue5.createElementBlock)(
            import_vue5.Fragment,
            null,
            (0, import_vue5.renderList)($props.count, (index) => {
              return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("button", {
                key: index,
                class: "rating__button",
                type: "button",
                "aria-label": `Rate ${index}`,
                onClick: ($event) => $setup.selected = index
              }, [
                ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    class: (0, import_vue5.normalizeClass)(["rating__button__icon", { "rating__button__icon--filled": index <= ($setup.selected ?? 0) }])
                  },
                  [
                    (0, import_vue5.createCommentVNode)(" !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. "),
                    _cache[0] || (_cache[0] = (0, import_vue5.createElementVNode)(
                      "path",
                      { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM240 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM208 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-64-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" },
                      null,
                      -1
                      /* HOISTED */
                    ))
                  ],
                  2
                  /* CLASS */
                ))
              ], 8, _hoisted_2);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 8, _hoisted_1)
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }

  // packages/vue/src/components/c-rating/c-rating.vue
  c_rating_default.render = render;
  c_rating_default.__file = "packages/vue/src/components/c-rating/c-rating.vue";
  var c_rating_default2 = c_rating_default;

  // virtual-entry:./packages/vue/src/components/c-rating/examples/CRatingLiveExample.vue
  var import_vue8 = __require("vue");
  var exampleComponent = (0, import_vue6.defineComponent)({
    name: "FBadgeLiveExample",
    components: { LiveExample: import_docs_live_example.LiveExample, FSelectField: import_vue7.FSelectField },
    data() {
      return {
        count: void 0
      };
    },
    computed: {
      components() {
        return { CRating: c_rating_default2 };
      },
      template() {
        return this.count ? ` <c-rating :count=${this.count}> Betyg </c-rating> ` : ` <c-rating> Betyg </c-rating> `;
      }
    }
  });
  function render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_select_field = (0, import_vue8.resolveComponent)("f-select-field");
    const _component_live_example = (0, import_vue8.resolveComponent)("live-example");
    return (0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_live_example, {
      components: _ctx.components,
      template: _ctx.template
    }, {
      default: (0, import_vue8.withCtx)(() => [
        (0, import_vue8.createVNode)(_component_f_select_field, {
          modelValue: _ctx.count,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.count = $event)
        }, {
          label: (0, import_vue8.withCtx)(() => _cache[1] || (_cache[1] = [
            (0, import_vue8.createTextVNode)(" Maxbetyg ")
          ])),
          default: (0, import_vue8.withCtx)(() => [
            _cache[2] || (_cache[2] = (0, import_vue8.createElementVNode)(
              "option",
              { value: 3 },
              "3",
              -1
              /* HOISTED */
            )),
            _cache[3] || (_cache[3] = (0, import_vue8.createElementVNode)(
              "option",
              { value: void 0 },
              "5 (default)",
              -1
              /* HOISTED */
            )),
            _cache[4] || (_cache[4] = (0, import_vue8.createElementVNode)(
              "option",
              { value: 10 },
              "10",
              -1
              /* HOISTED */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["components", "template"]);
  }
  exampleComponent.render = render2;
  setup({
    rootComponent: exampleComponent,
    selector: "#CRatingLiveExample"
  });
})();
