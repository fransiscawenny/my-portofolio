<script setup>
import { skillCategories } from "../../data/skills.js";
import HeroPhone from "./HeroPhone.vue";

defineEmits(["revealNavbar"]);
</script>

<template>
    <section id="top">
        <HeroPhone @reveal-navbar="(val) => $emit('revealNavbar', val)" />

        <div class="relative z-20 border-t border-white/[0.08] bg-ink py-6">
            <div
                class="page-container flex flex-col gap-3 text-[11px] uppercase tracking-[0.12em] text-mauve sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6"
            >
                <span class="font-semibold text-cream"> Full-Stack Developer </span>
                <span class="text-accent/90 font-medium"> 4+ Years Experience · Product Engineering </span>
                <span> Based in Indonesia </span>
            </div>
        </div>

        <div class="relative z-20 border-t border-white/[0.08] bg-ink py-12 px-4 sm:px-6">
            <div class="page-container max-w-6xl mx-auto">
                <div class="mb-8">
                    <p class="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.25em] text-accent">Technical Stack</p>
                    <h2 class="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-cream">
                        Skills & Technologies<span class="text-accent">.</span>
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div
                        v-for="cat in skillCategories"
                        :key="cat.category"
                        class="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.03]"
                    >
                        <h3 class="mb-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cream/80 border-b border-white/[0.06] pb-2">
                            {{ cat.category }}
                        </h3>

                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="skill in cat.skills"
                                :key="skill"
                                class="rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-mauve transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-cream"
                            >
                                {{ skill }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
