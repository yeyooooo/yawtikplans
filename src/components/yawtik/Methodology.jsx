import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import HlsVideo from "./HlsVideo";
import { useLang, MEDIA } from "./i18n";

export default function Methodology({ onCtaClick }) {
    const { t } = useLang();
    return (
        <section
            id="methodology"
            className="relative overflow-hidden"
            style={{ minHeight: 620 }}
            data-testid="methodology"
        >
            <HlsVideo
                src={MEDIA.hlsVideo}
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ filter: "saturate(0.7) contrast(1.05)" }}
                testId="methodology-video"
            />
            <div className="absolute inset-0 bg-black/70 z-0" />
            <div
                className="absolute top-0 left-0 right-0 z-0 pointer-events-none"
                style={{ height: 180, background: "linear-gradient(to bottom, #0a0a0a, transparent)" }}
            />
            <div
                className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
                style={{ height: 180, background: "linear-gradient(to top, #0a0a0a, transparent)" }}
            />

            <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10 text-center flex flex-col items-center justify-center py-32">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="liquid-glass rounded-none px-3.5 py-1 mb-6 inline-block"
                >
                    <span className="text-xs font-bold text-white font-body uppercase tracking-widest">
                        {t.methodology.badge}
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.75 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white max-w-3xl"
                    data-testid="methodology-title"
                >
                    {t.methodology.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white/70 font-body font-light text-sm md:text-base max-w-xl mx-auto mt-6"
                >
                    {t.methodology.sub}
                </motion.p>

                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    onClick={onCtaClick}
                    className="liquid-glass-strong rounded-none px-6 py-3 mt-10 inline-flex items-center gap-2 text-white font-body font-bold uppercase tracking-widest text-xs"
                    data-testid="methodology-cta"
                >
                    {t.methodology.cta}
                    <ArrowUpRight className="w-4 h-4" />
                </motion.button>
            </div>
        </section>
    );
}
