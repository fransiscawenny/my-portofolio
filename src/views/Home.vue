<script setup>
import { ref } from "vue";
import Navbar from "../components/navigation/Navbar.vue";
import Hero from "../components/hero/Hero.vue";
import About from "../components/about/About.vue";
import Experience from "../components/experience/Experience.vue";
import Projects from "../components/projects/Projects.vue";
import HowIThink from "../components/philosophy/HowIThink.vue";
import Skills from "../components/skills/Skills.vue";
import Contact from "../components/contact/Contact.vue";

const isNavbarVisible = ref(false);

const handleNavbarVisibility = (visible) => {
    isNavbarVisible.value = visible;
};
</script>

<template>
    <div>
        <Transition name="fade-nav">
            <Navbar v-if="isNavbarVisible" />
        </Transition>

        <main>
            <Hero @reveal-navbar="handleNavbarVisibility" />
            <About />
            <Experience />
            <Projects />
            <HowIThink />
            <Skills />
            <Contact />
        </main>
    </div>
</template>

<style>
.fade-nav-enter-active,
.fade-nav-leave-active {
    transition:
        opacity 0.4s ease,
        transform 0.4s ease;
}

.fade-nav-enter-from,
.fade-nav-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
