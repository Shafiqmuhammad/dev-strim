'use client'
import Image from "next/image";
import imagePic1 from "public/developer.jpeg";
import imagePic2 from "public/zia.jpg"
import imagePic3 from "public/daniyal.jpeg"

export default function Disclaimer(): JSX.Element {
    return (
        <>
            <div className="mx-auto   text-justify bg-black" id="Disclaimer">


                <h2 className="text-center mb-3 text-3xl font-bold tracking-tight text-[#f38a0b] sm:text-5xl"><b>DISCLAIMER</b></h2>
                <p className="mb-3 text-lg  text-[#f38a0b]">
                    <h1>Disclaimer for DevSTRIM</h1>

                    <p>If you require any more information or have any questions about our sites disclaimer, please feel free to contact us by email at shafiq00786@hotmail.com. Our Disclaimer was generated with the help of the <a href="https://www.disclaimergenerator.net/">Free Disclaimer Generator</a>.</p>

                    <h2>Disclaimers for DevSTRIM.com</h2>

                    <p>All the information on this website - DevSTRIM.com - is published in good faith and for general information purpose only. DevSTRIM.com does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (DevSTRIM.com), is strictly at your own risk. DevSTRIM.com will not be liable for any losses and/or damages in connection with the use of our website.</p>

                    <p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone.</p>

                    <p>Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their Terms of Service before engaging in any business or uploading any information.</p>

                    <h2>Consent</h2>

                    <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>

                    <h2>Update</h2>

                    <p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
                </p>
            </div>
        </>

    )
}