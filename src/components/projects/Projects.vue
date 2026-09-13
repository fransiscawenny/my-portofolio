<script setup>
import SectionLabel from "../common/SectionLabel.vue";
import ProjectCard from "./ProjectCard.vue";
import { projects } from "../../data/projects";
</script>

<template>
    <section id="work" class="border-t border-white/[0.08] bg-ink py-32 md:py-48">
        <div class="page-container">
            <SectionLabel number="03" label="Selected work" />

            <div class="mb-20 grid gap-8 lg:grid-cols-[1fr_0.6fr]">
                <h2 class="display-font text-balance text-5xl font-medium leading-[0.95] tracking-tighter text-cream md:text-7xl">
                    Work that
                    <span class="text-cream/30"> solves </span>
                    real problems.
                </h2>

                <p class="max-w-md self-end text-sm leading-6 text-mauve">
                    A selection of products and platforms I've helped design, build and ship.
                </p>
            </div>

            <div class="space-y-24 md:space-y-40">
                <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
            </div>
        </div>
    </section>
</template>
