<script setup>
import { onMounted, ref, defineEmits } from "vue";
import { gsap, ScrollTrigger } from "../../composables/useGsap";

const emit = defineEmits(["revealNavbar"]);

const phone = ref(null);
const phoneScreen = ref(null);
const phoneContent = ref(null);
const phoneNotch = ref(null);
const glitterRef = ref(null);
const scrollPrompt = ref(null);

// Chat Element Refs
const turn1Q = ref(null);
const turn1A = ref(null);
const text1 = ref(null);

const turn2Q = ref(null);
const turn2A = ref(null);
const text2 = ref(null);

const turn3Q = ref(null);
const turn3A = ref(null);
const text3 = ref(null);

const turn4Q = ref(null);
const turn4A = ref(null);
const text4 = ref(null);

onMounted(() => {
    // Ambient glittering background particles
    const particles = glitterRef.value.querySelectorAll(".g-particle");
    particles.forEach((p) => {
        gsap.to(p, {
            opacity: 0.3,
            duration: Math.random() * 2 + 1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 2,
        });
    });

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
        emit("revealNavbar", true);
        if (scrollPrompt.value) scrollPrompt.value.style.display = "none";
        return;
    }

    const context = gsap.context(() => {
        // Unified Pinned ScrollTrigger Timeline
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-animation",
                start: "top top",
                end: "+=2000",
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true, // Recalculate dimensions on mobile viewport height changes
            },
        });

        timeline
            // 1. Fade out the initial prompt overlay inside the phone screen
            .to(scrollPrompt.value, { opacity: 0, scale: 0.9, duration: 0.03, ease: "power2.in" }, 0)

            // 2. Q&A Turn 1 Sequence
            .fromTo(turn1Q.value, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.04 }, 0.03)
            .fromTo(turn1A.value, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.03 }, 0.07)
            .to(
                text1.value,
                {
                    text: "I am a Frontend Developer specializing in Vue 3, JavaScript/TypeScript, and building scalable product interfaces with Tailwind & GSAP.",
                    duration: 0.08,
                    ease: "none",
                },
                0.08,
            )

            // 3. Q&A Turn 2 Sequence
            .fromTo(turn2Q.value, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.04 }, 0.18)
            .fromTo(turn2A.value, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.03 }, 0.22)
            .to(
                text2.value,
                {
                    text: "I take complex operational systems—like logistics and SaaS platforms—and simplify them into fast, intuitive, 60fps user experiences.",
                    duration: 0.08,
                    ease: "none",
                },
                0.23,
            )

            // 4. Q&A Turn 3 Sequence
            .fromTo(turn3Q.value, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.04 }, 0.33)
            .fromTo(turn3A.value, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.03 }, 0.37)
            .to(
                text3.value,
                {
                    text: "By combining modular architecture, performance-first rendering, and a product-minded approach that aligns design with backend capabilities.",
                    duration: 0.08,
                    ease: "none",
                },
                0.38,
            )

            // 5. Q&A Turn 4 Sequence
            .fromTo(turn4Q.value, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.04 }, 0.48)
            .fromTo(turn4A.value, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.03 }, 0.52)
            .to(text4.value, { text: "Yes! Open for full-time engineering roles. Let's connect below. 👇", duration: 0.08, ease: "none" }, 0.53)

            // 6. Full viewport expansion transition (uses 100% to remain flush against pinned container)
            .to(phone.value, { width: "100%", height: "100%", borderRadius: 0, borderWidth: 0, duration: 1, ease: "power3.inOut" }, 0.15)
            .to(phoneNotch.value, { opacity: 0, scale: 0.5, duration: 0.2 }, 0.15)
            .to(phoneScreen.value, { borderRadius: 0, duration: 1, ease: "power3.inOut" }, 0.15)
            .to(phoneContent.value, { scale: 1, duration: 1, ease: "power3.out" }, 0.15);

        // Navbar reveal threshold trigger
        ScrollTrigger.create({
            trigger: ".hero-animation",
            start: "top top",
            end: "+=2000",
            scrub: true,
            onUpdate: (self) => {
                emit("revealNavbar", self.progress > 0.4);
            },
        });
    });

    return () => context.revert();
});
</script>

