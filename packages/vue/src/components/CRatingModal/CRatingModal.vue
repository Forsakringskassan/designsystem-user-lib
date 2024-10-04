<template>
    <f-form-modal :is-open="isOpen" :value="value" :use-error-list="false" @close="onClose" @submit="onSubmit">
        <template #header> {{ title }} </template>
        <template #input-text-fields>
            <c-rating v-model="value.score" :count="5"> {{ ratingText }} </c-rating>

            <f-textarea-field v-model="value.comment"> Lägg till en kommentar </f-textarea-field>
        </template>
    </f-form-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FFormModal, FTextareaField } from "@fkui/vue";
import { CRating } from "..";

export default defineComponent({
    name: "CRatingModal",
    components: { CRating, FFormModal, FTextareaField },
    props: {
        /**
         * If the modal is open.
         * Use this to toggle if the modal should be visible or not.
         */
        isOpen: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * Title of the modal.
         */
        title: {
            type: String,
            required: false,
            default: "Sätt ett betyg",
        },
        /**
         * Description text for rating field.
         */
        ratingText: {
            type: String,
            required: false,
            default: "Hur många köttbullar vill du ge?",
        },
    },
    emits: [
        /**
         * Emitted when modal is closed by clicking a button or pressing escape.
         */
        "close",
        /**
         * Emitted when modal has been submitted.
         *
         * @type {CRatingModalResult}
         */
        "submit",
    ],
    data() {
        return {
            value: {
                score: undefined,
                comment: "",
            },
        };
    },
    methods: {
        onSubmit(event: { data: unknown }): void {
            this.$emit("submit", event.data);
        },
        onClose(): void {
            this.$emit("close");
        },
    },
});
</script>
