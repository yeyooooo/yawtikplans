import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLang, MEDIA } from "./i18n";

function Row({ reverse, title, body, cta, img, videoSrc, label, onCtaClick, index }) {
    const [videoFailed, setVideoFailed] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
            className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
        >
            <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white leading-[0.95] tracking-tight max-w-lg">
                    {title}
                </h3>
                <p className="text-white/60 font-body font-light text-sm md:text-base mt-6 max-w-md leading-relaxed">
                    {body}
                </p>
                <button
                    onClick={onCtaClick}
                    className="mt-8 liquid-glass-strong rounded-none px-6 py-3 inline-flex items-center gap-2 text-white font-body font-bold uppercase tracking-widest text-xs"
                    data-testid={`chess-cta-${index}`}
                >
                    {cta}
                    <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>
            <div className="liquid-glass rounded-none overflow-hidden relative h-[340px] md:h-[460px]">
                <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                {videoSrc && !videoFailed ? (
                    <video
                        src={videoSrc}
                        poster={img}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={() => setVideoFailed(true)}
                    />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent mix-blend-overlay" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/70 text-[10px] font-body font-bold uppercase tracking-widest">
                    <span>{label}</span>
                    <span className="flex items-center gap-1.5">
                        <span className="inline-block w-1.5 h-1.5 bg-primary animate-pulse" />
                        REEL
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

export default function FeaturesChess({ onCtaClick }) {
    const { t } = useLang();
    return (
        <section id="expertise" className="relative py-24 md:py-32 px-6 lg:px-10" data-testid="features-chess">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 md:mb-24 text-left">
                    <div className="liquid-glass rounded-none inline-block px-3.5 py-1 mb-5">
                        <span className="text-xs font-bold text-white font-body uppercase tracking-widest">
                            {t.chess.badge}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-3xl">
                        {t.chess.title}
                    </h2>
                </div>

                <div className="flex flex-col gap-24 md:gap-32">
                    <Row
                        index={0}
                        title={t.chess.r1t}
                        body={t.chess.r1b}
                        cta={t.chess.r1c}
                        img={MEDIA.chessImg1}
                        videoSrc={MEDIA.chessVideo1}
                        label="LA CASONA · PASTA"
                        onCtaClick={onCtaClick}
                    />
                    <Row
                        index={1}
                        reverse
                        title={t.chess.r2t}
                        body={t.chess.r2b}
                        cta={t.chess.r2c}
                        img={MEDIA.chessImg2}
                        videoSrc={MEDIA.chessVideo2}
                        label="LA CASONA · PIZZA"
                        onCtaClick={onCtaClick}
                    />
                </div>
            </div>
        </section>
    );
}
