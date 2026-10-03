/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js}"],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Space Grotesk", "sans-serif"],
                serif: ["DM Serif Display", "serif"],
            },

            colors: {
                ink: "#241B24",
                plum: "#352637",
                plumLight: "#4A3B50",

                surface: "#2A2228",
                surfaceLight: "#382F36",

                accent: "#B98294",
                blush: "#DDB8C3",
                cream: "#FAF7F8",
                mauve: "#8E818B",

                champagne: "#D8C3A5",

                line: "#E6DDE1",
            },

            letterSpacing: {
                tighter: "-0.04em",
            },

            boxShadow: {
                rose: "0 20px 80px rgba(185, 130, 148, 0.16)",
                roseStrong: "0 20px 100px rgba(185, 130, 148, 0.25)",
            },

            backgroundImage: {
                "rose-gradient": "linear-gradient(135deg, #B98294 0%, #DDB8C3 100%)",

                "plum-gradient": "linear-gradient(135deg, #241B24 0%, #4A3B50 100%)",

                "hero-gradient": "radial-gradient(circle at 50% 45%, rgba(185, 130, 148, 0.14), transparent 35%)",
            },
        },
    },

    plugins: [],
};
