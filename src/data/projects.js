import logisticsDashboard from "../assets/images/logistics-dashboard.png";
import mostransMarketPlace from "../assets/images/mostrans-marketplace.jpeg";
import cagLogistic from "../assets/images/cag-logistic-platform.png";

export const projects = [
    {
        id: 1,
        slug: "logistics-booking-platform",
        number: "01",
        category: "Enterprise Product",
        title: "Logistics Booking Platform",
        shortTitle: "Logistics Platform",
        description: "A complex logistics platform connecting container orders, rates, pickup, trips, tracking and invoicing into one workflow.",
        role: "Frontend Developer",
        year: "2024 — Present",
        stack: ["Vue 3", "JavaScript", "Vite", "GraphQL", "REST API", "DevExtreme", "Tailwind CSS"],
        image: logisticsDashboard,
        featured: true,
    },

    {
        id: 2,
        slug: "mostrans-marketplace",
        number: "02",
        category: "Marketplace",
        title: "Mostrans Marketplace",
        shortTitle: "Mostrans",
        description: "A transportation marketplace connecting shippers and transporters through dedicated web applications.",
        role: "Frontend Developer",
        year: "2022 — 2024",
        stack: ["React", "JavaScript", "Node.js", "REST API"],
        image: mostransMarketPlace,
        featured: true,
    },

    {
        id: 3,
        slug: "cag-logistics-platform",
        number: "03",
        category: "Logistics",
        title: "CAG Logistics Platform",
        shortTitle: "CAG",
        description: "A logistics administration platform covering booking, transporter assignment, trip management and shipment tracking.",
        role: "Frontend Developer",
        year: "2026",
        stack: ["Vue 3", "Vite", "Tailwind CSS", "GraphQL"],
        image: cagLogistic,
        featured: true,
    },
];
