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

  // virtual-entry:./packages/vue/src/components/CRatingModal/examples/CRatingModalExample.vue
  var import_vue12 = __require("vue");

  // sfc-script:/home/runner/work/designsystem-user-lib/designsystem-user-lib/packages/vue/src/components/CRatingModal/CRatingModal.vue?type=script
  var import_vue8 = __require("vue");
  var import_vue9 = __require("vue");
  var import_vue10 = __require("@fkui/vue");

  // sfc-script:/home/runner/work/designsystem-user-lib/designsystem-user-lib/packages/vue/src/components/FBadge/FBadge.vue?type=script
  var import_vue3 = __require("vue");

  // packages/vue/src/components/FBadge/statuses.ts
  var statuses = ["default", "warning", "error", "success", "info"];

  // sfc-script:/home/runner/work/designsystem-user-lib/designsystem-user-lib/packages/vue/src/components/FBadge/FBadge.vue?type=script
  var FBadge_default = (0, import_vue3.defineComponent)({
    name: "FBadge",
    props: {
      /**
       * The status of the badge, can be either 'default', 'warning', 'error', 'success' or 'info'.
       *
       */
      status: {
        type: String,
        default: "default",
        validator: function(value) {
          return statuses.includes(value);
        }
      },
      /**
       * If badge should be inverted.
       *
       */
      inverted: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      badgeClass() {
        return this.inverted ? `badge--${this.status}-inverted` : `badge--${this.status}`;
      }
    }
  });

  // sfc-template:/home/runner/work/designsystem-user-lib/designsystem-user-lib/packages/vue/src/components/FBadge/FBadge.vue?type=template
  var import_vue4 = __require("vue");
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
      "div",
      {
        class: (0, import_vue4.normalizeClass)(["badge", _ctx.badgeClass])
      },
      [
        (0, import_vue4.createCommentVNode)(" @slot Slot for text to display in the badge. "),
        (0, import_vue4.renderSlot)(_ctx.$slots, "default")
      ],
      2
      /* CLASS */
    );
  }

  // packages/vue/src/components/FBadge/FBadge.vue
  FBadge_default.render = render;
  FBadge_default.__file = "packages/vue/src/components/FBadge/FBadge.vue";

  // sfc-script:/home/runner/work/designsystem-user-lib/designsystem-user-lib/packages/vue/src/components/c-rating/c-rating.vue?type=script
  var import_vue5 = __require("vue");
  var import_logic = __require("@fkui/logic");
  var import_vue6 = __require("@fkui/vue");
  var c_rating_default = /* @__PURE__ */ (0, import_vue5.defineComponent)({
    __name: "c-rating",
    props: /* @__PURE__ */ (0, import_vue5.mergeModels)({
      id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
      count: { type: Number, required: false, default: 5 }
    }, {
      "modelValue": { type: Number },
      "modelModifiers": {}
    }),
    emits: ["update:modelValue"],
    setup(__props, { expose: __expose }) {
      __expose();
      const selected = (0, import_vue5.useModel)(__props, "modelValue");
      const __returned__ = { selected, get FLabel() {
        return import_vue6.FLabel;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });

  // sfc-template:/home/runner/work/designsystem-user-lib/designsystem-user-lib/packages/vue/src/components/c-rating/c-rating.vue?type=template
  var import_vue7 = __require("vue");
  var _hoisted_1 = ["id"];
  var _hoisted_2 = ["aria-label", "onClick"];
  function render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue7.openBlock)(), (0, import_vue7.createElementBlock)(
      import_vue7.Fragment,
      null,
      [
        (0, import_vue7.createVNode)($setup["FLabel"], { for: $props.id }, {
          default: (0, import_vue7.withCtx)(() => [
            (0, import_vue7.renderSlot)(_ctx.$slots, "default")
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["for"]),
        (0, import_vue7.createElementVNode)("div", {
          id: $props.id,
          class: "rating"
        }, [
          ((0, import_vue7.openBlock)(true), (0, import_vue7.createElementBlock)(
            import_vue7.Fragment,
            null,
            (0, import_vue7.renderList)($props.count, (index) => {
              return (0, import_vue7.openBlock)(), (0, import_vue7.createElementBlock)("button", {
                key: index,
                class: "rating__button",
                type: "button",
                "aria-label": `Rate ${index}`,
                onClick: ($event) => $setup.selected = index
              }, [
                ((0, import_vue7.openBlock)(), (0, import_vue7.createElementBlock)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    class: (0, import_vue7.normalizeClass)(["rating__button__icon", { "rating__button__icon--filled": index <= ($setup.selected ?? 0) }])
                  },
                  [
                    (0, import_vue7.createCommentVNode)(" !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. "),
                    _cache[0] || (_cache[0] = (0, import_vue7.createElementVNode)(
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
  c_rating_default.render = render2;
  c_rating_default.__file = "packages/vue/src/components/c-rating/c-rating.vue";
  var c_rating_default2 = c_rating_default;

  // sfc-script:/home/runner/work/designsystem-user-lib/designsystem-user-lib/packages/vue/src/components/CRatingModal/CRatingModal.vue?type=script
  var CRatingModal_default2 = /* @__PURE__ */ (0, import_vue8.defineComponent)({
    __name: "CRatingModal",
    props: {
      /**
       * If the modal is open.
       * Use this to toggle if the modal should be visible or not.
       */
      isOpen: {
        type: Boolean,
        required: false,
        default: false
      },
      /**
       * Title of the modal.
       */
      title: {
        type: String,
        required: false,
        default: "S\xE4tt ett betyg"
      },
      /**
       * Description text for rating field.
       */
      ratingText: {
        type: String,
        required: false,
        default: "Hur m\xE5nga k\xF6ttbullar vill du ge?"
      }
    },
    emits: ["close", "submit"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const value = (0, import_vue9.ref)({
        score: void 0,
        comment: ""
      });
      const props = __props;
      const emits = __emit;
      function onSubmit(event) {
        emits("submit", event.data);
      }
      function onClose() {
        emits("close");
      }
      const __returned__ = { value, props, emits, onSubmit, onClose, get FFormModal() {
        return import_vue10.FFormModal;
      }, get FTextareaField() {
        return import_vue10.FTextareaField;
      }, get CRating() {
        return c_rating_default2;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });

  // sfc-template:/home/runner/work/designsystem-user-lib/designsystem-user-lib/packages/vue/src/components/CRatingModal/CRatingModal.vue?type=template
  var import_vue11 = __require("vue");
  function render3(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue11.openBlock)(), (0, import_vue11.createBlock)($setup["FFormModal"], {
      "is-open": $setup.props.isOpen,
      value: $setup.value,
      "use-error-list": false,
      onClose: $setup.onClose,
      onSubmit: $setup.onSubmit
    }, {
      header: (0, import_vue11.withCtx)(() => [
        (0, import_vue11.createTextVNode)(
          (0, import_vue11.toDisplayString)($props.title),
          1
          /* TEXT */
        )
      ]),
      "input-text-fields": (0, import_vue11.withCtx)(() => [
        (0, import_vue11.createVNode)($setup["CRating"], {
          modelValue: $setup.value.score,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value.score = $event),
          count: 5
        }, {
          default: (0, import_vue11.withCtx)(() => [
            (0, import_vue11.createTextVNode)(
              (0, import_vue11.toDisplayString)($props.ratingText),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue11.createVNode)($setup["FTextareaField"], {
          modelValue: $setup.value.comment,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.value.comment = $event)
        }, {
          default: (0, import_vue11.withCtx)(() => _cache[2] || (_cache[2] = [
            (0, import_vue11.createTextVNode)(" L\xE4gg till en kommentar ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["is-open", "value"]);
  }

  // packages/vue/src/components/CRatingModal/CRatingModal.vue
  CRatingModal_default2.render = render3;
  CRatingModal_default2.__file = "packages/vue/src/components/CRatingModal/CRatingModal.vue";
  var CRatingModal_default = CRatingModal_default2;

  // virtual-entry:./packages/vue/src/components/CRatingModal/examples/CRatingModalExample.vue
  var import_vue13 = __require("vue");
  var exampleComponent = (0, import_vue12.defineComponent)({
    name: "CRatingModalExample",
    components: { CRatingModal: CRatingModal_default },
    data() {
      return {
        modalOpen: false,
        title: "Betygs\xE4tt betygsmodalen",
        ratingText: "Hur m\xE5nga k\xF6ttbullar ger du denna komponent?",
        result: null
      };
    },
    methods: {
      onClick() {
        this.modalOpen = !this.modalOpen;
      },
      onClose() {
        this.modalOpen = false;
      },
      onSubmit(result) {
        this.result = result;
      }
    }
  });
  function render4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_c_rating_modal = (0, import_vue13.resolveComponent)("c-rating-modal");
    return (0, import_vue13.openBlock)(), (0, import_vue13.createElementBlock)(
      import_vue13.Fragment,
      null,
      [
        (0, import_vue13.createElementVNode)("button", {
          type: "button",
          class: "button button--primary",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
        }, "\xD6ppna betygsmodal"),
        (0, import_vue13.createVNode)(_component_c_rating_modal, {
          title: _ctx.title,
          "rating-text": _ctx.ratingText,
          "is-open": _ctx.modalOpen,
          onClose: _ctx.onClose,
          onSubmit: _ctx.onSubmit
        }, null, 8, ["title", "rating-text", "is-open", "onClose", "onSubmit"]),
        (0, import_vue13.createElementVNode)(
          "pre",
          null,
          (0, import_vue13.toDisplayString)(_ctx.result),
          1
          /* TEXT */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  exampleComponent.render = render4;
  setup({
    rootComponent: exampleComponent,
    selector: "#CRatingModalExample"
  });
})();
