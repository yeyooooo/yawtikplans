import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLang } from "./i18n";

export default function Testimonials() {
    const { t } = useLang();
    return (
        <section className="relative py-24 md:py-32 px-6 lg:px-10 border-t border-white/5" data-testid="testimonials">
            <div className="mx-auto max-w-6xl">
                <div className="mb-14 text-left">
                    <div className="liquid-glass rounded-none inline-block px-3.5 py-1 mb-5">
                        <span className="text-xs font-bold text-white font-body uppercase tracking-widest">
                            {t.testimonials.badge}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-3xl">
                        {t.testimonials.title}
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {t.testimonials.items.map((ti, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.55, delay: i * 0.1 }}
                            className="liquid-glass rounded-none p-8 flex flex-col"
                            data-testid={`testimonial-${i}`}
                        >
                            <Quote className="w-6 h-6 text-primary mb-5 opacity-60" />
                            <p className="text-white/80 font-body font-light text-sm leading-relaxed flex-1">
                                {ti.q}
                            </p>
                            <div className="mt-8 pt-5 border-t border-white/10">
                                <div className="text-white font-body font-bold text-sm uppercase">
                                    {ti.n}
                                </div>
                                <div className="text-primary font-body font-bold text-xs tracking-widest mt-1 uppercase">
                                    {ti.r}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
