<script setup>
import { gsap } from "../../composables/useGsap";
import { onMounted, onBeforeUnmount, ref } from "vue";

const glitterRef = ref(null);

let particles = [];
let ctx;

onMounted(() => {
    ctx = gsap.context(() => {
        particles = glitterRef.value.querySelectorAll(".global-particle");

        particles.forEach((particle) => {
            gsap.to(particle, {
                opacity: gsap.utils.random(0.15, 0.35),
                duration: gsap.utils.random(2.5, 5),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: gsap.utils.random(0, 4),
            });

            gsap.to(particle, {
                y: gsap.utils.random(-12, 12),
                x: gsap.utils.random(-8, 8),
                duration: gsap.utils.random(5, 10),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: gsap.utils.random(0, 3),
            });
        });
    }, glitterRef);
});

onBeforeUnmount(() => {
    ctx?.revert();
});
</script>

<template>
    <div ref="glitterRef" class="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
        <span
            v-for="n in 45"
            :key="n"
            class="global-particle absolute select-none text-blush opacity-0"
            :style="{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 4 + 6}px`,
            }"
        >
            {{ n % 5 === 0 ? "✦" : n % 7 === 0 ? "♥" : "•" }}
        </span>
    </div>
</template>
