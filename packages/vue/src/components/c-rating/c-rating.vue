<template>
    <f-label :for="id"><slot></slot></f-label>
    <div :id class="rating">
        <button
            v-for="index in count"
            :key="index"
            class="rating__button"
            type="button"
            :aria-label="`Rate ${index}`"
            @click="selected = index"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="rating__button__icon"
                :class="{ 'rating__button__icon--filled': index <= (selected ?? 0) }"
            >
                <!-- !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                <path
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM240 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM208 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-64-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                />
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ElementIdService } from "@fkui/logic";
import { FLabel } from "@fkui/vue";

withDefaults(defineProps<{ id?: string; count?: number }>(), {
    id: () => ElementIdService.generateElementId(),
    count: 5,
});

const selected = defineModel({ type: Number });
</script>
