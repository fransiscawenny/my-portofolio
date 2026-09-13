<script setup>
import { computed } from "vue";
import { ArrowLeft, ArrowUpRight } from "lucide-vue-next";
import { useRoute, RouterLink } from "vue-router";
import { projects } from "../data/projects";

const route = useRoute();

const project = computed(() => projects.find((item) => item.slug === route.params.slug));
</script>

<template>
    <div v-if="project">
        <header class="border-b border-white/10">
            <div class="page-container flex items-center justify-between py-6">
                <RouterLink to="/" class="group flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white">
                    <ArrowLeft :size="16" class="transition-transform group-hover:-translate-x-1" />

                    Back
                </RouterLink>

                <span class="display-font text-sm font-semibold"> Fransisca Wenny Sinambela<span class="text-accent">.</span> </span>
            </div>
        </header>

        <main>
            <section class="border-b border-white/10 py-24 md:py-40">
                <div class="page-container">
                    <p class="mb-6 text-xs uppercase tracking-[0.25em] text-accent">
                        {{ project.category }}
                    </p>

                    <h1 class="display-font max-w-6xl text-balance text-6xl font-medium leading-[0.9] tracking-tighter md:text-9xl">
                        {{ project.title }}
                    </h1>

                    <p class="mt-10 max-w-2xl text-lg leading-8 text-white/45">
                        {{ project.description }}
                    </p>

                    <div class="mt-12 flex flex-wrap gap-2">
                        <span
                            v-for="technology in project.stack"
                            :key="technology"
                            class="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50"
                        >
                            {{ technology }}
                        </span>
                    </div>
                </div>
            </section>

            <section class="border-b border-white/10 py-16 md:py-24">
                <div class="page-container">
                    <div class="aspect-[16/9] overflow-hidden rounded-3xl bg-[#101216]">
                        <img v-if="project.image" :src="project.image" :alt="project.title" class="h-full w-full object-cover" />
                    </div>
                </div>
            </section>

            <section class="border-b border-white/10 py-24 md:py-40">
                <div class="page-container">
                    <div class="grid gap-16 lg:grid-cols-[0.6fr_1.4fr]">
                        <div>
                            <p class="text-xs uppercase tracking-[0.2em] text-white/30">Overview</p>
                        </div>

                        <div>
                            <h2 class="display-font text-4xl font-medium tracking-tight md:text-6xl">
                                Building complexity
                                <span class="text-white/30"> without exposing it. </span>
                            </h2>

                            <div class="mt-10 space-y-6 text-base leading-7 text-white/45">
                                <p>
                                    This project involved building interfaces around a complex business workflow where multiple processes need to work
                                    together.
                                </p>

                                <p>
                                    My focus was creating reusable components, handling API integration, validating user input and making large
                                    amounts of information easier to understand.
                                </p>

                                <p>
                                    The goal was simple: users should be able to complete complicated operational tasks without the interface itself
                                    becoming complicated.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="border-b border-white/10 py-24 md:py-40">
                <div class="page-container">
                    <div class="grid gap-10 md:grid-cols-3">
                        <div>
                            <p class="text-xs text-white/30">Role</p>

                            <p class="mt-3 text-lg">
                                {{ project.role }}
                            </p>
                        </div>

                        <div>
                            <p class="text-xs text-white/30">Timeline</p>

                            <p class="mt-3 text-lg">
                                {{ project.year }}
                            </p>
                        </div>

                        <div>
                            <p class="text-xs text-white/30">Stack</p>

                            <p class="mt-3 text-lg">Vue · JavaScript · APIs</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-24 md:py-40">
                <div class="page-container">
                    <div class="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
                        <div>
                            <p class="mb-4 text-xs uppercase tracking-[0.2em] text-accent">Next</p>

                            <h2 class="display-font text-5xl font-medium tracking-tighter md:text-7xl">Keep exploring.</h2>
                        </div>

                        <RouterLink to="/" class="group flex items-center gap-2 text-sm">
                            Back to all work

                            <ArrowUpRight :size="18" class="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </RouterLink>
                    </div>
                </div>
            </section>
        </main>
    </div>

    <div v-else class="flex min-h-screen items-center justify-center">
        <p class="text-white/40">Project not found.</p>
    </div>
</template>
