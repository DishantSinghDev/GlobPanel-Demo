import Layout from "@/components/layout";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

export default function Pro() {
    return (
        <>
            <Layout
            meta={{ title: 'Pro Plan | GlobPanel' }}
            >
                <motion.h2
                    className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                    <Balancer>Pro plan is Coming Soon!</Balancer>
                </motion.h2>
            </Layout>
        </>
    )
}