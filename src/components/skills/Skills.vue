<script setup>
import SectionLabel from "../common/SectionLabel.vue";
import { skills } from "../../data/skills";
</script>

<template>
    <section class="border-t border-white/[0.08] bg-ink py-32 md:py-48">
        <div class="page-container">
            <SectionLabel number="05" label="Toolkit" />

            <div class="grid gap-12 md:grid-cols-3 md:gap-10">
                <div>
                    <p class="mb-5 text-xs uppercase tracking-[0.2em] text-mauve/70">Frontend</p>

                    <div class="flex flex-wrap gap-2">
                        <span
                            v-for="skill in skills.frontend"
                            :key="skill"
                            class="rounded-full border border-white/[0.08] bg-white/[0.015] px-4 py-2 text-sm text-mauve transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.04] hover:text-cream"
                        >
                            {{ skill }}
                        </span>
                    </div>
                </div>

                <div>
                    <p class="mb-5 text-xs uppercase tracking-[0.2em] text-mauve/70">API & Backend</p>

                    <div class="flex flex-wrap gap-2">
                        <span
                            v-for="skill in skills.api"
                            :key="skill"
                            class="rounded-full border border-white/[0.08] bg-white/[0.015] px-4 py-2 text-sm text-mauve transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.04] hover:text-cream"
                        >
                            {{ skill }}
                        </span>
                    </div>
                </div>

                <div>
                    <p class="mb-5 text-xs uppercase tracking-[0.2em] text-mauve/70">Tools</p>

                    <div class="flex flex-wrap gap-2">
                        <span
                            v-for="skill in skills.tools"
                            :key="skill"
                            class="rounded-full border border-white/[0.08] bg-white/[0.015] px-4 py-2 text-sm text-mauve transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.04] hover:text-cream"
                        >
                            {{ skill }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
