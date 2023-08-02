import React, { useState } from "react";
import { motion, useCycle } from "framer-motion";
import { Menu, X, Home, Wrench, Server, Users, MessageSquare, DollarSign } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
    { name: "Home",pagename: "", to: "/", id: 1, icon: <Home /> },
    { name: "Tools",pagename: "tools", to: "/tools", id: 2, icon: <Wrench /> },
    { name: "Hosting",pagename: "hosting", to: "/hosting", id: 3, icon: <Server /> },
    { name: "Pricing",pagename: "pricing", to: "/pricing", id: 3, icon: <DollarSign /> },
    { name: "About",pagename: "about", to: "/about", id: 4, icon: <Users /> },
    { name: "Contact",pagename: "contact", to: "/contact", id: 5, icon: <MessageSquare /> }
];

const itemVariants = {
    closed: {
        display: "none",
        opacity: 0
    },
    open: { opacity: 1, display: "inline" }
};

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
};

export default function MobMenu() {
    const [open, cycleOpen] = useCycle(false, true);
    const router = useRouter();
    const pageName = router.pathname.split("/")[1];

    return (
        <div className="inline-block md:hidden">
            
                {open && (
                    <motion.aside
                        className="mob-aside absolute"
                        initial={{ width: 0 }}
                        animate={{
                            width: 300
                        }}
                        exit={{
                            width: 0,
                            transition: { delay: 0.7, duration: 0.3 }
                        }}
                    >
                        <motion.div
                            className="mob-container"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sideVariants}
                        >
                            {links.map(({ name, to, id, icon, pagename }) => (
                                <motion.div
                                    key={id}
                                    variants={itemVariants}
                                >
                                    <Link href={to} className={`${pageName === pagename ? "bg-gray-200 hover:bg-gray-200" : ""
                  } mob-link rounded hover:bg-gray-100`}>
                                        <span className="my-2 mx-2 ">{icon}</span>{name}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.aside>
                )}
            
            <div className="btn-container">
                <button className="mob-button" onClick={() => cycleOpen()}>{open ? <X /> : <Menu />}</button>
            </div>
        </div>
    );
}
