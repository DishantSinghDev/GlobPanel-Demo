import { motion } from "framer-motion";
import { Cookie } from "lucide-react";
import React, { useState, useEffect } from 'react';

interface CookieConsentProps { }

export const CookieConsent: React.FC<CookieConsentProps> = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showNewBanner, setShowNewBanner] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(delay);
  }, []);



  const bannerText =
    'We use cookies to improve your experience on our site. By continuing to use our site, you agree to our use of cookies.';
  const buttonText = 'Got it!';

  const bannerClassName = showBanner ? '' : 'hidden';
  const newBannerClassName = showNewBanner ? '' : 'hidden';

  const handleConsentClick = () => {
    setIsVisible(false);
    setCookie('cookieConsent', 'true', 365);
    hideBanner();
  };

  const handleBannerClick = () => {
    setIsBannerVisible(false);
    setCookie('bannerConcent', 'true', 2);
    hideNewBanner();
  };

  const hideBanner = () => {
    setShowBanner(false);
  };

  const hideNewBanner = () => {
    setShowNewBanner(false);
  };

  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = name + '=' + value + expires + '; path=/';
  };

  const getCookie = (name: string) => {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  useEffect(() => {
    const consentCookie = getCookie('cookieConsent');
    const concentBanner = getCookie('bannerConcent')
    if (consentCookie !== 'true') {
      setShowBanner(true);
    }
    if (concentBanner !== 'true') {
      setShowNewBanner(true);
    }
  }, []);

  return (
    <>

      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring' }}
        className={`${bannerClassName} fixed z-20 bottom-4 rounded border left-4 backdrop-blur-sm`}>
        {isVisible ? (
          <motion.div className="px-4 flex justify-center items-center flex-row py-2">
            <motion.div className="pr-2">
              <Cookie />
            </motion.div>
            <motion.div className="text-gray-800">
              {bannerText}
              <motion.button onClick={handleConsentClick} className=" ml-2 rounded border px-3 py-1 bg-gray-400 text-gray-800">{buttonText}</motion.button>
            </motion.div>
          </motion.div>
        ) : null}
        {isBannerVisible ? (
          <motion.div id="informational-banner" className={`${newBannerClassName} relative z-10 fixed top-0 left-0 z-50 flex flex-col justify-between w-full p-4 border-b border-gray-200 md:flex-row bg-gray-50 dark:bg-gray-700 dark:border-gray-600`}>
            <motion.div className="mb-4 md:mb-0 md:mr-4">
              <motion.h2 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">Integration is the key</motion.h2>
              <motion.p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">You can integrate Flowbite with many tools to make your work even more efficient and lightning fast based on Tailwind CSS.</motion.p>
            </motion.div>
            <motion.div className="flex items-center flex-shrink-0">
              <motion.a href="#" className="inline-flex items-center px-3 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><motion.svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></motion.svg> Learn more</motion.a>
              <motion.a href="#" className="inline-flex px-3 py-2 mr-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get started <svg className="h-4 w-4 ml-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><motion.path clip-rule="evenodd" fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"></motion.path></svg></motion.a>
              <motion.button data-dismiss-target="#informational-banner" type="button" onClick={handleBannerClick} className="absolute top-2.5 right-2.5 md:relative md:top-auto md:right-auto flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                <motion.svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><motion.path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></motion.path></motion.svg>
                <motion.span className="sr-only">Close banner</motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        ) : null}
      </motion.div>
    </>
  )
};

export { }; // add this line to make the file a module
