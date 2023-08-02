import Layout from "@/components/layout"
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants"
import { motion } from "framer-motion"
import Link from "next/link"
import Balancer from "react-wrap-balancer"

export default function PrivacyPolicy() {
    return (
        <>
            <Layout>
                <motion.div
                    className="relative z-10"
                >

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
                        <Balancer>Privacy Policy</Balancer>
                    </motion.h1>
                    <motion.p
                        className="relative mt-6 z-10 text-center text-gray-500 md:text-xl"
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                    >
                        <Balancer>
                            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                        </Balancer>
                    </motion.p>
                    <motion.div className="mt-10 mx-2 md:mx-6 flex justify-center flex-col">

                        <motion.p className="text-center mb-6 text-black md:text-xl rounded border ">We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</motion.p>
                        <motion.h1 className="text-black my-1 md:my-2 font-medium text-3xl">Interpretation and Definitions</motion.h1>
                        <motion.h2 className="text-black my-1 md:my-2 font-medium text-2xl">Interpretation</motion.h2>
                        <motion.p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</motion.p>
                        <motion.h2 className="text-black my-1 md:my-2 font-medium text-2xl">Definitions</motion.h2>
                        <motion.p>For the purposes of this Privacy Policy:</motion.p>
                        <motion.ul className="list-disc	ml-6">
                            <motion.li>
                                <motion.p><motion.strong>Account</motion.strong> means a unique account created for You to access our Service or parts of our Service.</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>Affiliate</motion.strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>Company</motion.strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to DishIs In.</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>Cookies</motion.strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>Country</motion.strong> refers to: Haryana,  India</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>Device</motion.strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>Personal Data</motion.strong> is any information that relates to an identified or identifiable individual.</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>Service</motion.strong> refers to the Website.</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>Service Provider</motion.strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>Usage Data</motion.strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>Website</motion.strong> refers to GlobPanel, accessible from <a href="https://globpanel.com" rel="external nofollow noopener" target="_blank">https://globpanel.com</a></motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>You</motion.strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</motion.p>
                            </motion.li>
                        </motion.ul>
                        <motion.h1 className="text-black my-1 md:my-2 font-medium text-3xl">Collecting and Using Your Personal Data</motion.h1>
                        <motion.h2 className="text-black my-1 md:my-2 font-medium text-2xl">Types of Data Collected</motion.h2>
                        <motion.h3 className="text-black my-1 md:my-2 font-medium text-xl">Personal Data</motion.h3>
                        <motion.p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</motion.p>
                        <motion.ul className="list-disc	ml-6">
                            <motion.li>
                                <motion.p>Email address</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p>First name and last name</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p>Usage Data</motion.p>
                            </motion.li>
                        </motion.ul>
                        <motion.h3 className="text-black my-1 md:my-2 font-medium text-xl">Usage Data</motion.h3>
                        <motion.p>Usage Data is collected automatically when using the Service.</motion.p>
                        <motion.p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</motion.p>
                        <motion.p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</motion.p>
                        <motion.p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</motion.p>
                        <motion.h3 className="text-black my-1 md:my-2 font-medium text-xl">Tracking Technologies and Cookies</motion.h3>
                        <motion.p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</motion.p>
                        <motion.ul className="list-disc	ml-6">
                            <motion.li><motion.strong>Cookies or Browser Cookies.</motion.strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</motion.li>
                            <motion.li><motion.strong>Web Beacons.</motion.strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</motion.li>
                        </motion.ul>
                        <motion.p>Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies on the <a href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking" target="_blank">Free Privacy Policy website</a> article.</motion.p>
                        <motion.p>We use both Session and Persistent Cookies for the purposes set out below:</motion.p>
                        <motion.ul className="list-disc	ml-6">
                            <motion.li>
                                <motion.p><motion.strong>Necessary / Essential Cookies</motion.strong></motion.p>
                                <motion.p>Type: Session Cookies</motion.p>
                                <motion.p>Administered by: Us</motion.p>
                                <motion.p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>Cookies Policy / Notice Acceptance Cookies</motion.strong></motion.p>
                                <motion.p>Type: Persistent Cookies</motion.p>
                                <motion.p>Administered by: Us</motion.p>
                                <motion.p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>Functionality Cookies</motion.strong></motion.p>
                                <motion.p>Type: Persistent Cookies</motion.p>
                                <motion.p>Administered by: Us</motion.p>
                                <motion.p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</motion.p>
                            </motion.li>
                        </motion.ul>
                        <motion.p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</motion.p>
                        <motion.h2 className="text-black my-1 md:my-2 font-medium text-2xl">Use of Your Personal Data</motion.h2>
                        <motion.p>The Company may use Personal Data for the following purposes:</motion.p>
                        <motion.ul className="list-disc	ml-6">
                            <motion.li>
                                <motion.p><motion.strong>To provide and maintain our Service</motion.strong>, including to monitor the usage of our Service.</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>To manage Your Account:</motion.strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>For the performance of a contract:</motion.strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>To contact You:</motion.strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>To provide You</motion.strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>To manage Your requests:</motion.strong> To attend and manage Your requests to Us.</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>For business transfers:</motion.strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>For other purposes</motion.strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</motion.p>
                            </motion.li>
                        </motion.ul>
                        <motion.p>We may share Your personal information in the following situations:</motion.p>
                        <motion.ul className="list-disc	ml-6">
                            <motion.li><motion.strong>With Service Providers:</motion.strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.</motion.li>
                            <motion.li><motion.strong>For business transfers:</motion.strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</motion.li>
                            <motion.li><motion.strong>With Affiliates:</motion.strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</motion.li>
                            <motion.li><motion.strong>With business partners:</motion.strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</motion.li>
                            <motion.li><motion.strong>With other users:</motion.strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</motion.li>
                            <motion.li><motion.strong>With Your consent</motion.strong>: We may disclose Your personal information for any other purpose with Your consent.</motion.li>
                        </motion.ul>
                        <motion.h2 className="text-black my-1 md:my-2 font-medium text-2xl">Retention of Your Personal Data</motion.h2>
                        <motion.p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</motion.p>
                        <motion.p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</motion.p>
                        <motion.h2 className="text-black my-1 md:my-2 font-medium text-2xl">Transfer of Your Personal Data</motion.h2>
                        <motion.p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</motion.p>
                        <motion.p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</motion.p>
                        <motion.p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</motion.p>
                        <motion.h2 className="text-black my-1 md:my-2 font-medium text-2xl">Delete Your Personal Data</motion.h2>
                        <motion.p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</motion.p>
                        <motion.p>Our Service may give You the ability to delete certain information about You from within the Service.</motion.p>
                        <motion.p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</motion.p>
                        <motion.p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</motion.p>
                        <motion.h2 className="text-black my-1 md:my-2 font-medium text-2xl">Disclosure of Your Personal Data</motion.h2>
                        <motion.h3 className="text-black my-1 md:my-2 font-medium text-xl">Business Transactions</motion.h3>
                        <motion.p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</motion.p>
                        <motion.h3 className="text-black my-1 md:my-2 font-medium text-xl">Law enforcement</motion.h3>
                        <motion.p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</motion.p>
                        <motion.h3 className="text-black my-1 md:my-2 font-medium text-xl">Other legal requirements</motion.h3>
                        <motion.p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</motion.p>
                        <motion.ul className="list-disc	ml-6">
                            <motion.li>Comply with a legal obligation</motion.li>
                            <motion.li>Protect and defend the rights or property of the Company</motion.li>
                            <motion.li>Prevent or investigate possible wrongdoing in connection with the Service</motion.li>
                            <motion.li>Protect the personal safety of Users of the Service or the public</motion.li>
                            <motion.li>Protect against legal liability</motion.li>
                        </motion.ul>
                        <motion.h2 className="text-black my-1 md:my-2 font-medium text-2xl">Security of Your Personal Data</motion.h2>
                        <motion.p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</motion.p>
                        <motion.h1 className="text-black my-1 md:my-2 font-medium text-3xl">Children's Privacy</motion.h1>
                        <motion.p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</motion.p>
                        <motion.p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</motion.p>
                        <motion.h1 className="text-black my-1 md:my-2 font-medium text-3xl">Links to Other Websites</motion.h1>
                        <motion.p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</motion.p>
                        <motion.p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</motion.p>
                        <motion.h1 className="text-black my-1 md:my-2 font-medium text-3xl">Changes to this Privacy Policy</motion.h1>
                        <motion.p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</motion.p>
                        <motion.p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</motion.p>
                        <motion.p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</motion.p>
                        <motion.h1 className="text-black my-1 md:my-2 font-medium text-3xl">Contact Us</motion.h1>
                        <motion.p>If you have any questions about this Privacy Policy, You can contact us:</motion.p>
                        <motion.ul className="list-disc	ml-6">
                            <motion.li>
                                <motion.p><motion.strong>By email:</motion.strong> <motion.em>contact@globpanel.com</motion.em></motion.p>
                            </motion.li>
                            <motion.li>
                                <motion.p><motion.strong>By visiting this page on our website:</motion.strong> <Link href="/contact" rel="external nofollow noopener" target="_blank">Contact Us</Link></motion.p>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                </motion.div>
            </Layout>
        </>
    )
}