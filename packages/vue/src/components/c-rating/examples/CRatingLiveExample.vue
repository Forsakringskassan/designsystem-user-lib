<script lang="ts">
import { defineComponent } from "vue";
import { FSelectField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import CRating from "../c-rating.vue";

export default defineComponent({
    name: "FBadgeLiveExample",
    components: { LiveExample, FSelectField },
    data() {
        return {
            count: undefined as undefined | number,
        };
    },
    computed: {
        components() {
            return { CRating };
        },
        template(): string {
            return this.count
                ? ` <c-rating :count=${String(this.count)}> Betyg </c-rating> `
                : ` <c-rating> Betyg </c-rating> `;
        },
    },
});
</script>

<template>
    <live-example :components :template>
        <f-select-field v-model="count">
            <template #label> Maxbetyg </template>
            <option :value="3">3</option>
            <option :value="undefined">5 (default)</option>
            <option :value="10">10</option>
        </f-select-field>
    </live-example>
</template>
