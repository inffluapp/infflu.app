import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Privacy Policy ",
  description: "Privacy Policy ",
};

export default function Terms() {
  return (
    <>
      <Header title="Privacy Policy" />

      <div className="flex-1 w-full  px-8 py-4">
        <p className="mb-6">Inffluapp is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our app, Inffluapp, available on the Google Play Store and App Store. By using our app, you agree to the practices described in this Privacy Policy.   </p>

        <p className="font-bold mb-4">1. Information We Collect </p>

        <p className="font-bold mb-4">a. Information You Provide  </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Instagram Integration: When you log in using Instagram, we collect your profile photo, username, name, and follower count to create and manage your profile within the app.</li>   

          <li>TikTok Integration: If you choose to link your TikTok account, we access your TikTok username and follower count to enhance your profile and campaign matching.</li>   

          <li>WhatsApp Number: We collect and verify your WhatsApp number for secure communication and user authentication.</li>   

        </ul>


        

        <p className="font-bold mb-4">b. Automatically Collected Information </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Device Information: Details about your device, such as model, operating system, and unique identifiers.</li>   

          <li>Usage Data: Information about your activity in the app, including interactions with campaigns and features used.</li>   

        </ul>


        

        <p className="font-bold mb-4">2. How We Use Your Information  </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Profile Management: To create and display your profile using Instagram and TikTok data, including follower counts, for visibility in campaigns.   </li>

          <li>Campaign Matching: To connect you with relevant campaigns based on your profile and audience.</li>   

          <li>Communication: To facilitate contact through WhatsApp and in-app notifications regarding campaigns and updates.</li> 

          <li>App Improvement: To analyze user behavior and improve functionality.   </li>

          <li>Compliance: To ensure adherence to legal and security requirements.   </li>

        </ul>


        

        <p className="font-bold mb-4">3. How We Share Your Information</p>

        <ul className="list-disc pl-6 mb-6">
          <li>With Businesses: Public influencer data (e.g., username, follower count) is shared with businesses for campaign evaluation and collaboration.</li>   

          <li>Service Providers: Trusted third-party services that assist with app operations, such as analytics or communication tools.   </li>

          <li>Legal Requirements: Information may be disclosed to comply with legal obligations or protect our legal rights.   </li>

        </ul>


        

        <p className="font-bold mb-4">4. Your Rights and Choices </p>  

        <ul className="list-disc pl-6 mb-6">
          <li>Access and Update: You can view and update your profile information in the app.   </li>

          <li>Delete Account: You can request the deletion of your account and associated data by contacting us at hola@infflu.app </li>

        </ul>


        

        <p className="font-bold mb-4">5. Data Retention </p>

        <p className="mb-6">We retain your information only as long as necessary to provide our services or meet legal requirements. If you delete your account, your data will be permanently removed unless retention is required by law.   </p>

        

        <p className="font-bold mb-4">6. Security </p>

        <p className="mb-6">We employ industry-standard security measures to protect your data. However, no system is entirely secure, and we cannot guarantee absolute protection.   </p>

        <p className="font-bold mb-4">7. Children's Privacy </p>
        

        <p className="mb-6">Our app is not intended for individuals under 13 years of age, and we do not knowingly collect information from children.</p>   

        

        <p className="font-bold mb-4">8. Changes to This Privacy Policy </p>

        <p className="mb-6">We may revise this Privacy Policy periodically. Any updates will be posted in the app, and your continued use constitutes acceptance of the changes.</p>   

        

        <p className="font-bold mb-4">9. Contact Us  </p>

        <p className="mb-6">If you have any questions or concerns about this Privacy Policy, please reach out to us:</p>   

        <p className="mb-6">Email:  hola@infflu.app </p>

        

        <p className="mb-6">By using Inffluapp, you acknowledge that you have read and understood this Privacy Policy and consent to the practices described herein. </p>
      </div>
    </>
  );
}
