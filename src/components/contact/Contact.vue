<script setup>
import { ArrowUpRight } from "lucide-vue-next";
import SectionLabel from "../common/SectionLabel.vue";
</script>

<template>
    <section id="contact" class="border-t border-white/[0.08] bg-ink py-32 md:py-48">
        <div class="page-container">
            <SectionLabel number="06" label="Contact" />

            <div class="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-plum p-8 md:p-16">
                <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/[0.12] blur-3xl"></div>

                <div class="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-blush/[0.05] blur-3xl"></div>

                <div class="relative">
                    <p class="mb-8 text-xs uppercase tracking-[0.25em] text-accent">Have a project in mind?</p>

                    <h2 class="display-font max-w-5xl text-balance text-5xl font-medium leading-[0.9] tracking-tighter text-cream md:text-8xl">
                        Let's build
                        <span class="text-cream/30"> something useful. </span>
                    </h2>

                    <div class="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
                        <a
                            href="mailto:your@email.com"
                            class="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-medium text-ink transition-all duration-300 hover:scale-105 hover:bg-blush hover:shadow-rose"
                        >
                            Get in touch

                            <ArrowUpRight :size="18" class="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center justify-center rounded-full border border-white/[0.08] px-7 py-4 text-sm text-mauve transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.04] hover:text-cream"
                        >
                            LinkedIn ↗
                        </a>
                    </div>
                </div>
            </div>

            <footer class="mt-10 flex flex-col gap-3 text-xs text-mauve/50 sm:flex-row sm:items-center sm:justify-between">
                <span> © {{ new Date().getFullYear() }} Fransisca Wenny Sinambela </span>

                <span> Designed & built with Vue. </span>
            </footer>
        </div>
    </section>
</template>
