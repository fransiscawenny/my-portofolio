import { onMounted, onUnmounted } from "vue";
import Lenis from "lenis";
import { gsap } from "gsap";

let lenisInstance = null;

export function useLenis() {
    onMounted(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        lenisInstance = new Lenis({
            duration: 1.15,
            smoothWheel: true,
            syncTouch: false,
            wheelMultiplier: 0.9,
            touchMultiplier: 1,
        });

        const update = (time) => {
            lenisInstance?.raf(time * 1000);
        };

        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        onUnmounted(() => {
            gsap.ticker.remove(update);
            lenisInstance?.destroy();
            lenisInstance = null;
        });
    });
}

export function getLenis() {
    return lenisInstance;
}
