<script setup>
defineProps({
    number: {
        type: String,
        default: "01",
    },

    label: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-mauve">
        <span class="text-accent">
            {{ number }}
        </span>

        <span class="h-px w-8 bg-accent/40"></span>

        <span>
            {{ label }}
        </span>
    </div>
</template>
