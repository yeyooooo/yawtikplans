import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLang, MEDIA } from "./i18n";
import BlurText from "./BlurText";

const partners = ["META", "DAVINCI", "TIKTOK", "GOOGLE ADS", "SONY"];

export default function Hero({ onCtaClick }) {
    const { t } = useLang();
    return (
        <section
            id="home"
            className="relative overflow-hidden grain"
            style={{ height: 1000 }}
            data-testid="hero"
        >
            {/* Video background */}
            <video
                src={MEDIA.heroVideoMp4}
                autoPlay
                loop
                muted
                playsInline
                className="absolute left-0 w-full h-auto object-cover z-0"
                style={{ top: "20%" }}
                data-testid="hero-video"
            />
            <div className="absolute inset-0 bg-black/55 z-0" />
            {/* Bottom gradient fade */}
            <div
                className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
                style={{
                    height: 320,
                    background: "linear-gradient(to bottom, transparent, #0a0a0a)",
                }}
            />
            {/* Top gradient fade so navbar reads */}
            <div
                className="absolute top-0 left-0 right-0 z-0 pointer-events-none"
                style={{
                    height: 180,
                    background: "linear-gradient(to top, transparent, rgba(0,0,0,0.7))",
                }}
            />

            {/* Content */}
            <div
                className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10 text-center flex flex-col items-center"
                style={{ paddingTop: 170 }}
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="liquid-glass rounded-none inline-flex items-center gap-2 px-2 py-1 mb-6"
                    data-testid="hero-badge"
                >
                    <span className="bg-primary text-white px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        Yawtik CC
                    </span>
                    <span className="text-white/80 text-xs md:text-sm font-body font-light pr-2">
                        {t.hero.badge}
                    </span>
                </motion.div>

                {/* Heading */}
                <BlurText
                    text={t.hero.title}
                    delay={100}
                    className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.85] max-w-4xl tracking-[-2px] mx-auto"
                />

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-sm md:text-base text-white/80 font-body font-light leading-relaxed max-w-2xl mx-auto mt-6"
                    data-testid="hero-sub"
                >
                    {t.hero.sub}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mt-10"
                >
                    <button
                        onClick={onCtaClick}
                        className="liquid-glass-strong rounded-none px-6 py-3 inline-flex items-center gap-2 text-white font-body font-bold uppercase tracking-widest text-xs"
                        data-testid="hero-cta-primary"
                    >
                        {t.hero.cta1}
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </motion.div>
            </div>

            {/* Partners bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute bottom-14 left-0 right-0 z-10 px-6 lg:px-10"
                data-testid="hero-partners"
            >
                <div className="mx-auto max-w-6xl">
                    <div className="liquid-glass rounded-none px-6 py-4 md:py-5">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                            <div className="text-[10px] md:text-xs font-body font-medium uppercase tracking-widest text-white/60 whitespace-nowrap">
                                {t.hero.trusted}
                            </div>
                            <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10 overflow-hidden">
                                {partners.map((p) => (
                                    <span
                                        key={p}
                                        className="text-xl md:text-2xl font-body font-bold text-white/40 uppercase tracking-widest"
                                    >
                                        {p}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
