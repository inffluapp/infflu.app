import type { Metadata } from "next";
import Header from "../components/Header";
import Accordion from "../components/Accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soporte",
  description: "Soporte",
};

export default function Support() {
  return (
    <>
      <Header title="Soporte" hideDate />

      <div className="flex-1 w-full px-8 py-4 ">
        <div className="md:max-w-screen-lg md:mx-auto">
          <div className="flex -mx-2 flex-wrap">
            <div className="w-full md:flex-1 px-2">

              <p className="text-tertiary text-center mb-4">Preguntas frecuentes</p>
              
              <p className="font-bold mb-4">General Questions</p>

              <div className="flex flex-wrap flex-1 mb-6 -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title="What is Inffluapp?"
                    text="Inffluapp is a marketplace that connects influencers with businesses for collaboration opportunities. Businesses post campaigns, and influencers can apply to participate, earning money, products, or other rewards. "
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title="Who can use Inffluapp?"
                    text={(
                      <>
                        <p>The app is designed for:</p>   
                        <ul className="list-disc pl-6">
                          <li>Influencers with at least 500 followers on Instagram.</li> 
                          <li>Businesses looking to partner with influencers to promote their products or services</li>. 
                        </ul>
                      </>
                    )}
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title="Do I need an invitation code to register?"
                    text="Yes, an invitation code is required to create an account, whether you are an influencer or a business. If you don’t have one, contact us at hola@infflu.app for assistance. "
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title="How do I sign up?"
                    text="Use your invitation code to sign up with your Instagram account and provide a valid WhatsApp number. "
                  />
                </div>
              </div>

              <p className="font-bold mb-4">For Influencers</p>

              <div className="flex flex-wrap flex-1 mb-6 -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title="What types of campaigns are available?"
                    text={(
                      <>
                        <p>Campaigns may offer:</p>   
                        <ul className="list-disc pl-6">
                          <li>Monetary Payments: Cash rewards for completed collaborations. </li> 
                          <li>Discounts: Vouchers for products/services. </li>
                          <li>Product Exchange: Free products in return for content creation. </li>. 
                          <li>Courtesy Campaigns: Complimentary experiences or items for participation. </li>. 
                        </ul>
                      </>
                    )}
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title="How do I link my Instagram and TikTok accounts?"
                    text="You can link your accounts during the signup process or later in the profile settings. Linking these accounts allows businesses to view your follower count and profile details for campaign evaluation. "
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title="How do I apply to campaigns?"
                    text="Browse campaigns in the app and click Apply on the ones that match your audience. You’ll receive a notification if selected. "
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title="How do I submit evidence for campaigns?"
                    text="After completing a campaign, upload the required content (e.g., posts, stories) through the app’s submission feature for verification by the business. "
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title="How do I receive payments or products?"
                    text={(
                      <>
                        <ul className="list-disc pl-6">
                          <li>Payments: Monetary rewards are sent through the app’s designated payment method. </li> 
                          <li>Products: Businesses will coordinate delivery details within the app.</li>
                        </ul>
                      </>
                    )}
                  />
                </div>
              </div>

              <p className="font-bold mb-4">For Businesses</p>

              <div className="flex flex-wrap flex-1 mb-6 -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title="How do I create a campaign?"
                    text="Log in to your account, go to the Create Campaign section, and specify details such as amount of followers, requirements, and rewards."
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title="Can I choose which influencers participate?"
                    text="Yes, after reviewing influencer applications, you can select the ones that best align with your campaign goals. "
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title="How do I ensure influencers complete their tasks?"
                    text="Influencers are required to submit evidence (e.g., screenshots, links, or media) of completed tasks. You can review and approve their submissions directly in the app. "
                  />
                </div>
              </div>

              <p className="font-bold mb-4">Privacy and Security</p>

              <div className="flex flex-wrap flex-1 mb-6 -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title="Why do you collect Instagram, TikTok, and WhatsApp data?"
                    text="We use Instagram and TikTok data (username and follower count) to verify your profile and match you with campaigns. Your WhatsApp number is collected for secure communication and verification purposes."
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title="How is my data protected?"
                    text={(
                      <>
                        <p> 
                          We use industry-standard encryption and follow best practices to safeguard your information. For more details, see our <Link href="/terms/privacy" className="text-tertiary">Privacy Policy</Link>.
                        </p>
                      </>
                    )}
                  />
                </div>
              </div>


              <p className="font-bold mb-4">Technical Issues</p>

              <div className="flex flex-wrap flex-1 mb-6 -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title=" I’m having trouble logging in. What should I do?"
                    text="Ensure you’re using the correct credentials for Instagram. If the issue persists, contact support at hola@influ.app"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title="The app isn’t working properly. What should I do?"
                    text={(
                      <>
                        <p>Try the following:</p>
                        <ul className="list-disc pl-6">
                          <li>Restart the app.</li>
                          <li>Ensure you have the latest version installed.</li>
                          <li>Contact support if the issue persists.</li>
                        </ul>
                      </>
                    )}
                  />
                </div>
              </div>

              <p className="font-bold mb-4">Miscellaneous</p>

              <div className="flex flex-wrap flex-1 mb-6 -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title="Is there a cost to use Inffluapp?"
                    text={(
                      <>
                        <ul className="list-disc pl-6">
                          <li>Influencers: Free to use. </li>
                          <li>Businesses: Posting campaigns may involve a fee depending on the campaign selected. Businesses are required to pay an inscription for the creation of campaigns.</li>
                        </ul>
                      </>
                    )}
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title="Can I delete my account?"
                    text="Yes, you can request account deletion by contacting us at hola@influ.app "
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <Accordion
                    title="How can I provide feedback about the app?"
                    text="We value your input! Send your suggestions or feedback to hola@influ.app"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/4 px-2">
              <div className="rounded-xl shadow text-center p-2 ">
                <p className="text-tertiary text-center mb-8">Cómunicate con el equipo Inffluapp</p>
                <img src="/speaker.png" className="m-auto w-full md:w-1/2 mb-8"/>
                <p className=" text-center mb-8">¿Necesitas ayuda con algún proceso de la aplicación o del servicio Inffluapp?</p>
                <p className="mb-4"><a href="tel:+521234567890" className="text-tertiary text-center">+52 1234567890</a></p>
                <p className="mb-4"><a href="mailto:hola@influ.app" className="text-tertiary text-center">hola@influ.app</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
