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
        <div class="relative overflow-hidden">
            <div class="relative flex items-center justify-center">
                <img
                    v-if="project.image"
                    :src="project.image"
                    :alt="project.title"
                    loading="lazy"
                    class="relative z-10 block h-auto w-full rounded-2xl transition-transform duration-700 group-hover:-translate-y-2"
                />
            </div>

            <!-- <div
                class="absolute left-5 top-7 z-20 rounded-full border border-accent/20 bg-plum/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-cream backdrop-blur-md transition-all duration-300 group-hover:border-accent/40 group-hover:bg-plum/75"
            >
                {{ project.category }}
            </div> -->

            <div
                class="absolute bottom-3 md:bottom-6 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-ink transition-all duration-300 group-hover:rotate-45 group-hover:bg-blush"
            >
                <ArrowUpRight :size="20" />
            </div>
        </div>

        <div class="mt-8 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
                <p class="mb-2 text-xs text-mauve/60">
                    {{ project.number }}
                </p>

                <h3 class="display-font text-2xl font-medium tracking-tight text-cream transition-colors duration-300 group-hover:text-blush">
                    {{ project.title }}
                </h3>
            </div>

            <p class="max-w-md text-justify text-sm leading-6 text-mauve">
                {{ project.description }}
            </p>
        </div>
    </RouterLink>
</template>
