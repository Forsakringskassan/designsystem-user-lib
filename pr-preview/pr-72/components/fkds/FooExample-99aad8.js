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

// virtual-entry:virtual:docs/components/fkds/FooExample.vue:FooExample-99aad8.js
import { defineComponent } from "vue";
import { FDatepickerField, FSelectField, FTooltip } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { DateFormat, FDate, Weekday } from "@fkui/date";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FDatepickerFieldLiveExample",
  components: { LiveExample, FSelectField },
  data() {
    return {
      DateFormat,
      FDate,
      monthToShow: "",
      minDateLimit: "",
      maxDateLimit: "",
      invalidDates: [],
      invalidWeekdays: false,
      highlightTodayEnabled: true,
      isRequired: false,
      isDisabled: false,
      alwaysInlineEnabled: false,
      tooltipVisible: false,
      descriptionVisible: false
    };
  },
  computed: {
    livedata() {
      return { model: "", FDate, Weekday };
    },
    components() {
      return {
        FDatepickerField,
        FDate,
        Weekday,
        FTooltip
      };
    },
    alwaysInline() {
      return this.alwaysInlineEnabled ? "always-inline" : "";
    },
    initialMonth() {
      return this.monthToShow ? `:initial-month='FDate.fromIso("${this.monthToShow}")'` : "";
    },
    validation() {
      let validators = "";
      const settings = [];
      if (this.isRequired) {
        validators += ".required";
      }
      if (this.minDateLimit) {
        validators += ".minDate";
        settings.push(` minDate: { limit: '${this.minDateLimit}' }`);
      }
      if (this.maxDateLimit) {
        validators += ".maxDate";
        settings.push(` maxDate: { limit: '${this.maxDateLimit}' }`);
      }
      if (this.invalidWeekdays) {
        validators += ".invalidWeekdays";
        settings.push(` invalidWeekdays: { days: [Weekday.SATURDAY, Weekday.SUNDAY] }`);
      }
      if (this.invalidDates.length > 0) {
        validators += ".invalidDates";
        const dates = this.getInvalidDates();
        settings.push(` invalidDates: { dates: ['${dates.join("', '")}'] }`);
      }
      if (settings.length > 0) {
        return validators ? `v-validation${validators}="{${settings.join(", ")}}"` : "";
      } else {
        return validators ? `v-validation${validators}` : "";
      }
    },
    highlightToday() {
      return this.highlightTodayEnabled ? "" : `:highlight-today="false"`;
    },
    disabled() {
      return this.isDisabled ? "disabled" : "";
    },
    description() {
      const template = (
        /* HTML */
        `
                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass"> Hj\xE4lptext </span>
                </template>
            `
      );
      return this.descriptionVisible ? template : "";
    },
    tooltip() {
      const template = (
        /* HTML */
        `
                <template #tooltip>
                    <f-tooltip screen-reader-text="L\xE4s mer h\xE4r">
                        <template #header> Header </template>
                        <template #body> Body </template>
                    </f-tooltip>
                </template>
            `
      );
      return this.tooltipVisible ? template : "";
    },
    template() {
      return (
        /* HTML */
        `
                <f-datepicker-field
                    v-model="model"
                    ${this.initialMonth}
                    ${this.alwaysInline}
                    ${this.highlightToday}
                    ${this.validation}
                    ${this.disabled}
                >
                    <template #default> Etikett </template>
                    ${this.tooltip} ${this.description}
                </f-datepicker-field>
            `
      );
    }
  },
  methods: {
    getDateWithOffset(months) {
      return FDate.now().addMonths(months).toString();
    },
    getMonthYearString(date) {
      const fdate = FDate.fromIso(date);
      return `${fdate.monthName} ${fdate.year}`;
    },
    getInvalidDates() {
      return [FDate.now().addDays(-7).toString(), FDate.now().addDays(-3).toString()];
    }
  }
});
var _hoisted_1 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata
  }, {
    default: _withCtx(() => [
      _cache[3] || (_cache[3] = _createTextVNode(
        " asdfadf ",
        -1
        /* CACHED */
      )),
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.monthToShow,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.monthToShow = $event)
      }, {
        label: _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createTextVNode(
            " Visa m\xE5nad ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[2] || (_cache[2] = _createElementVNode(
            "option",
            { value: "" },
            "Nuvarande m\xE5nad (standard)",
            -1
            /* CACHED */
          )),
          _createElementVNode("option", {
            value: _ctx.getDateWithOffset(-6)
          }, "Exempel: " + _toDisplayString(_ctx.getMonthYearString(_ctx.getDateWithOffset(-6))), 9, _hoisted_1)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["components", "template", "livedata"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-99aad8"
});
export {
  render
};