<template>
    <section class="hero-animation relative min-h-screen overflow-hidden bg-ink py-0">
        <!-- Background Particles -->
        <div ref="glitterRef" class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <span
                v-for="n in 30"
                :key="n"
                class="g-particle absolute text-blush opacity-0 select-none"
                :style="{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 6 + 8}px`,
                }"
            >
                {{ n % 5 === 0 ? "✦" : n % 7 === 0 ? "♥" : "•" }}
            </span>
        </div>

        <div class="absolute inset-0 grid-background opacity-60 z-0"></div>

        <div
            class="absolute left-1/2 top-1/2 h-[300px] w-[300px] md:h-[500px] md:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[100px] z-0"
        ></div>

        <!-- Phone Center Wrapper -->
        <div class="relative z-10 flex h-full min-h-screen flex-col items-center justify-center p-0">
            <div
                ref="phone"
                class="relative h-[460px] w-[250px] sm:h-[500px] sm:w-[260px] md:h-[540px] md:w-[275px] overflow-hidden rounded-[36px] md:rounded-[42px] border-[5px] md:border-[6px] border-plumLight bg-plum shadow-[0_30px_90px_rgba(0,0,0,0.55)] my-auto"
            >
                <div ref="phoneNotch" class="absolute left-1/2 top-2 z-20 h-5 w-20 md:h-6 md:w-24 -translate-x-1/2 rounded-full bg-ink"></div>

                <div ref="phoneScreen" class="relative h-full w-full overflow-hidden rounded-[30px] md:rounded-[36px] bg-plum">
                    <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/[0.10] blur-[80px]"></div>
                    <div class="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blush/[0.07] blur-[70px]"></div>

                    <!-- Placeholder Prompt Overlay inside Phone -->
                    <div
                        ref="scrollPrompt"
                        class="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-center pointer-events-none"
                    >
                        <div
                            class="flex flex-col items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3.5 sm:p-4 backdrop-blur-md shadow-lg"
                        >
                            <div class="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-accent/20 text-accent">
                                <svg class="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                </svg>
                            </div>
                            <p class="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-cream">Scroll to reveal</p>
                            <p class="text-[7.5px] sm:text-[8px] text-mauve">Candidate overview inside</p>
                        </div>
                    </div>

                    <!-- Phone Screen Active Chat Content -->
                    <div
                        ref="phoneContent"
                        class="relative flex h-full w-full scale-[0.96] flex-col justify-between p-3.5 sm:p-5 md:p-6 overflow-y-auto"
                    >
                        <div>
                            <!-- Header -->
                            <div class="mb-2 sm:mb-2.5 flex items-center justify-between">
                                <span class="display-font text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-tight text-cream">
                                    Candidate Brief<span class="text-accent">.</span>
                                </span>
                                <div class="flex items-center gap-1.5">
                                    <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                    <span class="text-[7px] sm:text-[8px] text-mauve uppercase tracking-wider">HR Screening</span>
                                </div>
                            </div>

                            <p class="mb-1.5 text-[6.5px] sm:text-[7.5px] md:text-[8px] uppercase tracking-[0.25em] text-mauve">Quick Overview</p>

                            <!-- Chat Container -->
                            <div class="space-y-1.5 text-[7.5px] sm:text-[8.5px] md:text-[9.5px]">
                                <!-- Turn 1 -->
                                <div
                                    ref="turn1Q"
                                    class="opacity-0 rounded-lg rounded-tl-sm bg-white/[0.04] border border-white/[0.06] p-1.5 text-cream/90"
                                >
                                    <span class="text-accent font-semibold">Q:</span> Who are you and what is your core specialty?
                                </div>
                                <div
                                    ref="turn1A"
                                    class="opacity-0 rounded-lg rounded-tr-sm bg-accent/[0.12] border border-accent/20 p-1.5 text-cream"
                                >
                                    <span class="text-blush font-semibold">A:</span> <span ref="text1"></span>
                                </div>

                                <!-- Turn 2 -->
                                <div
                                    ref="turn2Q"
                                    class="opacity-0 rounded-lg rounded-tl-sm bg-white/[0.04] border border-white/[0.06] p-1.5 text-cream/90"
                                >
                                    <span class="text-accent font-semibold">Q:</span> What makes your engineering approach unique?
                                </div>
                                <div
                                    ref="turn2A"
                                    class="opacity-0 rounded-lg rounded-tr-sm bg-accent/[0.12] border border-accent/20 p-1.5 text-cream"
                                >
                                    <span class="text-blush font-semibold">A:</span> <span ref="text2"></span>
                                </div>

                                <!-- Turn 3 -->
                                <div
                                    ref="turn3Q"
                                    class="opacity-0 rounded-lg rounded-tl-sm bg-white/[0.04] border border-white/[0.06] p-1.5 text-cream/90"
                                >
                                    <span class="text-accent font-semibold">Q:</span> How do you ensure project success and code quality?
                                </div>
                                <div
                                    ref="turn3A"
                                    class="opacity-0 rounded-lg rounded-tr-sm bg-accent/[0.12] border border-accent/20 p-1.5 text-cream"
                                >
                                    <span class="text-blush font-semibold">A:</span> <span ref="text3"></span>
                                </div>

                                <!-- Turn 4 -->
                                <div
                                    ref="turn4Q"
                                    class="opacity-0 rounded-lg rounded-tl-sm bg-white/[0.04] border border-white/[0.06] p-1.5 text-cream/90"
                                >
                                    <span class="text-accent font-semibold">Q:</span> Are you currently available for hire?
                                </div>
                                <div
                                    ref="turn4A"
                                    class="opacity-0 rounded-lg rounded-tr-sm bg-accent/[0.12] border border-accent/20 p-1.5 text-cream"
                                >
                                    <span class="text-blush font-semibold">A:</span> <span ref="text4"></span>
                                </div>
                            </div>
                        </div>

                        <!-- Simulated Input Bar -->
                        <div
                            class="rounded-xl border border-white/[0.08] bg-white/[0.025] p-1.5 sm:p-2 backdrop-blur-sm flex items-center justify-between shadow-inner mt-1"
                        >
                            <span class="text-[7.5px] sm:text-[8.5px] md:text-[9px] text-mauve/70">Recruiter quick view</span>
                            <span
                                class="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-md bg-accent text-[8px] sm:text-[9px] text-ink font-bold shadow-sm"
                            >
                                ✓
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
