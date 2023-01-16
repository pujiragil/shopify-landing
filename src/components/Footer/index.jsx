import MainButton from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";

export default function Footer() {
  return <div className="bg-primary-100">
    {/* Contact */}
    <div className="container mx-auto max-w-[1344px]">
      <section className="px-5 py-10 flex flex-col items-center text-center border-b border-white/15">
        <SubHead color="text-white" style="mb-[18px]">We can take care of the installation</SubHead>
        <Paragraph color="text-white/70" fontSize="text-sm" style="mb-[30px]">Don’t want to deal with technical stuff? Let us fire up Uvodo for you, so you can spend your time selling right away.</Paragraph>
        <MainButton style="w-full">CONTACT US</MainButton>
      </section>
    </div>
    {/* Footer */}
    <footer className="container mx-auto max-w-[1344px]">
      <div className="px-5 py-10 flex flex-col">
        <img className="w-[125px] h-auto mb-10" src="shopify-footer.png" alt="shopify-footer" />
        <div className="grid grid-cols-2 gap-9 font-body">
          <div>
            <h6 className="mb-5 font-medium text-lg text-white">Features</h6>
            <div className="flex flex-col gap-4 text-white/70 text-sm">
              <a href="#">Find a Patner</a>
              <a href="#">Become a Patner</a>
              <a href="#">Affiliates</a>
              <a href="#">Patner Offers</a>
              <a href="#">Store Examples</a>
            </div>
          </div>
          <div>
            <h6 className="mb-5 font-medium text-lg text-white">Company</h6>
            <div className="flex flex-col gap-4 text-white/70 text-sm">
              <a href="#">Leaders</a>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
              <a href="#">Awards</a>
            </div>
          </div>
          <div>
            <h6 className="mb-5 font-medium text-lg text-white">Resources</h6>
            <div className="flex flex-col gap-4 text-white/70 text-sm">
              <a href="#">Overview</a>
              <a href="#">Articles</a>
              <a href="#">Webinars</a>
              <a href="#">Events</a>
              <a href="#">Ecommerce</a>
            </div>
          </div>
          <div>
            <h6 className="mb-5 font-medium text-lg text-white">Get Help</h6>
            <div className="flex flex-col gap-4 text-white/70 text-sm">
              <a href="#">Shopify Company</a>
              <a href="#">Knowledge Base</a>
              <a href="#">Videos Contact</a>
              <a href="#">Tech Support</a>
              <a href="#">API Documentation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
}