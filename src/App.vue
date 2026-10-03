<script setup>
import { onMounted } from "vue";
import { useLenis } from "./composables/useLenis";
import GlobalGlitter from "./components/common/GlobalGlitter.vue";

useLenis();

onMounted(() => {
    document.documentElement.classList.add("js");
});
</script>

<template>
    <div class="relative min-h-screen bg-ink text-cream">
        <div class="noise"></div>

        <div class="relative z-10">
            <RouterView />
        </div>

        <GlobalGlitter />
    </div>
</template>
