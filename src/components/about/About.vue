<script setup>
import SectionLabel from "../common/SectionLabel.vue";
</script>

<template>
    <section id="about" class="border-t border-white/[0.08] bg-ink py-24 md:py-28">
        <div class="page-container">
            <SectionLabel number="01" label="About me" />

            <div class="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                    <p class="text-sm uppercase tracking-[0.2em] text-accent">Nice to meet you.</p>
                </div>

                <div>
                    <h2 class="display-font text-balance text-4xl font-medium leading-[1.05] tracking-tighter text-cream md:text-6xl">
                        I build web apps that run fast
                        <span class="text-cream/35"> behind the scenes </span>
                        and feel effortless on the screen.
                    </h2>

                    <div class="mt-12 max-w-2xl space-y-5 text-base leading-7 text-mauve md:text-lg">
                        <p>
                            A great digital product needs two things: a strong engine under the hood so nothing breaks, and a simple, friendly
                            interface so anyone can use it without getting confused. I build both sides.
                        </p>

                        <p>
                            From organizing complex business data to making sure every click feels smooth and instant, I turn complicated ideas into
                            reliable software that real people actually enjoy using.
                        </p>
                    </div>

                    <div class="mt-12 flex flex-wrap gap-3">
                        <!-- <a
                            href="https://github.com/fransiscawenny"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="rounded-full border border-white/[0.08] px-5 py-3 text-sm text-mauve transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.04] hover:text-cream"
                        >
                            GitHub ↗
                        </a> -->

                        <a
                            href="https://www.linkedin.com/in/fransisca-wenny-sinambela/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="rounded-full border border-white/[0.08] px-5 py-3 text-sm text-mauve transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.04] hover:text-cream"
                        >
                            LinkedIn ↗
                        </a>

                        <a
                            href="/CV_Fransisca_Wenny_Sinambela.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download Fransisca Wenny Sinambela CV as a PDF file, opens in a new tab"
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
