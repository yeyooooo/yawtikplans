import { createContext, useContext, useState, useEffect, useCallback } from "react";

export const translations = {
    en: {
        nav: {
            links: [
                { id: "home", label: "Home" },
                { id: "expertise", label: "Expertise" },
                { id: "work", label: "Work" },
                { id: "methodology", label: "Methodology" },
                { id: "pricing", label: "Pricing" },
            ],
            cta: "Audit Your Brand",
        },
        hero: {
            badge: "Strategic Content. Any Industry.",
            title: "The Authority Your Brand Deserves",
            sub: "Cinematic direction. Data-driven distribution. Ruthless ROI. From restaurants to industrial and B2B, we engineer scalable digital growth through content and ads. This is audiovisual strategy, brutally refined.",
            cta1: "Scale Your Business",
            cta2: "View Our Reel",
            trusted: "Trusted by the industry's best",
        },
        methodology: {
            badge: "Our Ecosystem",
            title: "You plate it. We scale it.",
            sub: "Three pillars: Visual Production, Traffic Distribution, and Financial Scalability. A multidisciplinary approach to dominate your local market.",
            cta: "See the process",
        },
        chess: {
            badge: "Capabilities",
            title: "Cinematic looks. Surgical precision.",
            r1t: "Designed to stop the scroll. Built to convert.",
            r1b: "Every frame is intentional. From lighting to color grading, we craft visual identities that command attention — engineered for high-conversion Meta, TikTok and B2B LinkedIn campaigns, across any industry.",
            r1c: "Explore Production",
            r2t: "Traffic that actually buys.",
            r2b: "Beautiful videos mean nothing without eyeballs. Our ad strategists monitor every click, lead and sale, optimizing your budget in real-time to lower acquisition costs and maximize revenue — from reservations to industrial B2B pipelines.",
            r2c: "Explore Ads",
        },
        grid: {
            badge: "Why Yawtik CC",
            title: "A different breed of agency.",
            items: [
                { t: "Cinematic Identity", d: "High-end art direction, recording, and post-production that elevates your brand's perception instantly — gastronomy, industrial, B2B and beyond." },
                { t: "Data-Driven Ads", d: "We don't guess. We deploy targeted campaigns that turn viewers into paying customers and qualified B2B leads." },
                { t: "Financial Strategy", d: "Pricing structuring and ROI projections so every piece of content actively grows your bottom line." },
                { t: "Ruthless Execution", d: "Streamlined workflows from concept to launch. Speed and quality, without the traditional agency bloat." },
            ],
        },
        stats: {
            items: [
                { v: "1M+", l: "Targeted Impressions" },
                { v: "3.5x–5x", l: "ROAS Range" },
                { v: "5+", l: "Active Campaigns" },
                { v: "3", l: "Specialized Directors" },
            ],
        },
        testimonials: {
            badge: "Impact",
            title: "Don't take our word for it.",
            items: [
                { q: "The aesthetic transformation was immediate, but what impressed us most was how they tied the visuals directly to our sales funnel.", n: "Marketing Lead", r: "Hospitality Group" },
                { q: "They understand the business side. It's not just making a cool video; it's about closing sales, and they delivered.", n: "Operations Director", r: "Industrial B2B" },
                { q: "Having a team that handles creative, ads, and financial strategy in one place changed how we scale our brand.", n: "Founder", r: "Consumer Brand" },
            ],
        },
        pricing: {
            badge: "Pricing",
            title: "Choose your scale.",
            sub: "Transparent monthly plans. Cancel anytime. Every plan is built on the same brutal focus: real revenue.",
            monthly: "/ month",
            choose: "Choose Plan",
            mostChosen: "Most Chosen",
            plans: [
                {
                    name: "Essential Presence",
                    tagline: "Organic presence and aesthetics.",
                    price: "$8,500",
                    includes: [
                        { ok: true, t: "4 high-quality monthly Reels" },
                        { ok: true, t: "1 monthly photo session" },
                        { ok: true, t: "Basic copywriting for posts" },
                        { ok: false, t: "Meta Ads management" },
                        { ok: false, t: "Specialized strategy" },
                        { ok: false, t: "Financial & ROI analysis" },
                    ],
                    addon: "Extra Account Management",
                    highlight: false,
                },
                {
                    name: "Traffic & Profitability",
                    tagline: "The game begins for real.",
                    price: "$10,000",
                    includes: [
                        { ok: true, t: "8 strategic monthly Reels" },
                        { ok: true, t: "Specialized content strategy" },
                        { ok: true, t: "Meta Ads campaign management" },
                        { ok: true, t: "Financial analysis (ROAS/CAC)" },
                        { ok: false, t: "Double photo session" },
                    ],
                    addon: "Extra Account Management",
                    highlight: true,
                },
                {
                    name: "Total Expansion",
                    tagline: "Total domination of your niche.",
                    price: "$16,000",
                    includes: [
                        { ok: true, t: "12 premium monthly Reels" },
                        { ok: true, t: "2 monthly photo sessions" },
                        { ok: true, t: "Advanced Meta Ads management" },
                        { ok: true, t: "Full financial strategy" },
                    ],
                    addon: "Extra Account Management",
                    highlight: false,
                },
            ],
        },
        cta: {
            title: "Ready to dominate your market?",
            sub: "Book a strategic audit. We'll analyze your current content, your ad spend, and show you exactly how Yawtik CC can scale your operations — restaurant, industrial or B2B.",
            book: "Book an Audit",
            services: "View Services",
        },
        contact: {
            title: "Let's talk.",
            sub: "Choose how you want to reach us. Both go straight to our team.",
            whatsapp: "WhatsApp",
            email: "Email",
            whatsappDesc: "Instant message, prefilled. Fastest reply.",
            emailDesc: "Send us a detailed brief to our inbox.",
            close: "Close",
            whatsappMsg: "Hello Yawtik CC, I'd like to book a strategic audit for my business. I'm interested in scaling with cinematic content and targeted ads.",
            emailSubject: "Strategic Audit Request – Yawtik CC",
            emailBody: "Hello Yawtik CC team,\n\nI'd like to book a strategic audit for my business. Please share availability and next steps.\n\nBusiness name: \nIndustry (restaurant / industrial / B2B / other): \nCity: \nCurrent monthly ad budget: \nBest time to call: \n\nThank you.",
        },
        footer: {
            copy: "© 2026 Yawtik CC. All rights reserved.",
            links: [
                { label: "Instagram", href: "https://www.instagram.com/yawtik_cc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { label: "Contact", href: "#contact" },
            ],
        },
    },
    es: {
        nav: {
            links: [
                { id: "home", label: "Inicio" },
                { id: "expertise", label: "Expertise" },
                { id: "work", label: "Trabajo" },
                { id: "methodology", label: "Metodología" },
                { id: "pricing", label: "Precios" },
            ],
            cta: "Auditar tu Marca",
        },
        hero: {
            badge: "Contenido Estratégico. Cualquier Industria.",
            title: "La Autoridad Que Tu Marca Merece",
            sub: "Dirección cinematográfica. Distribución basada en datos. ROI implacable. Desde restaurantes hasta industrial y B2B, diseñamos crecimiento digital escalable con contenido y ads. Esto es estrategia audiovisual, brutalmente refinada.",
            cta1: "Escala tu Negocio",
            cta2: "Ver nuestro Reel",
            trusted: "Con la confianza de los mejores",
        },
        methodology: {
            badge: "Nuestro Ecosistema",
            title: "Tú lo construyes. Nosotros lo escalamos.",
            sub: "Tres pilares: Producción Visual, Distribución de Tráfico y Escalabilidad Financiera. Un enfoque multidisciplinario para dominar tu mercado — ya seas restaurante, operación industrial o empresa B2B.",
            cta: "Ver el proceso",
        },
        chess: {
            badge: "Capacidades",
            title: "Estética cinematográfica. Precisión quirúrgica.",
            r1t: "Diseñado para frenar el scroll. Construido para convertir.",
            r1b: "Cada frame es intencional. Desde la iluminación hasta el color grading, creamos identidades visuales que exigen atención — diseñadas para campañas de alta conversión en Meta, TikTok y LinkedIn B2B, en cualquier industria.",
            r1c: "Explorar Producción",
            r2t: "Tráfico que sí compra.",
            r2b: "Los videos bonitos no sirven sin ojos encima. Nuestros estrategas monitorean cada clic, lead y venta, optimizando tu presupuesto en tiempo real para bajar el CAC y maximizar ingresos — desde reservaciones hasta pipelines industriales B2B.",
            r2c: "Explorar Ads",
        },
        grid: {
            badge: "Por qué Yawtik CC",
            title: "Otra raza de agencia.",
            items: [
                { t: "Identidad Cinematográfica", d: "Dirección de arte, grabación y postproducción de alto nivel que eleva la percepción de tu marca al instante — gastronomía, industrial, B2B y más." },
                { t: "Ads Basados en Datos", d: "No adivinamos. Desplegamos campañas dirigidas que convierten espectadores en clientes que pagan y leads B2B calificados." },
                { t: "Estrategia Financiera", d: "Estructura de precios y proyecciones de ROI para que cada pieza de contenido haga crecer tu facturación." },
                { t: "Ejecución Implacable", d: "Flujos de trabajo ágiles del concepto al lanzamiento. Velocidad y calidad, sin la grasa de la agencia tradicional." },
            ],
        },
        stats: {
            items: [
                { v: "1M+", l: "Impresiones Dirigidas" },
                { v: "3.5x–5x", l: "Rango de ROAS" },
                { v: "5+", l: "Campañas Activas" },
                { v: "3", l: "Directores Especializados" },
            ],
        },
        testimonials: {
            badge: "Impacto",
            title: "No nos creas a nosotros.",
            items: [
                { q: "La transformación estética fue inmediata, pero lo que más nos impresionó fue cómo ataron los visuales directamente a nuestro funnel de ventas.", n: "Líder de Marketing", r: "Grupo Hospitalidad" },
                { q: "Entienden el lado del negocio. No es solo hacer un video bonito; se trata de cerrar ventas, y lo cumplieron.", n: "Director de Operaciones", r: "Industrial B2B" },
                { q: "Tener un equipo que maneja lo creativo, los ads y la estrategia financiera en un solo lugar cambió cómo escalamos la marca.", n: "Fundador", r: "Marca de Consumo" },
            ],
        },
        pricing: {
            badge: "Precios",
            title: "Elige tu escala.",
            sub: "Planes mensuales transparentes. Cancela cuando quieras. Todos los planes comparten el mismo foco brutal: ingresos reales.",
            monthly: "/ mes",
            choose: "Elegir Plan",
            mostChosen: "Más Elegido",
            plans: [
                {
                    name: "Presencia Esencial",
                    tagline: "Presencia orgánica y estética.",
                    price: "$8,500",
                    includes: [
                        { ok: true, t: "4 Reels mensuales de alta calidad" },
                        { ok: true, t: "1 Sesión de fotos mensual" },
                        { ok: true, t: "Copywriting básico para posts" },
                        { ok: false, t: "Gestión de Meta Ads" },
                        { ok: false, t: "Estrategia especializada" },
                        { ok: false, t: "Análisis Financiero y Retorno" },
                    ],
                    addon: "Manejo de Cuenta Extra",
                    highlight: false,
                },
                {
                    name: "Tráfico y Rentabilidad",
                    tagline: "Empieza el juego en serio.",
                    price: "$10,000",
                    includes: [
                        { ok: true, t: "8 Reels mensuales estratégicos" },
                        { ok: true, t: "Estrategia de contenido especializada" },
                        { ok: true, t: "Gestión de campañas Meta Ads" },
                        { ok: true, t: "Análisis Financiero (ROAS/CAC)" },
                        { ok: false, t: "Doble sesión de fotos" },
                    ],
                    addon: "Manejo de Cuenta Extra",
                    highlight: true,
                },
                {
                    name: "Expansión Total",
                    tagline: "Dominio total de tu nicho.",
                    price: "$16,000",
                    includes: [
                        { ok: true, t: "12 Reels mensuales Premium" },
                        { ok: true, t: "2 Sesiones de fotos mensuales" },
                        { ok: true, t: "Gestión de Meta Ads Avanzada" },
                        { ok: true, t: "Estrategia Financiera Integral" },
                    ],
                    addon: "Manejo de Cuenta Extra",
                    highlight: false,
                },
            ],
        },
        cta: {
            title: "¿Listo para dominar tu mercado?",
            sub: "Agenda una auditoría estratégica. Analizamos tu contenido actual, tu gasto en ads y te mostramos exactamente cómo Yawtik CC puede escalar tus operaciones — restaurante, industrial o B2B.",
            book: "Agendar Auditoría",
            services: "Ver Servicios",
        },
        contact: {
            title: "Hablemos.",
            sub: "Elige cómo quieres contactarnos. Ambas llegan directo a nuestro equipo.",
            whatsapp: "WhatsApp",
            email: "Correo",
            whatsappDesc: "Mensaje instantáneo, precargado. Respuesta rápida.",
            emailDesc: "Envíanos un brief detallado a nuestra bandeja.",
            close: "Cerrar",
            whatsappMsg: "Hola Yawtik CC, me gustaría agendar una auditoría estratégica para mi negocio. Estoy interesado en escalar mi marca con contenido cinematográfico y ads dirigidos.",
            emailSubject: "Solicitud de Auditoría Estratégica – Yawtik CC",
            emailBody: "Hola equipo Yawtik CC,\n\nMe gustaría agendar una auditoría estratégica para mi negocio. Compartan disponibilidad y siguientes pasos.\n\nNombre del negocio: \nIndustria (restaurante / industrial / B2B / otra): \nCiudad: \nPresupuesto mensual actual en ads: \nMejor horario para llamada: \n\nGracias.",
        },
        footer: {
            copy: "© 2026 Yawtik CC. Todos los derechos reservados.",
            links: [
                { label: "Instagram", href: "https://www.instagram.com/yawtik_cc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { label: "Contacto", href: "#contact" },
            ],
        },
    },
};

const LangCtx = createContext({ lang: "en", t: translations.en, setLang: () => {} });

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState(() => {
        if (typeof window === "undefined") return "en";
        return localStorage.getItem("yawtik-lang") || "en";
    });
    useEffect(() => {
        document.documentElement.lang = lang;
        localStorage.setItem("yawtik-lang", lang);
    }, [lang]);
    const setLang = useCallback((l) => setLangState(l), []);
    const value = { lang, setLang, t: translations[lang] };
    return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() {
    return useContext(LangCtx);
}

export const CONTACT = {
    phone: "523411173818", // WhatsApp international format (Mexico +52)
    phoneDisplay: "+52 341-117-3818",
    email: "yawtikccworkteam@gmail.com",
};

export const MEDIA = {
    logoBlue: "https://customer-assets.emergentagent.com/job_a7ed5fb0-f469-4b3c-a7a0-4f240488174a/artifacts/a59dq84a_icono%20azul_1%20-%20copia.png",
    logoWhite: "https://customer-assets.emergentagent.com/job_a7ed5fb0-f469-4b3c-a7a0-4f240488174a/artifacts/mysple6e_icono%20blanco.png",
    logoName: "https://customer-assets.emergentagent.com/job_a7ed5fb0-f469-4b3c-a7a0-4f240488174a/artifacts/gs4caghr_Logo%20nombre%20blanco.png",
    heroVideoMp4: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085844_21a8f4b3-dea5-4ede-be16-d53f6973bb14.mp4",
    hlsVideo: "https://stream.mux.com/r6pXRAJb3005XEEbl1hYU1x01RFJDSn7KQApwNGgAHHbU.m3u8",
    chessImg1: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1400&q=80",
    chessImg2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    chessVideo1: "/media/la-casona-pasta.mov",
    chessVideo2: "/media/la-casona-pizza.mov",
};
