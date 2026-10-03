import logisticsDashboard from "../assets/images/logistics-dashboard.png";
import mostransMarketPlace from "../assets/images/mostrans-marketplace.jpeg";
import cagLogistic from "../assets/images/cag-logistic-platform.png";

export const projects = [
    {
        id: 1,
        slug: "digital-shipping-line-platform",
        number: "01",
        category: "Customer Platform",
        title: "Digital Shipping Line Platform",
        shortTitle: "Shipping Line Platform",
        description:
            "Shipping involves far more than booking a container. Behind every shipment are rates, containers, schedules, documentation, pickup, delivery, tracking, and invoicing — all connected to each other. This platform brings those moving pieces together into one digital shipping experience, helping customers move through the entire journey without jumping between disconnected processes.",
        role: "Full-Stack Developer",
        year: "2024 — Present",
        stack: ["Vue 3", "TypeScript", "Vite", "REST API", "DevExtreme", "Tailwind CSS", ".NET"],
        overview: [
            {
                label: "The challenge",
                text: "Shipping operations involve a lot of data, business rules, and dependencies. A change in one step can affect everything that comes after it, making the workflow difficult to navigate and maintain.",
            },
            {
                label: "What I built",
                text: "I developed full-stack features across the application, from interactive Vue interfaces to API integration and data handling, turning complex operational processes into structured workflows users could actually follow.",
            },
            {
                label: "How I contributed",
                text: "I worked closely with backend services and business requirements, handling API integration, validation, application state, reusable components, and data-heavy interfaces across different parts of the shipping journey.",
            },
            {
                label: "The result",
                text: "Instead of treating booking, container management, delivery, tracking, and invoicing as separate experiences, the platform connects them into one continuous workflow, giving users clearer visibility from the start of a shipment to its completion.",
            },
        ],
        image: logisticsDashboard,
        featured: true,
        url: "https://meratus-one.com/",
    },
    {
        id: 2,
        slug: "digital-transportation-platform",
        number: "02",
        category: "Logistics",
        title: "Digital Transportation Platform",
        shortTitle: "Transportation Platform",
        description:
            "Getting goods from one place to another involves more than finding a transporter. Orders need to be created, transportation needs to be arranged, and every party needs to know what happens next. This platform connects shippers and transport providers in one digital workflow, making it easier to manage transportation from order creation through fulfillment.",
        role: "Full-Stack Developer",
        year: "2022 — 2024",
        stack: ["React", "JavaScript", "Node.js", "Express", "GraphQL"],
        overview: [
            {
                label: "The challenge",
                text: "Transportation operations involve different parties, responsibilities, and information moving at the same time. Shippers need a way to create and manage their delivery needs, while transport providers need clear information about the jobs they are responsible for.",
            },
            {
                label: "What I built",
                text: "I helped turn these separate processes into one connected platform, building the workflows that allow businesses to manage transportation orders while giving transport providers the information they need to fulfill them.",
            },
            {
                label: "How I contributed",
                text: "I worked across the full stack using React, Node.js, Express, and GraphQL — building user interfaces, integrating APIs, handling application data, and connecting frontend workflows with backend services and business logic.",
            },
            {
                label: "The result",
                text: "The platform gave shippers and transport providers a shared digital workflow for managing transportation, replacing disconnected processes with a more structured way to create, coordinate, and track delivery operations.",
            },
        ],
        image: mostransMarketPlace,
        featured: true,
        url: "https://mostrans.co.id/CompanyProfile/",
    },
    {
        id: 3,
        slug: "digital-logistics-platform",
        number: "03",
        category: "Logistics",
        title: "Digital Logistics Platform",
        shortTitle: "Logistics Platform",
        description:
            "What started as a logistics operation involving shippers, transporters, and administrators became a digital platform where each role could manage its part of the journey. From creating a booking to assigning a transporter, creating a trip, and tracking the shipment, the platform connects the entire process in one system.",
        role: "Full-Stack Developer",
        year: "2026",
        stack: ["Vue 3", "JavaScript", "Vite", "Tailwind CSS", "GraphQL"],
        overview: [
            {
                label: "The challenge",
                text: "Different users need different tools, permissions, and information, but their workflows still depend on the same underlying shipment data. The challenge was connecting these experiences without making the system difficult to manage.",
            },
            {
                label: "What I built",
                text: "I developed full-stack features across role-based applications for shippers, transporters, and administrators, covering core workflows such as booking, transporter assignment, trip management, and shipment tracking.",
            },
            {
                label: "How I contributed",
                text: "I worked across Vue, GraphQL, application state, authentication, and role-based access, connecting frontend interactions with backend data and business logic to keep the different applications working as one system.",
            },
            {
                label: "The result",
                text: "The platform turned a multi-party logistics process into a connected digital workflow, giving each role the tools they need while keeping the overall shipment journey synchronized.",
            },
        ],
        image: cagLogistic,
        featured: true,
        url: "https://caglobal.id/",
    },
];
