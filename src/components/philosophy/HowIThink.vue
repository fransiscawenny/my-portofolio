<script setup>
import { ref } from "vue";
import SectionLabel from "../common/SectionLabel.vue";

const active = ref(0);

const steps = [
    {
        number: "01",
        title: "Understand",
        description: "Start with the problem, users and business context before thinking about implementation.",
    },
    {
        number: "02",
        title: "Design",
        description: "Turn complex requirements into interfaces that feel simple and predictable.",
    },
    {
        number: "03",
        title: "Build",
        description: "Create reusable, maintainable components with a strong focus on frontend architecture.",
    },
    {
        number: "04",
        title: "Connect",
        description: "Integrate APIs, state and business logic while keeping the user experience responsive.",
    },
    {
        number: "05",
        title: "Refine",
        description: "Test, optimize and iterate until the product feels right—not just until it works.",
    },
];
</script>

<template>
    <section class="border-t border-white/[0.08] bg-ink py-32 md:py-48">
        <div class="page-container">
            <SectionLabel number="04" label="How I think" />

            <div class="grid gap-16 lg:grid-cols-[0.6fr_1.4fr]">
                <div>
                    <h2 class="display-font text-4xl font-medium leading-none tracking-tighter text-cream md:text-6xl">
                        Good frontend
                        <span class="text-cream/30"> starts before </span>
                        the code.
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
