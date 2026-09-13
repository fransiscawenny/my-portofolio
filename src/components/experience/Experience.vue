<script setup>
import { ref } from "vue";
import SectionLabel from "../common/SectionLabel.vue";
import { experience } from "../../data/experience";

const activeIndex = ref(0);
</script>

<template>
    <section id="experience" class="border-t border-white/[0.08] bg-ink py-32 md:py-48">
        <div class="page-container">
            <SectionLabel number="02" label="Experience" />

            <div class="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                    <p class="max-w-xs text-sm leading-6 text-mauve">
                        A few chapters from my journey building web products and solving real business problems.
                    </p>
                </div>

                <div>
                    <div
                        v-for="(item, index) in experience"
                        :key="item.company"
                        class="group border-t border-white/[0.08]"
                        @mouseenter="activeIndex = index"
                    >
                        <div
                            class="grid cursor-default gap-5 py-8 transition-all duration-300 md:grid-cols-[140px_1fr_auto]"
                            :class="activeIndex !== index ? 'opacity-40' : 'opacity-100'"
                        >
                            <span class="text-xs uppercase tracking-[0.08em] text-mauve">
                                {{ item.period }}
                            </span>

                            <div>
                                <h3
                                    class="display-font text-2xl font-medium tracking-tight text-cream transition-colors duration-300 group-hover:text-blush"
                                >
                                    {{ item.role }}
                                </h3>

                                <p class="mt-1 text-sm text-accent">
                                    {{ item.company }}
                                </p>

                                <p class="mt-5 max-w-xl text-sm leading-6 text-mauve">
                                    {{ item.description }}
                                </p>

                                <div class="mt-5 flex flex-wrap gap-2">
                                    <span
                                        v-for="technology in item.technologies"
                                        :key="technology"
                                        class="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-[11px] text-mauve transition-all duration-300 group-hover:border-accent/20 group-hover:text-cream"
                                    >
                                        {{ technology }}
                                    </span>
                                </div>
                            </div>

                            <span class="hidden text-xs text-cream/25 md:block"> 0{{ index + 1 }} </span>
                        </div>
                    </div>

                    <div class="border-t border-white/[0.08]"></div>
                </div>
            </div>
        </div>
    </section>
</template>
