import Layout from "@/components/layout";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";

export default function WebAnalytics() {
    const [domain, setDomain] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [showValidity, setShowValidity] = useState(false);
    const [ip, setIp] = useState('');


    const handleDomainChange = (event: { target: { value: any; }; }) => {
        const newDomain = event.target.value;
        setDomain(newDomain);

        // Regular expression to match valid domain names with valid extensions
        const domainRegex = /^(?!:\/\/)([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[a-zA-Z0-9_\-.\[\]%&amp;?!=\/~#]*)?$/;

        setIsValid(domainRegex.test(newDomain));
    };

    const handleInputBlur = () => {
        setShowValidity(true);
    };

    useEffect(() => {
        // Hide the "Valid domain" or "Invalid domain" message when the user starts typing again
        setShowValidity(false);
    }, [domain]);


    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        let dom = domain.trim();

        const url = `https://${dom}`


        async function fetchIp() {
            try {
                const response = await fetch(`http://172.105.50.149:5000/get_ip?url=www.${domain}`);
                const data = await response.json();
                setIp(data.ip[0]);
            } catch (error) {
                console.error(error);
                setIp("unable to get ip");
            }
        }

        fetchIp();



    };



    return (
        <>
            <Layout
            meta={{ title: 'Web Analytics | GlobPanel' }}
            >
                <motion.div className="container">
                    <motion.h1
                        className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                    >
                        <Balancer>Web Analytics</Balancer>
                    </motion.h1>
                    <motion.div className="z-10 m-20 relative">
                        <motion.p className="ml-20 font-md font-bold py-4">
                            Enter WebPage URL
                        </motion.p>
                        <form onSubmit={handleSubmit}>
                            <input type="text" className="w-9/12 backdrop-blur outline-stone-500 text-black  ml-6 py-2 px-4 md:ml-16" value={domain} onChange={handleDomainChange} onBlur={handleInputBlur} />
                            <button disabled={!isValid} className="py-2.5 border rounded ml-4 px-10 font-bold bg-gray-500 text-white" type="submit">Submit</button>
                            {showValidity && (isValid ? "" : <p className="text-red-500 ml-16 ">Enter a valid URL</p>)}
                        </form>
                    </motion.div>
                    <motion.div className=" z-10 relative">Ip Address: {ip}</motion.div>
                </motion.div>
            </Layout>
        </>
    )
}