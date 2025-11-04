// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
  TestPlugin,
  TranslationPlugin,
  ValidationPlugin,
  setRunningContext
} from "@fkui/vue";
function setup(options) {
  const { rootComponent, selector } = options;
  const app = createApp({
    render() {
      return h(FErrorHandlingApp, { defaultComponent: rootComponent });
    }
  });
  setRunningContext(app);
  app.use(ErrorPlugin);
  app.use(ValidationPlugin);
  app.use(TestPlugin);
  app.use(TranslationPlugin);
  app.mount(selector);
  app.config.warnHandler = (msg, vm, trace) => {
    console.warn(`Warning:`, msg, trace);
    throw new Error(msg);
  };
}

// virtual-entry:virtual:packages/vue/src/components/c-rating/examples/CRatingLiveExample.vue:CRatingLiveExample-510bc4.js
import { defineComponent } from "vue";
import { FSelectField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

// sfc-script:/home/runner/work/designsystem-user-lib/designsystem-user-lib/packages/vue/src/components/c-rating/c-rating.vue?type=script
import { useModel as _useModel, mergeModels as _mergeModels, defineComponent as _defineComponent } from "vue";
import { ElementIdService } from "@fkui/logic";
import { FLabel } from "@fkui/vue";
var c_rating_default = /* @__PURE__ */ _defineComponent({
  __name: "c-rating",
  props: /* @__PURE__ */ _mergeModels({
    id: { type: String, required: false, default: () => ElementIdService.generateElementId() },
    count: { type: Number, required: false, default: 5 }
  }, {
    "modelValue": { type: Number },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const selected = _useModel(__props, "modelValue");
    const __returned__ = { selected, get FLabel() {
      return FLabel;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem-user-lib/designsystem-user-lib/packages/vue/src/components/c-rating/c-rating.vue?type=template
import { renderSlot as _renderSlot, withCtx as _withCtx, createVNode as _createVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass } from "vue";
var _hoisted_1 = ["id"];
var _hoisted_2 = ["aria-label", "onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createVNode($setup["FLabel"], { for: $props.id }, {
        default: _withCtx(() => [
          _renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["for"]),
      _createElementVNode("div", {
        id: $props.id,
        class: "rating"
      }, [
        (_openBlock(true), _createElementBlock(
          _Fragment,
          null,
          _renderList($props.count, (index) => {
            return _openBlock(), _createElementBlock("button", {
              key: index,
              class: "rating__button",
              type: "button",
              "aria-label": `Rate ${index}`,
              onClick: ($event) => $setup.selected = index
            }, [
              (_openBlock(), _createElementBlock(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                  class: _normalizeClass(["rating__button__icon", { "rating__button__icon--filled": index <= ($setup.selected ?? 0) }])
                },
                [
                  _createCommentVNode(" !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. "),
                  _cache[0] || (_cache[0] = _createElementVNode(
                    "path",
                    { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM240 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM208 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-64-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" },
                    null,
                    -1
                    /* CACHED */
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

// virtual-entry:virtual:packages/vue/src/components/c-rating/examples/CRatingLiveExample.vue:CRatingLiveExample-510bc4.js
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode2, resolveComponent as _resolveComponent, withCtx as _withCtx2, createVNode as _createVNode2, openBlock as _openBlock2, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FBadgeLiveExample",
  components: { LiveExample, FSelectField },
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
      return this.count ? ` <c-rating :count=${String(this.count)}> Betyg </c-rating> ` : ` <c-rating> Betyg </c-rating> `;
    }
  }
});
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock2(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template
  }, {
    default: _withCtx2(() => [
      _createVNode2(_component_f_select_field, {
        modelValue: _ctx.count,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.count = $event)
      }, {
        label: _withCtx2(() => [..._cache[1] || (_cache[1] = [
          _createTextVNode(
            " Maxbetyg ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx2(() => [
          _cache[2] || (_cache[2] = _createElementVNode2(
            "option",
            { value: 3 },
            "3",
            -1
            /* CACHED */
          )),
          _cache[3] || (_cache[3] = _createElementVNode2(
            "option",
            { value: void 0 },
            "5 (default)",
            -1
            /* CACHED */
          )),
          _cache[4] || (_cache[4] = _createElementVNode2(
            "option",
            { value: 10 },
            "10",
            -1
            /* CACHED */
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
  selector: "#example-510bc4"
});
export {
  render2 as render
};
