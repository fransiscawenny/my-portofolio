<script setup>
import HeroPhone from "./HeroPhone.vue";
defineEmits(["revealNavbar"]);
</script>

<template>
    <section id="top">
        <HeroPhone @reveal-navbar="(val) => $emit('revealNavbar', val)" />

        <div class="relative z-20 border-t border-white/[0.08] bg-ink py-8">
            <div
                class="page-container flex flex-col gap-3 text-[11px] uppercase tracking-[0.12em] text-mauve sm:flex-row sm:items-center sm:justify-between"
            >
                <span> Frontend Developer </span>
                <span> Vue · JavaScript · Product Engineering </span>
                <span> Based in Indonesia </span>
            </div>
        </div>
    </section>
</template>
