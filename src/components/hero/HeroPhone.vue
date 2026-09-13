```vue
<script setup>
import { onMounted, ref } from "vue";
import { gsap, ScrollTrigger } from "../../composables/useGsap";

const phone = ref(null);
const phoneScreen = ref(null);
const phoneContent = ref(null);
const heroText = ref(null);
const phoneNotch = ref(null);

onMounted(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) return;

    const context = gsap.context(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-animation",
                start: "top top",
                end: "+=1800",
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            },
        });

        timeline
            .to(
                heroText.value,
                {
                    opacity: 0,
                    y: -80,
                    duration: 0.25,
                    ease: "power2.out",
                },
                0,
            )
            .to(
                phone.value,
                {
                    width: "min(92vw, 1100px)",
                    height: "min(72vh, 680px)",
                    borderRadius: 32,
                    duration: 0.8,
                    ease: "power3.inOut",
                },
                0.15,
            )
            .to(
                phone.value,
                {
                    borderWidth: 2,
                    duration: 0.8,
                    ease: "power3.inOut",
                },
                0.15,
            )
            .to(
                phoneNotch.value,
                {
                    opacity: 0,
                    scale: 0.7,
                    duration: 0.3,
                    ease: "power2.out",
                },
                0.2,
            )
            .to(
                phoneScreen.value,
                {
                    borderRadius: 24,
                    duration: 0.8,
                    ease: "power3.inOut",
                },
                0.15,
            )
            .to(
                phoneContent.value,
                {
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out",
                },
                0.25,
            )
            .to(
                ".hero-product-label",
                {
                    opacity: 0,
                    y: -30,
                    duration: 0.3,
                },
                0.2,
            );
    });

    return () => context.revert();
});
</script>

<template>
    <section class="hero-animation relative h-screen overflow-hidden bg-ink">
        <div class="absolute inset-0 grid-background opacity-60"></div>

        <div class="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[120px]"></div>

        <div class="absolute bottom-0 left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-blush/[0.04] blur-[120px]"></div>

        <div class="relative z-10 flex h-full flex-col items-center justify-center">
            <div ref="heroText" class="hero-product-label absolute top-[15%] text-center">
                <p class="mb-4 text-[10px] uppercase tracking-[0.35em] text-mauve">Scroll to explore</p>

                <div class="mx-auto h-12 w-px bg-gradient-to-b from-accent to-transparent"></div>
            </div>

            <div
                ref="phone"
                class="relative h-[520px] w-[270px] overflow-hidden rounded-[42px] border-[6px] border-plumLight bg-plum shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
            >
                <div ref="phoneNotch" class="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-ink"></div>

                <div ref="phoneScreen" class="relative h-full w-full overflow-hidden rounded-[36px] bg-plum">
                    <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/[0.10] blur-[80px]"></div>

                    <div class="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blush/[0.07] blur-[70px]"></div>

                    <div ref="phoneContent" class="relative flex h-full w-full scale-[0.96] flex-col justify-between p-7">
                        <div>
                            <div class="mb-14 flex items-center justify-between">
                                <span class="display-font text-sm font-semibold tracking-tight text-cream">
                                    FWS<span class="text-accent">.</span>
                                </span>

                                <span class="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(200,143,160,0.7)]"></span>
                            </div>

                            <p class="mb-4 text-[9px] uppercase tracking-[0.25em] text-mauve">Featured product</p>

                            <h2 class="display-font text-4xl font-medium leading-[0.92] tracking-[-0.05em] text-cream">
                                Logistics
                                <span class="editorial-font text-blush"> platform </span>
                            </h2>

                            <p class="mt-5 max-w-[200px] text-[11px] leading-5 text-mauve">Complex operations, simplified into one experience.</p>
                        </div>

                        <div class="space-y-2">
                            <div
                                v-for="(item, index) in ['Booking', 'Rates', 'Pickup', 'Tracking']"
                                :key="item"
                                class="group flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.025] p-3 backdrop-blur-sm"
                            >
                                <div class="flex items-center gap-3">
                                    <span class="flex h-6 w-6 items-center justify-center rounded-lg bg-accent/[0.10] text-[9px] text-accent">
                                        0{{ index + 1 }}
                                    </span>

                                    <span class="text-xs text-cream/80">
                                        {{ item }}
                                    </span>
                                </div>

                                <span class="text-[8px] uppercase tracking-[0.15em] text-accent"> View </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="absolute bottom-[8%] max-w-3xl px-6 text-center">
                <p class="display-font text-3xl font-medium leading-tight tracking-tight text-cream md:text-5xl">
                    I build
                    <span class="editorial-font text-blush"> digital products. </span>
                </p>

                <p class="mt-3 text-sm leading-6 text-mauve">From complex problems to simple experiences.</p>
            </div>
        </div>
    </section>
</template>
```
