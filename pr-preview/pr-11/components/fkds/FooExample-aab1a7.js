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

  // virtual-entry:./docs/components/fkds/FooExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_date = __require("@fkui/date");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FDatepickerFieldLiveExample",
    components: { LiveExample: import_docs_live_example.LiveExample, FSelectField: import_vue4.FSelectField },
    data() {
      return {
        DateFormat: import_date.DateFormat,
        FDate: import_date.FDate,
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
        return { model: "", FDate: import_date.FDate, Weekday: import_date.Weekday };
      },
      components() {
        return {
          FDatepickerField: import_vue4.FDatepickerField,
          FDate: import_date.FDate,
          Weekday: import_date.Weekday,
          FTooltip: import_vue4.FTooltip
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
        return import_date.FDate.now().addMonths(months).toString();
      },
      getMonthYearString(date) {
        const fdate = import_date.FDate.fromIso(date);
        return `${fdate.monthName} ${fdate.year}`;
      },
      getInvalidDates() {
        return [import_date.FDate.now().addDays(-7).toString(), import_date.FDate.now().addDays(-3).toString()];
      }
    }
  });
  var _hoisted_1 = ["value"];
  function render(_ctx, _cache) {
    const _component_f_select_field = (0, import_vue5.resolveComponent)("f-select-field");
    const _component_live_example = (0, import_vue5.resolveComponent)("live-example");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_live_example, {
      components: _ctx.components,
      template: _ctx.template,
      livedata: _ctx.livedata
    }, {
      default: (0, import_vue5.withCtx)(() => [
        _cache[5] || (_cache[5] = (0, import_vue5.createTextVNode)("\n        asdfadf\n        ")),
        (0, import_vue5.createVNode)(_component_f_select_field, {
          modelValue: _ctx.monthToShow,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.monthToShow = $event)
        }, {
          label: (0, import_vue5.withCtx)(() => _cache[1] || (_cache[1] = [
            (0, import_vue5.createTextVNode)(" Visa m\xE5nad ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            _cache[2] || (_cache[2] = (0, import_vue5.createTextVNode)()),
            _cache[3] || (_cache[3] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "" },
              "Nuvarande m\xE5nad (standard)",
              -1
              /* HOISTED */
            )),
            _cache[4] || (_cache[4] = (0, import_vue5.createTextVNode)()),
            (0, import_vue5.createElementVNode)("option", {
              value: _ctx.getDateWithOffset(-6)
            }, "Exempel: " + (0, import_vue5.toDisplayString)(_ctx.getMonthYearString(_ctx.getDateWithOffset(-6))), 9, _hoisted_1)
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
    selector: "#FooExample"
  });
})();
