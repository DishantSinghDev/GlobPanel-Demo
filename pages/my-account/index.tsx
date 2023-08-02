import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Tabs from "@/components/Tabs";

export default function MyAccount() {
  const { data: session, status } = useSession();
  const { email, image, name } = session?.user || {};

  return (
    <>
      <Layout
      meta={{ title: `${name} Account | GlobPanel` }}
      >
        {!session && status !== "loading" ? (
          <motion.div
            className="z-10 flex flex-col"
            initial="hidden"
            whileInView="show"
            animate="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.8,
                },
              },
            }}
          >
            <motion.h2
              className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              <Balancer>To access this Page Complete SignIn.</Balancer>
            </motion.h2>
            <Tabs/>
          </motion.div>
        ) : (
          
            <motion.div
              className="z-10 flex flex-col"
              initial="hidden"
              whileInView="show"
              animate="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.8,
                  },
                },
              }}
            >
              <motion.div
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="item-center mb-4 flex justify-center"
              >
                <Image
                  alt={`${email}`}
                  className="h-30 w-30 sm:h-30 sm:w-30 overflow-hidden rounded-full border border-gray-300 transition-all duration-75 focus:outline-none active:scale-95"
                  src={
                    image ||
                    `https://upload.wikimedia.org/wikipedia/commons/1/11/Solid_transparent.svg`
                  }
                  width={100}
                  height={100}
                  draggable={false}
                />
              </motion.div>
              <motion.h1
                className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
                variants={FADE_DOWN_ANIMATION_VARIANTS}
              >
                <Balancer>Welcome! {name}.</Balancer>
              </motion.h1>
            </motion.div>
          
        )}
      </Layout>
    </>
  );
}
