<script setup>
import SectionLabel from "../common/SectionLabel.vue";
</script>

<template>
    <section id="about" class="border-t border-white/[0.08] bg-ink py-32 md:py-48">
        <div class="page-container">
            <SectionLabel number="01" label="About me" />

            <div class="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                    <p class="text-sm uppercase tracking-[0.2em] text-accent">Nice to meet you.</p>
                </div>

                <div>
                    <h2 class="display-font text-balance text-4xl font-medium leading-[1.05] tracking-tighter text-cream md:text-6xl">
                        I'm a frontend developer who enjoys turning
                        <span class="text-cream/35"> complex problems </span>
                        into products people can actually use.
                    </h2>

                    <div class="mt-12 max-w-2xl space-y-5 text-base leading-7 text-mauve md:text-lg">
                        <p>
                            My work sits between engineering, product thinking and user experience. I enjoy building interfaces that are not only
                            visually polished, but also handle real-world business logic.
                        </p>

                        <p>
                            From logistics platforms and marketplaces to data-heavy enterprise applications, I've worked across the full frontend
                            development process — from understanding requirements to connecting APIs and shipping production features.
                        </p>
                    </div>

                    <div class="mt-12 flex flex-wrap gap-3">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="rounded-full border border-white/[0.08] px-5 py-3 text-sm text-mauve transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.04] hover:text-cream"
                        >
                            GitHub ↗
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="rounded-full border border-white/[0.08] px-5 py-3 text-sm text-mauve transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.04] hover:text-cream"
                        >
                            LinkedIn ↗
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="rounded-full bg-accent px-5 py-3 text-sm font-medium text-ink transition-all duration-300 hover:scale-105 hover:bg-blush hover:shadow-rose"
                        >
                            Resume ↗
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
