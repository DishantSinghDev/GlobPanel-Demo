import Layout from "@/components/layout";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { useSession } from "next-auth/react";
import RdpList from "@/components/rdp";


export default function StandardPlan() {
    const { data: session, status } = useSession();
    return (
        <>
            <Layout
            meta={{ title: 'Pro Plan | GlobPanel' }}
            >
                {!session && status !== "loading" ? (
                    <motion.div>
                        <motion.h1
                            className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
                            variants={FADE_DOWN_ANIMATION_VARIANTS}
                        >
                            <Balancer>Standard plan.</Balancer>
                        </motion.h1>
                        <motion.p
                            className="relative mt-6 z-10 text-center text-gray-500 md:text-xl"
                            variants={FADE_DOWN_ANIMATION_VARIANTS}
                        >
                            <Balancer>
                                Our standard plan is completely Free and offers great specifications for your advance work.
                            </Balancer>
                        </motion.p>
                        <motion.div
                            className="relative z-10 flex w-full mt-10 items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
                        >
                            <motion.p>This plan requires Users account.</motion.p>
                        </motion.div>
                        <motion.div
                            className="relative z-10 m-10 leading-loose text-center"
                        >
                            <motion.h2 className="text-xl my-4 font-bold">What we provide?</motion.h2>
                            Remote Desktop Protocol (RDP) is a powerful technology that allows users to access a remote PC over the internet. At our hosting service, we offer a free RDP hosting plan that provides 4vCPUs, 8GB of RAM, 160GB of SSD storage, 5Gbps speed, and 5TB of transfer, all on Windows 10. In this article, we will discuss the benefits of using our free RDP hosting service.

                            <motion.h2 className="text-xl my-4 font-bold">Cost-Effective</motion.h2>
                            Our RDP hosting service is completely free, which makes it a cost-effective solution for businesses and individuals looking to save money on hosting. You do not have to pay for expensive hardware or maintenance costs, making it a great solution for those on a budget.

                            <motion.h2 className="text-xl my-4 font-bold">Access Your Data Anywhere, Anytime</motion.h2>
                            One of the biggest benefits of our RDP hosting service is that you can access your data from anywhere, at any time. All you need is an internet connection, and you can connect to your remote desktop and access your files, applications, and data.

                            <motion.h2 className="text-xl my-4 font-bold">Increased Productivity</motion.h2>
                            With our RDP hosting service, you can work from anywhere, allowing you to be more productive. You do not have to be in the office to get work done, which means you can work from home, while traveling, or from any location that has an internet connection.

                            <motion.h2 className="text-xl my-4 font-bold">Security and Backup</motion.h2>
                            Our RDP hosting service offers top-notch security, which ensures that your data is safe and secure. We also provide backup services to protect your data in case of a disaster or data loss.

                            <motion.h2 className="text-xl my-4 font-bold">Easy to Set Up and Use</motion.h2>
                            Our RDP hosting service is easy to set up and use. You do not need to be a technical expert to get started. We provide detailed instructions and support to help you get started quickly and easily.

                            <motion.h2 className="text-xl my-4 font-bold">Conclusion</motion.h2>
                            Our RDP hosting service offers a wide range of benefits for businesses and individuals looking for a cost-effective, secure, and easy-to-use hosting solution. With our free plan, you get access to powerful hardware, fast speeds, and 5TB of transfer, all on Windows 10. Sign up today and start experiencing the benefits of our free RDP hosting service!
                        </motion.div>
                        
                    </motion.div>
                ) : (
                    <motion.div>
                        <motion.h1
                            className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
                            variants={FADE_DOWN_ANIMATION_VARIANTS}
                        >
                            <Balancer>Welcome to Standard plan!</Balancer>
                        </motion.h1>
                        <motion.p
                            className="relative mt-6 z-10 text-center text-gray-500 md:text-xl"
                            variants={FADE_DOWN_ANIMATION_VARIANTS}
                        >
                            <Balancer>
                                Now you can sit back and enjoy the FREE RDP with great specifications.
                            </Balancer>
                        </motion.p>
                        <motion.div
                        className="flex w-full justify-center"
                        >
                        <RdpList/>
                        </motion.div>
                    </motion.div>
                )}
            </Layout>
            
        </>
    )
}