<script lang="ts">
import { defineComponent } from "vue";
import { CRating } from "../components";

export default defineComponent({
    components: { CRating },
    data() {
        return {
            valtAntal: 3,
            valtAntal2: 3,
        };
    },
});
</script>

<template>
    <c-rating v-model="valtAntal">Hur många köttbullar?</c-rating>
    <p>Du har valt {{ valtAntal }} köttbull(ar).</p>
    <c-rating v-model="valtAntal2">Hur många köttbullar2?</c-rating>
    <p>Du har valt {{ valtAntal2 }} köttbull(ar).</p>
</template>
