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

// virtual-entry:./packages/vue/src/components/CRatingModal/examples/CRatingModalExample.vue
import { defineComponent as defineComponent2 } from "vue";

// sfc-script:/home/runner/work/designsystem-user-lib/designsystem-user-lib/packages/vue/src/components/CRatingModal/CRatingModal.vue?type=script
import { defineComponent as _defineComponent2 } from "vue";
import { ref } from "vue";
import { FFormModal, FTextareaField } from "@fkui/vue";

// sfc-script:/home/runner/work/designsystem-user-lib/designsystem-user-lib/packages/vue/src/components/FBadge/FBadge.vue?type=script
import { defineComponent } from "vue";

// packages/vue/src/components/FBadge/statuses.ts
var statuses = ["default", "warning", "error", "success", "info"];

// sfc-script:/home/runner/work/designsystem-user-lib/designsystem-user-lib/packages/vue/src/components/FBadge/FBadge.vue?type=script
var FBadge_default = defineComponent({
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
import { createCommentVNode as _createCommentVNode, renderSlot as _renderSlot, normalizeClass as _normalizeClass, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "div",
    {
      class: _normalizeClass(["badge", _ctx.badgeClass])
    },
    [
      _createCommentVNode(" @slot Slot for text to display in the badge. "),
      _renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}

// packages/vue/src/components/FBadge/FBadge.vue
FBadge_default.render = render;
FBadge_default.__file = "packages/vue/src/components/FBadge/FBadge.vue";

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
import { renderSlot as _renderSlot2, withCtx as _withCtx, createVNode as _createVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock2, createElementBlock as _createElementBlock2, createCommentVNode as _createCommentVNode2, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass2 } from "vue";
var _hoisted_1 = ["id"];
var _hoisted_2 = ["aria-label", "onClick"];
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock2(), _createElementBlock2(
    _Fragment,
    null,
    [
      _createVNode($setup["FLabel"], { for: $props.id }, {
        default: _withCtx(() => [
          _renderSlot2(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["for"]),
      _createElementVNode("div", {
        id: $props.id,
        class: "rating"
      }, [
        (_openBlock2(true), _createElementBlock2(
          _Fragment,
          null,
          _renderList($props.count, (index) => {
            return _openBlock2(), _createElementBlock2("button", {
              key: index,
              class: "rating__button",
              type: "button",
              "aria-label": `Rate ${index}`,
              onClick: ($event) => $setup.selected = index
            }, [
              (_openBlock2(), _createElementBlock2(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                  class: _normalizeClass2(["rating__button__icon", { "rating__button__icon--filled": index <= ($setup.selected ?? 0) }])
                },
                [
                  _createCommentVNode2(" !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. "),
                  _cache[0] || (_cache[0] = _createElementVNode(
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
var CRatingModal_default2 = /* @__PURE__ */ _defineComponent2({
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
    const value = ref({
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
      return FFormModal;
    }, get FTextareaField() {
      return FTextareaField;
    }, get CRating() {
      return c_rating_default2;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem-user-lib/designsystem-user-lib/packages/vue/src/components/CRatingModal/CRatingModal.vue?type=template
import { toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, withCtx as _withCtx2, createVNode as _createVNode2, openBlock as _openBlock3, createBlock as _createBlock } from "vue";
function render3(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock3(), _createBlock($setup["FFormModal"], {
    "is-open": $setup.props.isOpen,
    value: $setup.value,
    "use-error-list": false,
    onClose: $setup.onClose,
    onSubmit: $setup.onSubmit
  }, {
    header: _withCtx2(() => [
      _createTextVNode(
        _toDisplayString($props.title),
        1
        /* TEXT */
      )
    ]),
    "input-text-fields": _withCtx2(() => [
      _createVNode2($setup["CRating"], {
        modelValue: $setup.value.score,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value.score = $event),
        count: 5
      }, {
        default: _withCtx2(() => [
          _createTextVNode(
            _toDisplayString($props.ratingText),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode2($setup["FTextareaField"], {
        modelValue: $setup.value.comment,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.value.comment = $event)
      }, {
        default: _withCtx2(() => _cache[2] || (_cache[2] = [
          _createTextVNode(" L\xE4gg till en kommentar ")
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
import { createElementVNode as _createElementVNode2, resolveComponent as _resolveComponent, createVNode as _createVNode3, toDisplayString as _toDisplayString2, Fragment as _Fragment2, openBlock as _openBlock4, createElementBlock as _createElementBlock3 } from "vue";
var exampleComponent = defineComponent2({
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
  const _component_c_rating_modal = _resolveComponent("c-rating-modal");
  return _openBlock4(), _createElementBlock3(
    _Fragment2,
    null,
    [
      _createElementVNode2("button", {
        type: "button",
        class: "button button--primary",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
      }, "\xD6ppna betygsmodal"),
      _createVNode3(_component_c_rating_modal, {
        title: _ctx.title,
        "rating-text": _ctx.ratingText,
        "is-open": _ctx.modalOpen,
        onClose: _ctx.onClose,
        onSubmit: _ctx.onSubmit
      }, null, 8, ["title", "rating-text", "is-open", "onClose", "onSubmit"]),
      _createElementVNode2(
        "pre",
        null,
        _toDisplayString2(_ctx.result),
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
export {
  render4 as render
};
