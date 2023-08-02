import Layout from "@/components/layout";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Link from "next/link";




export default function Hosting() {

    return (
        <>
            <Layout 
            meta={{ title: 'Hosting | GlobPanel' }}
            >
                <motion.div>
                    <Link
                        href="/hosting/standard"
                        className="relative z-10 mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
                    >
                        <motion.p className="text-sm font-semibold text-[#1d9bf0]">
                            Avail Offer Now!
                        </motion.p>
                    </Link>
                    <motion.h1
                        className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                    >
                        <Balancer>Most reliable and Free RDP hosting.</Balancer>
                    </motion.h1>
                    <motion.p
                        className="relative mt-6 z-10 text-center text-gray-500 md:text-xl"
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                    >
                        <Balancer>
                            Our virtual instance or RDP is available for everyone for completely FREE. We provide VM for according to your usage and choice.
                        </Balancer>
                    </motion.p>
                    <motion.div
                        className="relative w-full border p-4 text-xl font-bold text-black my-20 rounded border-2 border-bottom text-center"
                    >
                        Our RDP Hosting plans
                    </motion.div>
                    <motion.div
                    className="w-full flex flex-row flex-wrap justify-center"
                    >

                        <Link href="/hosting/standard" className="relative mb-10 md:mr-10 z-10">
                            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>

                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Standard Plan</h5>

                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Click here to check out our completely FREE high end Virtual Machine.</p>
                            </div>
                        </Link>

                        <Link href="/hosting/pro" className="relative z-10">
                            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>

                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Pro Plan</h5>

                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Click here to check out our super high end Virtual Machine at cheapest rate.</p>
                            </div>
                        </Link>

                    </motion.div>
                </motion.div>
            </Layout>
        </>
    )
}
