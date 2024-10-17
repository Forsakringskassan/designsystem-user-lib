const fs = require("node:fs");
const path = require("node:path");

module.exports = {
    root: true,
    extends: [
        "html-validate:recommended",
        "html-validate:document",
        "html-validate:prettier",
    ],
    elements: ["html5"],
    rules: {
        "allowed-links": [
            "error",
            {
                allowExternal: {
                    include: [
                        "^https://forsakringskassan.github.io/designsystem/",
                        "^https://github.com/Forsakringskassan/",
                        "^https://developer.mozilla.org/",
                    ],
                },
                allowRelative: true,
                allowAbsolute: false,
                allowBase: true,
            },
        ],
        "attr-case": "off",
        "element-required-attributes": "off",
        "heading-level": [
            "error",
            {
                minInitialRank: "any",
                sectioningRoots: [
                    "dialog",
                    '[role="dialog"]',
                    ".example__live",
                    ".code-preview",
                    "footer",
                ],
            },
        ],
        "input-missing-label": "off",
        "no-inline-style": "off",
        "no-trailing-whitespace": "off",
        "no-unused-disable": "off",
        "prefer-native-element": [
            "error",
            {
                exclude: ["button", "progressbar"],
            },
        ],
        "require-sri": "off",
        "svg-focusable": "off",
        "text-content": "off",
        "wcag/h30": "off",
        "wcag/h63": "off",
    },
};
