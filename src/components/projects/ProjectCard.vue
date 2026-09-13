<script setup>
import { ArrowUpRight } from "lucide-vue-next";

defineProps({
    project: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <RouterLink
        :to="{
            name: 'project',
            params: {
                slug: project.slug,
            },
        }"
        class="group block"
    >
        <div
            class="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/[0.08] bg-plum transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-rose"
        >
            <div class="absolute inset-0 z-10 bg-gradient-to-br from-cream/[0.05] via-transparent to-accent/[0.06]"></div>

            <img
                v-if="project.image"
                :src="project.image"
                :alt="project.title"
                loading="lazy"
                class="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
            />

            <div class="absolute inset-0 z-10 bg-gradient-to-t from-ink/80 via-transparent to-transparent"></div>

            <div
                class="absolute left-5 top-5 z-20 rounded-full border border-accent/20 bg-plum/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-cream backdrop-blur-md transition-colors duration-300 group-hover:border-accent/40"
            >
                {{ project.category }}
            </div>

            <div
                class="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-ink transition-all duration-300 group-hover:rotate-45 group-hover:bg-blush group-hover:shadow-rose"
            >
                <ArrowUpRight :size="20" />
            </div>
        </div>

        <div class="mt-6 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
                <p class="mb-2 text-xs text-mauve/60">
                    {{ project.number }}
                </p>

                <h3 class="display-font text-2xl font-medium tracking-tight text-cream transition-colors duration-300 group-hover:text-blush">
                    {{ project.title }}
                </h3>
            </div>

            <p class="max-w-md text-sm leading-6 text-mauve md:text-right">
                {{ project.description }}
            </p>
        </div>
    </RouterLink>
</template>
