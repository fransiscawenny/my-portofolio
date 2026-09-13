<script setup>
import { onMounted } from "vue";
import { useLenis } from "./composables/useLenis";

useLenis();

onMounted(() => {
    document.documentElement.classList.add("js");
});
</script>

<template>
    <div class="min-h-screen bg-ink text-cream">
        <div class="noise"></div>

        <RouterView />
    </div>
</template>
