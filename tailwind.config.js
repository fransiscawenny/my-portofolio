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
                ink: "#17121A",
                plum: "#241827",
                plumLight: "#302035",

                surface: "#201821",
                surfaceLight: "#2A202B",

                accent: "#C88FA0",
                blush: "#E8B8C8",
                cream: "#F7F1F3",
                mauve: "#A99AA5",

                line: "#3A303A",
            },

            letterSpacing: {
                tighter: "-0.04em",
            },

            boxShadow: {
                rose: "0 20px 80px rgba(200, 143, 160, 0.16)",
                roseStrong: "0 20px 100px rgba(200, 143, 160, 0.25)",
            },

            backgroundImage: {
                "rose-gradient": "linear-gradient(135deg, #C88FA0 0%, #E8B8C8 100%)",

                "plum-gradient": "linear-gradient(135deg, #17121A 0%, #302035 100%)",

                "hero-gradient": "radial-gradient(circle at 50% 45%, rgba(200, 143, 160, 0.12), transparent 35%)",
            },
        },
    },

    plugins: [],
};
