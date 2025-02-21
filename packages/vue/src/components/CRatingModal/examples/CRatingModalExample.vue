<script lang="ts">
import { defineComponent } from "vue";
import { type CRatingModalResult, CRatingModal } from "..";

export default defineComponent({
    name: "CRatingModalExample",
    components: { CRatingModal },
    data() {
        return {
            modalOpen: false,
            title: "Betygsätt betygsmodalen",
            ratingText: "Hur många köttbullar ger du denna komponent?",
            result: null as CRatingModalResult | null,
        };
    },
    methods: {
        onClick(): void {
            this.modalOpen = !this.modalOpen;
        },
        onClose(): void {
            this.modalOpen = false;
        },
        onSubmit(result: CRatingModalResult): void {
            this.result = result;
        },
    },
});
</script>

<template>
    <button type="button" class="button button--primary" @click="onClick">Öppna betygsmodal</button>

    <c-rating-modal
        :title="title"
        :rating-text="ratingText"
        :is-open="modalOpen"
        @close="onClose"
        @submit="onSubmit"
    />

    <pre>{{ result }}</pre>
</template>
