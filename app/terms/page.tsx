import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions",
};

export default function Terms() {
  return (
    <>
      <Header title="Terms and Conditions" />

      <div className="flex-1 w-full  px-8 py-4">

        <p className="mb-6">Welcome to Inffluapp!</p>
        <p className="mb-6">By accessing or using our app, you agree to the following terms and conditions ("Terms"). Please read them carefully before using the app. If you do not agree to these Terms, you must not use the app.</p>

        <p className="font-bold mb-4">1. Definitions</p>
        <ul className="list-disc pl-6 mb-6">
          <li><span>“App”</span> refers to Inffluapp, available on the App Store and Google Play Store.</li>   
          <li><span>“User”</span> refers to anyone who accesses or uses the app, including influencers and businesses.</li> 
          <li><span>“We”, “us”, and “our”</span> refer to Inffluapp and its operators.</li>
        </ul>

        <p className="font-bold mb-4">2. Eligibility</p>

        <ul className="list-disc pl-6 mb-6">
          <li>You must be at least 13 years old to use the app.</li>   

          <li>By linking Instagram or TikTok, you represent that you are authorized to provide access to the linked account and its data.</li>   
        </ul> 

        <p className="font-bold mb-4">3. User Accounts</p> 

        <ul className="list-disc pl-6 mb-6">
          <li><span>Registration:</span> Users must provide accurate and complete information during registration.</li>   

          <li><span>Account Security:</span> You are responsible for maintaining the confidentiality of your account credentials. Any unauthorized use of your account must be reported immediately.</li>   

          <li><span>Integration:</span> Users may link their Instagram and TikTok accounts to provide profile data (e.g., username, profile photo, follower count).   </li>

        </ul>

        <p className="font-bold mb-4">4. Services Provided </p>

        <p className="mb-6">For Influencers:</p>

        <ul className="list-disc pl-6 mb-6">
          <li>Apply for campaigns posted by businesses.  </li>
          <li>Submit required evidence for campaign completion.</li>  
        </ul>

        <p className="mb-6">For Businesses: </p>  

        <ul className="list-disc pl-6 mb-6">
          <li>Post campaigns with specific requirements. </li>
          <li>Review and select influencers for collaborations. </li>
        </ul>

        <p className="font-bold mb-4">5. User Obligations </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Accurate Information: You agree to provide true and up-to-date information about yourself, including Instagram, TikTok, and WhatsApp details.   </li>

          <li>Compliance: You must comply with all applicable laws and the terms of Instagram, TikTok, and WhatsApp when using the app.</li>   

          <li>Content Ownership: You warrant that any content submitted as part of a campaign does not infringe on any third-party rights. </li>  

        </ul>

        <p className="font-bold mb-4">6. Fees and Payments  </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Businesses: Payments for campaigns must be completed through authorized channels.</li>   

          <li>Influencers: Incentives, including monetary payments or products, are distributed based on campaign agreements. </li>  

          <li>Taxes: Users are responsible for any applicable taxes related to earnings or expenses incurred through the app.   </li>

        </ul>

        <p className="font-bold mb-4">7. Privacy </p>

        <ul className="list-disc pl-6 mb-6">
          <li>By using the app, you agree to the collection and use of your information as outlined in our Privacy Policy.</li> 

          <li>Linked accounts (Instagram, TikTok, and WhatsApp) are accessed solely for the purposes specified in the Privacy Policy. </li>  

        </ul>

        <p className="font-bold mb-4">8. Intellectual Property   </p>

        <ul className="list-disc pl-6 mb-6">
          <li>The app, including its design, content, and functionality, is owned by Inffluapp and protected by intellectual property laws.</li>   

          <li>Users retain ownership of content they create but grant Inffluapp a license to use it for operational purposes (e.g., campaign verification).   </li>

        </ul>    

        <p className="font-bold mb-4">9. Prohibited Activities  </p>

        <p className="mb-6">You agree not to:   </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Provide false or misleading information.   </li>

          <li>Use the app for any unlawful or unauthorized purpose.   </li>

          <li>Reverse-engineer, decompile, or otherwise attempt to extract the app's source code.   </li>

          <li>Engage in fraudulent or unethical behavior, including manipulating follower counts or campaign submissions.</li>   

        </ul>

        <p className="font-bold mb-4">10. Termination  </p>

        <p className="mb-6">We reserve the right to suspend or terminate your access to the app if you violate these Terms or engage in any activity deemed harmful to the app or its users.   </p>

        <p className="font-bold mb-4">11. Disclaimer of Warranties   </p>

        <ul className="list-disc pl-6 mb-6">
          <li>The app is provided "as is" without any warranties of any kind, express or implied.   </li>

          <li>We do not guarantee uninterrupted or error-free operation of the app.  </li>
        </ul>

        <p className="font-bold mb-4">12. Limitation of Liability </p>  

        <p className="mb-6">To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the app.   </p>
        
        <p className="font-bold mb-4">13. Changes to These Terms </p>

        <p className="mb-6">We may update these Terms periodically. Any changes will be posted in the app, and your continued use constitutes acceptance of the updated Terms.   </p>

        <p className="font-bold mb-4">14. Governing Law  </p>

        <p className="">These Terms are governed by the laws of Mexico. Any disputes arising under these Terms will be resolved in the courts of Mexico. </p>

        <p className="font-bold mb-4">15. Contact Us  </p>

        <p className="mb-6">If you have any questions about these Terms, please contact us at: </p>  

        <p className="mb-6">Email: hola@influ.app  </p>

        <p className="mb-6">By using Inffluapp, you acknowledge that you have read, understood, and agree to these Terms and Conditions. </p>
      </div>
    </>
  );
}
