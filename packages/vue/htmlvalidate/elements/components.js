const { defineMetadata } = require("html-validate");

module.exports = defineMetadata({
    "c-rating": {
        flow: true,
        phrasing: true,
        interactive: true,
        attributes: {
            count: {},
            id: {},
        },
        permittedContent: ["template", "@phrasing", "slot"],
        slots: ["default"],
        permittedDescendants: [
            {
                exclude: "@interactive",
            },
        ],
    },

    "c-rating#default": {
        permittedContent: ["@phrasing", "slot"],
    },

    "c-rating-modal": {
        flow: true,
        phrasing: false,
        interactive: true,
        attributes: {
            title: {},
            ratingText: {},
            "is-open": {
                boolean: true,
            },
        },
    },
});
