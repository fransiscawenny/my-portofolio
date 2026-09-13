<script setup>
import Navbar from "../components/navigation/Navbar.vue";
import Hero from "../components/hero/Hero.vue";
import About from "../components/about/About.vue";
import Experience from "../components/experience/Experience.vue";
import Projects from "../components/projects/Projects.vue";
import HowIThink from "../components/philosophy/HowIThink.vue";
import Skills from "../components/skills/Skills.vue";
import Contact from "../components/contact/Contact.vue";
</script>

<template>
    <div>
        <Navbar />

        <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <HowIThink />
            <Skills />
            <Contact />
        </main>
    </div>
</template>
