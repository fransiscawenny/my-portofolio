<script setup>
import { ref } from "vue";
import SectionLabel from "../common/SectionLabel.vue";

const active = ref(0);

const steps = [
    {
        number: "01",
        title: "Architect",
        description: "Design scalable system boundaries, database schemas, and data flows before writing code.",
    },
    {
        number: "02",
        title: "Model",
        description: "Structure relational or non-relational data efficiently to ensure long-term maintainability.",
    },
    {
        number: "03",
        title: "Build",
        description: "Develop robust backend services and clean frontend components with strict type safety.",
    },
    {
        number: "04",
        title: "Integrate",
        description: "Connect client and server seamlessly with well-documented APIs, state management, and auth.",
    },
    {
        number: "05",
        title: "Optimize",
        description: "Tune queries, secure endpoints, and test end-to-end performance for production readiness.",
    },
];
</script>

<template>
    <section class="border-t border-white/[0.08] bg-ink py-24 md:py-28">
        <div class="page-container">
            <SectionLabel number="04" label="How I think" />

            <div class="grid gap-16 lg:grid-cols-[0.6fr_1.4fr]">
                <div>
                    <h2 class="display-font text-4xl font-medium leading-none tracking-tighter text-cream md:text-6xl">
                        Great systems
                        <span class="text-cream/30"> span from the </span>
                        database to the UI.
                    </h2>
                </div>

                <div>
                    <div v-for="(step, index) in steps" :key="step.number" class="group border-t border-white/[0.08]" @mouseenter="active = index">
                        <div
                            class="grid cursor-default gap-5 py-7 transition-all duration-300 md:grid-cols-[70px_220px_1fr]"
                            :class="active === index ? 'opacity-100' : 'opacity-35'"
                        >
                            <span class="text-xs text-accent">
                                {{ step.number }}
                            </span>

                            <h3 class="display-font text-xl font-medium text-cream transition-colors duration-300 group-hover:text-blush">
                                {{ step.title }}
                            </h3>

                            <p class="max-w-lg text-sm leading-6 text-mauve">
                                {{ step.description }}
                            </p>
                        </div>
                    </div>

                    <div class="border-t border-white/[0.08]"></div>
                </div>
            </div>
        </div>
    </section>
</template>
