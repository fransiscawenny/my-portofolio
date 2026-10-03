<script setup>
import { ref } from "vue";
import { ArrowUpRight, Menu, X } from "lucide-vue-next";

const isOpen = ref(false);

const links = [
    {
        label: "About",
        target: "#about",
    },
    {
        label: "Experience",
        target: "#experience",
    },
    {
        label: "Work",
        target: "#work",
    },
    {
        label: "Contact",
        target: "#contact",
    },
];

const scrollTo = (target) => {
    isOpen.value = false;

    document.querySelector(target)?.scrollIntoView({
        behavior: "smooth",
    });
};
</script>

<template>
    <header class="fixed left-0 right-0 top-0 z-50">
        <div class="page-container pt-5">
            <nav
                class="flex items-center justify-between rounded-full border border-white/[0.08] bg-plum/70 px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            >
                <!-- Logo -->
                <button
                    class="display-font text-sm font-semibold tracking-tight text-cream transition-colors hover:text-blush"
                    @click="scrollTo('#top')"
                >
                    Fransisca Wenny Sinambela<span class="text-accent">.</span>
                </button>

                <!-- Desktop Navigation -->
                <div class="hidden items-center gap-8 md:flex">
                    <button
                        v-for="link in links"
                        :key="link.target"
                        class="text-sm text-mauve transition-colors duration-300 hover:text-cream"
                        @click="scrollTo(link.target)"
                    >
                        {{ link.label }}
                    </button>

                    <!-- CTA -->
                    <button
                        class="group flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-ink transition-all duration-300 hover:scale-105 hover:bg-blush hover:shadow-[0_8px_30px_rgba(200,143,160,0.2)]"
                        @click="scrollTo('#contact')"
                    >
                        Let's talk

                        <ArrowUpRight :size="15" class="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                </div>

                <!-- Mobile Menu Button -->
                <button
                    class="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-cream transition-colors hover:border-accent/40 hover:text-blush md:hidden"
                    @click="isOpen = !isOpen"
                    :aria-label="isOpen ? 'Close menu' : 'Open menu'"
                    :aria-expanded="isOpen"
                >
                    <X v-if="isOpen" :size="18" />
                    <Menu v-else :size="18" />
                </button>
            </nav>

            <!-- Mobile Navigation -->
            <Transition name="menu">
                <div
                    v-if="isOpen"
                    class="mt-2 overflow-hidden rounded-3xl border border-white/[0.08] bg-plum/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl md:hidden"
                >
                    <div class="flex flex-col">
                        <button
                            v-for="link in links"
                            :key="link.target"
                            class="border-b border-white/[0.08] py-4 text-left text-lg text-cream transition-colors last:border-b-0 hover:text-blush"
                            @click="scrollTo(link.target)"
                        >
                            {{ link.label }}
                        </button>

                        <button
                            class="mt-4 flex items-center justify-between rounded-2xl bg-accent px-5 py-4 text-left text-sm font-medium text-ink transition-colors hover:bg-blush"
                            @click="scrollTo('#contact')"
                        >
                            <span>Let's talk</span>

                            <ArrowUpRight :size="18" />
                        </button>
                    </div>
                </div>
            </Transition>
        </div>
    </header>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
    transition:
        opacity 0.25s ease,
        transform 0.25s ease;
}

.menu-enter-from,
.menu-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
