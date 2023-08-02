import Layout from "@/components/layout";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import getSymbol from 'currency-symbol-map';
import { useSession } from "next-auth/react";
import { useSignInModal } from "@/components/layout/sign-in-modal";
import Link from "next/link";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Balancer from "react-wrap-balancer";

export default function Pricing() {
    const { SignInModal, setShowSignInModal } = useSignInModal();
    const { data: session, status } = useSession();
    const { email, image, name } = session?.user || {};
    const [userData, setUserData] = useState({
        ipAddress: '',
        country: '',
        currency: ''
    });
    const [convertedAmount, setConvertedAmount] = useState<any>();

    useEffect(() => {
        fetch('https://api.ipdata.co?api-key=4b258af909382b876ca1bba57e01f8ba994aaf1de3cb0cf55a30156b')
            .then(response => response.json())
            .then(data => setUserData({
                ipAddress: data.ip,
                country: data.country_name,
                currency: data.currency.code
            }))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        if (userData.currency) {
            fetch(`https://api.exchangerate-api.com/v4/latest/INR`)
                .then(response => response.json())
                .then(data => setConvertedAmount(data.rates[userData.currency]))
                .catch(error => console.error(error));
        }
    }, [userData.currency]);

    const currencySymbol = getSymbol(userData.currency);


    return (
        <>
            <Layout
            meta={{ title: 'Pricing | GlobPanel' }}
            >
            <SignInModal/>
            <motion.div>
                    <motion.a
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                        href="/my-account"
                        target="_blank"
                        rel="noreferrer"
                        className="relative z-10 mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
                    >
                        <motion.p className="text-sm font-semibold text-[#1d9bf0]">
                            Avail Offer Now!
                        </motion.p>
                    </motion.a>
                    <motion.h1
                        className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                    >
                        <Balancer>Most Cheapest and FREE VMs plan.</Balancer>
                    </motion.h1>
                    <motion.p
                        className="relative mt-6 z-10 text-center text-gray-500 md:text-xl"
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                    >
                        <Balancer>
                            Our virtual instance or RDP is available for FREE and at lowest cost.
                        </Balancer>
                    </motion.p>
                </motion.div>
            <motion.div
                    className="relative z-10 w-full flex flex-wrap justify-center"
                >

                    <div className="mt-20 max-w-md min-w-max mx-10 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold">{currencySymbol}</span>
                            <span className="text-5xl font-extrabold tracking-tight">0</span>
                            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                        </div>

                        <ul role="list" className="space-y-5 my-7">
                            <li className="flex space-x-3">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">8 Dedicated CPUs</span>
                            </li>
                            <li className="flex space-x-3">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">64GB Ram</span>
                            </li>
                            <li className="flex space-x-3">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">250GB SSD Storage</span>
                            </li>
                            <li className="flex space-x-3">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500">Upto 1Gbps Internet Speed</span>
                            </li>
                            <li className="flex space-x-3">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500">Windows 10/Ubuntu 22.04 LTS</span>
                            </li>
                            <li className="flex space-x-3">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500">Unlimited Transfer</span>
                            </li>
                            <li className="flex space-x-3 line-through decoration-gray-500">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500">Email support</span>
                            </li>
                        </ul>

                        {!session && status !== "loading" ? (
                            <button type="button" onClick={() => {
                                setShowSignInModal(true)

                            }}
                                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
                                Sign in
                            </button>
                        ) : (
                            <Link href="/hosting/standard">
                                <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
                            </Link>
                        )}
                    </div>

                    <div className="mt-20 max-w-md min-w-max mx-10 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Pro plan</h5>
                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold">{currencySymbol}</span>
                            <span className="text-5xl font-extrabold tracking-tight">
                            {convertedAmount &&
                                    convertedAmount.toFixed(3)*10
                                }
                            </span>
                            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                        </div>

                        <ul role="list" className="space-y-5 my-7">
                            <li className="flex space-x-3">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">8 Dedicated CPUs</span>
                            </li>
                            <li className="flex space-x-3">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">16GB Ram</span>
                            </li>
                            <li className="flex space-x-3">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">320GB SSD Storage</span>
                            </li>
                            <li className="flex space-x-3">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500">6Gbps Internet Speed</span>
                            </li>
                            <li className="flex space-x-3">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500">Any OS</span>
                            </li>
                            <li className="flex space-x-3">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500">6TB Transfer</span>
                            </li>
                            <li className="flex space-x-3">

                            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500">Phone & Email support</span>
                            </li>
                        </ul>

                        {!session && status !== "loading" ? (
                            <button type="button" onClick={() => {
                                setShowSignInModal(true)

                            }}
                                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
                                Sign in
                            </button>
                        ) : (
                            <Link href="/hosting/pro">
                                <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
                            </Link>
                        )}
                    </div>


                    {/* <div className="mt-20 max-w-md mx-10 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Premium plan</h5>
                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold">{currencySymbol}</span>
                            <span className="text-5xl font-extrabold tracking-tight">
                            {convertedAmount &&
                                    100*convertedAmount.toFixed(3)
                                }
                            </span>
                            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                        </div>

                        <ul role="list" className="space-y-5 my-7">
                            <li className="flex space-x-3">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">16 Dedicated CPUs</span>
                            </li>
                            <li className="flex space-x-3">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">32GB Ram</span>
                            </li>
                            <li className="flex space-x-3">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">640GB SSD Storage</span>
                            </li>
                            <li className="flex space-x-3">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500">7Gbps Internet Speed</span>
                            </li>
                            <li className="flex space-x-3">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500">User's premium choice</span>
                            </li>
                            <li className="flex space-x-3 line-through decoration-gray-500">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
                            </li>
                            <li className="flex space-x-3 line-through decoration-gray-500">

                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
                                <span className="text-base font-normal leading-tight text-gray-500">Phone & Email support</span>
                            </li>
                        </ul>

                        {!session && status !== "loading" ? (
                            <button type="button" onClick={() => {
                                setShowSignInModal(true)

                            }}
                                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
                                Sign in
                            </button>
                        ) : (
                            <Link href="/hosting/standard">
                                <button type="button" disabled className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Cooming Soon!</button>
                            </Link>
                        )}
                    </div> */}


                </motion.div>
            </Layout>
        </>
    )
}