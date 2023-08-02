import Layout from "@/components/layout";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

export default function TnC() {
    return (
        <>
            <Layout>

                <motion.div>
                    <motion.div>
                        <motion.div
                            variants={FADE_DOWN_ANIMATION_VARIANTS}
                            className="relative z-10 mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
                        >
                            <motion.p className="text-sm font-semibold text-[#1d9bf0]">
                                Last Updated: 23 April 2023
                            </motion.p>
                        </motion.div>
                        <motion.h1
                            className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
                            variants={FADE_DOWN_ANIMATION_VARIANTS}
                        >
                            <Balancer>Terms of Service</Balancer>
                        </motion.h1>
                        <motion.p
                            className="relative mt-6 z-10 text-center text-gray-500 md:text-xl"
                            variants={FADE_DOWN_ANIMATION_VARIANTS}
                        >
                            <Balancer>
                                By accessing this website we assume you accept these terms and conditions. Do not continue to use GlobPanel if you do not agree to take all of the terms and conditions stated on this page.
                            </Balancer>
                        </motion.p>
                    </motion.div>
                    <motion.div className="relative mt-10 z-10 mx-2 md:mx-6 flex justify-center flex-col">

                        <motion.p className="text-center mb-6 text-black md:text-xl rounded border ">These terms and conditions outline the rules and regulations for the use of GlobPanel's Website, located at https://globpanel.com.</motion.p>

                        <motion.p className="text-center mb-6 text-black md:text-xl rounded border ">The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of in. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</motion.p>

                        <motion.h3 className="text-black my-1 md:my-2 font-medium text-xl"><motion.strong>Cookies</motion.strong></motion.h3>

                        <motion.p>We employ the use of cookies. By accessing GlobPanel, you agreed to use cookies in agreement with the GlobPanel's Privacy Policy. </motion.p>

                        <motion.p>Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</motion.p>

                        <motion.h3 className="text-black my-1 md:my-2 font-medium text-xl"><motion.strong>License</motion.strong></motion.h3>

                        <motion.p>Unless otherwise stated, GlobPanel and/or its licensors own the intellectual property rights for all material on GlobPanel. All intellectual property rights are reserved. You may access this from GlobPanel for your own personal use subjected to restrictions set in these terms and conditions.</motion.p>

                        <motion.p>You must not:</motion.p>
                        <motion.ul className="list-disc	ml-6">
                            <motion.li>Republish material from GlobPanel</motion.li>
                            <motion.li>Sell, rent or sub-license material from GlobPanel</motion.li>
                            <motion.li>Reproduce, duplicate or copy material from GlobPanel</motion.li>
                            <motion.li>Redistribute content from GlobPanel</motion.li>
                        </motion.ul>

                        <motion.p>This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the <a href="https://www.termsfeed.com/terms-conditions-generator/">Terms and Conditions Generator</a>.</motion.p>

                        <motion.p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. GlobPanel does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of GlobPanel,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, GlobPanel shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</motion.p>

                        <motion.p>GlobPanel reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</motion.p>

                        <motion.p>You warrant and represent that:</motion.p>

                        <motion.ul className="list-disc	ml-6">
                            <motion.li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</motion.li>
                            <motion.li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</motion.li>
                            <motion.li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</motion.li>
                            <motion.li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</motion.li>
                        </motion.ul>

                        <motion.p>You hereby grant GlobPanel a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</motion.p>

                        <motion.h3 className="text-black my-1 md:my-2 font-medium text-xl"><motion.strong>Hyperlinking to our Content</motion.strong></motion.h3>

                        <motion.p>The following organizations may link to our Website without prior written approval:</motion.p>

                        <motion.ul className="list-disc	ml-6">
                            <motion.li>Government agencies;</motion.li>
                            <motion.li>Search engines;</motion.li>
                            <motion.li>News organizations;</motion.li>
                            <motion.li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</motion.li>
                            <motion.li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</motion.li>
                        </motion.ul>

                        <motion.p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.</motion.p>

                        <motion.p>We may consider and approve other link requests from the following types of organizations:</motion.p>

                        <motion.ul className="list-disc	ml-6">
                            <motion.li>commonly-known consumer and/or business information sources;</motion.li>
                            <motion.li>dot.com community sites;</motion.li>
                            <motion.li>associations or other groups representing charities;</motion.li>
                            <motion.li>online directory distributors;</motion.li>
                            <motion.li>internet portals;</motion.li>
                            <motion.li>accounting, law and consulting firms; and</motion.li>
                            <motion.li>educational institutions and trade associations.</motion.li>
                        </motion.ul>

                        <motion.p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of GlobPanel; and (d) the link is in the context of general resource information.</motion.p>

                        <motion.p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.</motion.p>

                        <motion.p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to GlobPanel. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</motion.p>

                        <motion.p>Approved organizations may hyperlink to our Website as follows:</motion.p>

                        <motion.ul className="list-disc	ml-6">
                            <motion.li>By use of our corporate name; or</motion.li>
                            <motion.li>By use of the uniform resource locator being linked to; or</motion.li>
                            <motion.li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.</motion.li>
                        </motion.ul>

                        <motion.p>No use of GlobPanel's logo or other artwork will be allowed for linking absent a trademark license agreement.</motion.p>

                        <motion.h3 className="text-black my-1 md:my-2 font-medium text-xl"><motion.strong>iFrames</motion.strong></motion.h3>

                        <motion.p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</motion.p>

                        <motion.h3 className="text-black my-1 md:my-2 font-medium text-xl"><motion.strong>Content Liability</motion.strong></motion.h3>

                        <motion.p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</motion.p>

                        <motion.h3 className="text-black my-1 md:my-2 font-medium text-xl"><motion.strong>Reservation of Rights</motion.strong></motion.h3>

                        <motion.p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</motion.p>

                        <motion.h3 className="text-black my-1 md:my-2 font-medium text-xl"><motion.strong>Removal of links from our website</motion.strong></motion.h3>

                        <motion.p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</motion.p>

                        <motion.p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</motion.p>

                        <motion.h3 className="text-black my-1 md:my-2 font-medium text-xl"><motion.strong>Free RDPs</motion.strong></motion.h3>

                        <motion.p>Our Free RDP has some limitations with security of user files: </motion.p>

                        <motion.ul className="list-disc	ml-6">
                            <motion.li>We do not guarantee about security of users files and folders;</motion.li>
                            <motion.li>Windows RDP are in less quantity so you may not get windows RDP always;</motion.li>
                            <motion.li>One RDP may be used by many users;</motion.li>
                            <motion.li>We do not provide any type of back up for your file if lost; or</motion.li>
                            <motion.li>We do not guarantee any type of RDP uptime.</motion.li>
                        </motion.ul>

                        <motion.p>We do not allow anyone to use our FREE RDPs for violating any kind of law. and RESELLING our RDPs is strictly prohibited.</motion.p>

                        <motion.h3 className="text-black my-1 md:my-2 font-medium text-xl"><motion.strong>Disclaimer</motion.strong></motion.h3>

                        <motion.p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</motion.p>

                        <motion.ul className="list-disc	ml-6">
                            <motion.li>limit or exclude our or your liability for death or personal injury;</motion.li>
                            <motion.li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</motion.li>
                            <motion.li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</motion.li>
                            <motion.li>exclude any of our or your liabilities that may not be excluded under applicable law.</motion.li>
                        </motion.ul>

                        <motion.p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</motion.p>

                        <motion.p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</motion.p>
                    </motion.div>
                </motion.div>
            </Layout>
        </>
    )
}
