import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Tabs from "@/components/Tabs";

export default function Home() {
  const { data: session } = useSession();
  const { name } = session?.user || {};

  return (
    <Layout>
      <motion.div
        className="z-10 max-w-xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.a
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          href="/my-account"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <motion.p className="text-sm font-semibold text-[#1d9bf0]">
            Welcome Back! {name}
          </motion.p>
        </motion.a>
        <motion.h1
          className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>The only Panel build for global.</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            An opinionated collection of Tools and Hostings.
          </Balancer>
        </motion.p>
        <motion.div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Link
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://dishis.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Powered by DishIs. Developed By Dishant Singh</p>
          </Link>
        </motion.div>
      </motion.div>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <div className="z-10 mt-20 px-2">

        <div className="max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Completely FREE RDP hosting @0.00 cost</h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest offer of all time and a chance to get Completely FREE RDP. You just need to signin with us.</p>

        </div>

      </div>
      <div className="z-10 w-full px-2">
        <div className="flex flex-row w-full mt-20 justify-evenly flex-wrap z-10">
          <Image
            src="./hosting.svg"
            alt={""}
            className="p-2 rounded-xl border border-gray-700 bg-white"
            width={400}
            height={400}
            draggable={false}
          ></Image>
          <Tabs />
        </div>
        <div className="flex flex-row w-full mt-20 justify-evenly flex-wrap z-10">
          <Tabs />
          <Image
            src="./panel.svg"
            alt={""}
            className="p-2 rounded-xl border border-gray-700 bg-white"
            width={400}
            height={400}
            draggable={false}
          ></Image>
        </div>
      </div>
      <div className="z-10 px-6 w-full">
        <hr className="my-10 border-gray-300 lg:my-20" />
      </div>
      <div className="z-10 px-2">

        <div className="max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Super Powerfull No Lag RDPs for FREE</h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The top high end specifications are in Your Region.</p>

        </div>

      </div>
      <div className="flex z-10 w-full flex-wrap justify-center items-center my-20">

        <div className="flex mb-10 md:mr-10 flex-col md:flex-row max-w-xs max-h-xl md:max-w-xl md:max-h-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image
            src="/cpu.png"
            alt="IP Fetcher"
            className="w-fit align-center pb-4 md:pr-4"
            width={100}
            height={100}
            draggable={false}
          >
          </Image>
          <div>

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">High Speed CPUs</h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Our RDP has the best dedicated vCPUs which makes our RDP high end.</p>
            
          </div>
        </div>
        <div className="flex mb-10 md:mr-10 flex-col md:flex-row max-w-xs max-h-xl md:max-w-xl md:max-h-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image
            src="/ram.png"
            alt="IP Fetcher"
            className="w-fit align-center pb-4 md:pr-4"
            width={100}
            height={100}
            draggable={false}
          >
          </Image>
          <div>

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">High Speed and Large RAM.</h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Our RDP contains DDR4 high speed RAM.</p>
            
          </div>
        </div>

        <div className="flex mb-10 flex-col max-w-xs max-h-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image
            src="/ssd.png"
            alt="IP Fetcher"
            className="w-fit align-center pb-4 md:pr-4"
            width={100}
            height={100}
            draggable={false}
          >
          </Image>
          <div>

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Superfast Nvme SSD Storage.</h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">our RDP has superfast Nvme SSD for best performance.</p>
            
          </div>
        </div>


        <div className="flex mb-10 md:ml-10 flex-col max-w-xs max-h-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image
            src="/internet.png"
            alt="IP Fetcher"
            className="w-fit align-center pb-4 md:pr-4"
            width={100}
            height={100}
            draggable={false}
          >
          </Image>
          <div>

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">High Speed Internet</h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Our RDP is supercharged with Upto 1Gbps Internet speed with 1ms latency.</p>
            
          </div>
        </div>

        <div className="flex mb-10 md:ml-10 flex-col md:flex-row max-w-xs max-h-xl md:max-w-xl md:max-h-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image
            src="/transfer.png"
            alt="IP Fetcher"
            className="w-fit align-center pb-4 md:pr-4"
            width={100}
            height={100}
            draggable={false}
          >
          </Image>
          <div>

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">More Data Transfer</h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">With our RDP you can Tranfer Unlimited data.</p>
            
          </div>
        </div>
        
        
      </div>

    </Layout>
  );
}


