import { motion } from "framer-motion";
import { Check, X, ArrowUpRight } from "lucide-react";
import { Switch } from "../ui/switch";
import { useState } from "react";
import { useLang } from "./i18n";

function PlanCard({ plan, monthly, choose, onChoose, index, mostChosenLabel }) {
    const [addon, setAddon] = useState(false);
    const highlight = plan.highlight;
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            className="relative"
            data-testid={`plan-${index}`}
        >
            {highlight && (
                <div className="absolute -top-3 left-6 z-20 bg-primary text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                    <span className="inline-block w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    {mostChosenLabel}
                </div>
            )}
            <div
                className={`relative p-8 flex flex-col rounded-none h-full ${
                    highlight
                        ? "liquid-glass-strong border-primary"
                        : "liquid-glass border-l-2 border-primary/40"
                }`}
            >
            <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-heading italic text-white tracking-tight leading-none">
                    {plan.name}
                </h3>
                <p className="text-white/60 font-body font-light text-sm mt-2">
                    {plan.tagline}
                </p>
            </div>

            <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-white/10">
                <span className={`text-5xl md:text-6xl font-heading italic ${highlight ? "text-white" : "text-primary"}`}>
                    {plan.price}
                </span>
                <span className="text-white/60 font-body font-medium text-sm uppercase tracking-widest">
                    {monthly}
                </span>
            </div>

            <ul className="flex flex-col gap-3 mb-6 flex-1">
                {plan.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-3">
                        {inc.ok ? (
                            <span className="w-5 h-5 bg-primary text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="w-3 h-3" strokeWidth={3} />
                            </span>
                        ) : (
                            <span className="w-5 h-5 bg-white/5 text-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <X className="w-3 h-3" strokeWidth={2} />
                            </span>
                        )}
                        <span
                            className={`font-body text-sm ${inc.ok ? "text-white/90" : "text-white/30 line-through"}`}
                        >
                            {inc.t}
                        </span>
                    </li>
                ))}
            </ul>

            <div className="flex items-center justify-between py-4 border-t border-white/10 mb-6">
                <span className="text-white/70 font-body font-medium text-xs uppercase tracking-widest">
                    {plan.addon}
                </span>
                <Switch
                    checked={addon}
                    onCheckedChange={setAddon}
                    data-testid={`plan-${index}-addon-switch`}
                    className="data-[state=checked]:bg-primary"
                />
            </div>

            <button
                onClick={onChoose}
                className={`rounded-none px-6 py-3 inline-flex items-center justify-center gap-2 font-body font-bold uppercase tracking-widest text-xs transition ${
                    highlight
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-white text-black hover:bg-white/90"
                }`}
                data-testid={`plan-${index}-cta`}
            >
                {choose}
                <ArrowUpRight className="w-4 h-4" />
            </button>
            </div>
        </motion.div>
    );
}

export default function Pricing({ onCtaClick }) {
    const { t } = useLang();
    return (
        <section id="pricing" className="relative py-24 md:py-32 px-6 lg:px-10 border-t border-white/5" data-testid="pricing">
            <div className="mx-auto max-w-6xl">
                <div className="mb-14 text-left">
                    <div className="liquid-glass rounded-none inline-block px-3.5 py-1 mb-5">
                        <span className="text-xs font-bold text-white font-body uppercase tracking-widest">
                            {t.pricing.badge}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-3xl">
                        {t.pricing.title}
                    </h2>
                    <p className="text-white/60 font-body font-light text-sm md:text-base mt-5 max-w-2xl">
                        {t.pricing.sub}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-5 md:gap-4 pt-4">
                    {t.pricing.plans.map((plan, i) => (
                        <PlanCard
                            key={plan.name}
                            plan={plan}
                            monthly={t.pricing.monthly}
                            choose={t.pricing.choose}
                            onChoose={onCtaClick}
                            index={i}
                            mostChosenLabel={t.pricing.mostChosen}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
