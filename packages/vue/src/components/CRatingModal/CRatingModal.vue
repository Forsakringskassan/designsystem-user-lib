<script setup lang="ts">
import { ref } from "vue";
import { FFormModal, FTextareaField } from "@fkui/vue";
import { type CRatingModalResult, CRating } from "..";

const value = ref<CRatingModalResult>({
    score: undefined,
    comment: "",
});

const props = defineProps({
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
});

const emits = defineEmits<{
    /**
     * Emitted when modal is closed by clicking a button or pressing escape.
     */
    close: [];
    /**
     * Emitted when modal has been submitted.
     *
     */
    submit: [CRatingModalResult];
}>();

function onSubmit(event: { data: CRatingModalResult }): void {
    emits("submit", event.data);
}

function onClose(): void {
    emits("close");
}
</script>
<template>
    <f-form-modal :is-open="props.isOpen" :value="value" :use-error-list="false" @close="onClose" @submit="onSubmit">
        <template #header> {{ title }} </template>
        <template #input-text-fields>
            <c-rating v-model="value.score" :count="5"> {{ ratingText }} </c-rating>
            <f-textarea-field v-model="value.comment"> Lägg till en kommentar </f-textarea-field>
        </template>
    </f-form-modal>
</template>
