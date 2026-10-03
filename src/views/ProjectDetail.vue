<script setup>
import { computed, watch, nextTick, ref, onMounted } from "vue";
import { ArrowLeft, ArrowUpRight } from "lucide-vue-next";
import { useRoute, useRouter } from "vue-router";
import { projects } from "../data/projects";

const route = useRoute();
const router = useRouter();

const project = computed(() => projects.find((item) => item.slug === route.params.slug));
</script>

<template>
    <div v-show="project">
        <header class="border-b border-white/10">
            <div class="page-container flex items-center justify-between py-6">
                <button
                    @click="router.back()"
                    class="group flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white bg-transparent border-none cursor-pointer"
                >
                    <ArrowLeft :size="16" class="transition-transform group-hover:-translate-x-1" />
                    Back
                </button>

                <span class="display-font text-sm font-semibold"> Fransisca Wenny Sinambela<span class="text-accent">.</span> </span>
            </div>
        </header>

        <main>
            <section class="border-b border-white/10 py-10">
                <div class="page-container">
                    <p class="mb-6 text-xs uppercase tracking-[0.25em] text-accent">
                        {{ project.category }}
                    </p>

                    <h1 class="display-font max-w-6xl text-balance text-4xl font-medium leading-[0.9] tracking-tighter md:text-6xl">
                        {{ project.title }}
                    </h1>

                    <p class="mt-10 max-w-2xl text-justify text-lg leading-8 text-white/45">
                        {{ project.description }}
                    </p>

                    <a
                        v-if="project.url"
                        :href="project.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="group mt-8 inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-accent"
                    >
                        View live project
                        <ArrowUpRight :size="17" class="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>

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

            <section class="border-b border-white/10 py-10">
                <div class="page-container">
                    <div class="overflow-hidden rounded-3xl bg-[#101216]">
                        <img v-if="project.image" :src="project.image" :alt="project.title" class="h-auto w-full object-contain" />
                    </div>
                </div>
            </section>

            <section class="border-b border-white/10 py-10">
                <div class="page-container">
                    <div class="grid gap-14 lg:grid-cols-[0.6fr_1.4fr]">
                        <div>
                            <p class="text-xs uppercase tracking-[0.2em] text-white/30">Overview</p>
                        </div>

                        <div>
                            <h2 class="display-font text-4xl font-medium tracking-tight md:text-6xl">
                                Building complexity
                                <span class="text-white/30"> without exposing it. </span>
                            </h2>

                            <div class="mt-10 space-y-8 text-justify text-base leading-7 text-white/45">
                                <div v-for="(item, index) in project.overview" :key="index">
                                    <p>
                                        <span class="font-medium text-white">
                                            {{ item.label }}
                                        </span>
                                        <span class="text-white/45"> — {{ item.text }}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="border-b border-white/10 py-10">
                <div class="page-container">
                    <div class="grid gap-10 md:grid-cols-3">
                        <div>
                            <p class="text-xs text-white/30">Role</p>
                            <p class="mt-3 text-lg">{{ project.role }}</p>
                        </div>

                        <div>
                            <p class="text-xs text-white/30">Timeline</p>
                            <p class="mt-3 text-lg">{{ project.year }}</p>
                        </div>

                        <div>
                            <p class="text-xs text-white/30">Stack</p>
                            <p class="mt-3 text-lg">{{ project.stack.join(" · ") }}</p>
                        </div>
                    </div>
                    <button
                        @click="router.back()"
                        class="group flex items-center gap-2 text-sm bg-transparent border-none text-white cursor-pointer ml-auto mt-16"
                    >
                        Back to all work
                        <ArrowUpRight :size="18" class="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </button>
                </div>
            </section>
        </main>
    </div>

    <div v-show="!project" class="flex min-h-screen items-center justify-center">
        <p class="text-white/40">Project not found.</p>
    </div>
</template>
